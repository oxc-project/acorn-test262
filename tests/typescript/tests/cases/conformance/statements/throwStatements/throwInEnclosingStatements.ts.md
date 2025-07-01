__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 11
      },
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
          "typeAnnotation": null,
          "start": 12,
          "end": 13
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ThrowStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 27,
              "end": 28
            },
            "start": 21,
            "end": 29
          }
        ],
        "start": 15,
        "end": 31
      },
      "expression": false,
      "start": 0,
      "end": 31
    },
    {
      "type": "ExpressionStatement",
      "expression": {
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
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 34,
                "end": 35
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 34,
              "end": 35
            }
          ],
          "start": 33,
          "end": 36
        },
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
                  "start": 40,
                  "end": 41
                },
                "typeArguments": null,
                "start": 40,
                "end": 41
              },
              "start": 38,
              "end": 41
            },
            "start": 37,
            "end": 41
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ThrowStatement",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 54,
                "end": 55
              },
              "start": 48,
              "end": 56
            }
          ],
          "start": 46,
          "end": 58
        },
        "id": null,
        "generator": false,
        "start": 33,
        "end": 58
      },
      "directive": null,
      "start": 33,
      "end": 58
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 67,
                "end": 73
              },
              "start": 65,
              "end": 73
            },
            "start": 64,
            "end": 73
          },
          "init": null,
          "definite": false,
          "start": 64,
          "end": 73
        }
      ],
      "declare": false,
      "start": 60,
      "end": 74
    },
    {
      "type": "SwitchStatement",
      "discriminant": {
        "type": "Identifier",
        "decorators": [],
        "name": "y",
        "optional": false,
        "typeAnnotation": null,
        "start": 83,
        "end": 84
      },
      "cases": [
        {
          "type": "SwitchCase",
          "test": {
            "type": "Literal",
            "value": "a",
            "raw": "'a'",
            "start": 97,
            "end": 100
          },
          "consequent": [
            {
              "type": "ThrowStatement",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 116,
                "end": 117
              },
              "start": 110,
              "end": 118
            }
          ],
          "start": 92,
          "end": 118
        },
        {
          "type": "SwitchCase",
          "test": null,
          "consequent": [
            {
              "type": "ThrowStatement",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 146,
                "end": 147
              },
              "start": 140,
              "end": 148
            }
          ],
          "start": 123,
          "end": 148
        }
      ],
      "start": 75,
      "end": 150
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
            "start": 156,
            "end": 157
          },
          "init": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 160,
            "end": 161
          },
          "definite": false,
          "start": 156,
          "end": 161
        }
      ],
      "declare": false,
      "start": 152,
      "end": 162
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "z",
          "optional": false,
          "typeAnnotation": null,
          "start": 170,
          "end": 171
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 10,
          "raw": "10",
          "start": 174,
          "end": 176
        },
        "start": 170,
        "end": 176
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ThrowStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null,
              "start": 190,
              "end": 191
            },
            "start": 184,
            "end": 192
          }
        ],
        "start": 178,
        "end": 194
      },
      "start": 163,
      "end": 194
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 205,
              "end": 206
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 209,
              "end": 210
            },
            "definite": false,
            "start": 205,
            "end": 210
          }
        ],
        "declare": false,
        "start": 201,
        "end": 210
      },
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ThrowStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 223,
              "end": 224
            },
            "start": 217,
            "end": 225
          }
        ],
        "start": 215,
        "end": 227
      },
      "start": 196,
      "end": 227
    },
    {
      "type": "ForInStatement",
      "left": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "idx",
              "optional": false,
              "typeAnnotation": null,
              "start": 238,
              "end": 241
            },
            "init": null,
            "definite": false,
            "start": 238,
            "end": 241
          }
        ],
        "declare": false,
        "start": 234,
        "end": 241
      },
      "right": {
        "type": "ObjectExpression",
        "properties": [],
        "start": 245,
        "end": 247
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ThrowStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "idx",
              "optional": false,
              "typeAnnotation": null,
              "start": 257,
              "end": 260
            },
            "start": 251,
            "end": 261
          }
        ],
        "start": 249,
        "end": 263
      },
      "start": 229,
      "end": 263
    },
    {
      "type": "DoWhileStatement",
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ThrowStatement",
            "argument": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 276,
              "end": 280
            },
            "start": 270,
            "end": 281
          }
        ],
        "start": 268,
        "end": 283
      },
      "test": {
        "type": "Literal",
        "value": true,
        "raw": "true",
        "start": 289,
        "end": 293
      },
      "start": 265,
      "end": 294
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
            "name": "j",
            "optional": false,
            "typeAnnotation": null,
            "start": 300,
            "end": 301
          },
          "init": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 304,
            "end": 305
          },
          "definite": false,
          "start": 300,
          "end": 305
        }
      ],
      "declare": false,
      "start": 296,
      "end": 306
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "j",
          "optional": false,
          "typeAnnotation": null,
          "start": 314,
          "end": 315
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 0,
          "raw": "0",
          "start": 318,
          "end": 319
        },
        "start": 314,
        "end": 319
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ThrowStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "j",
              "optional": false,
              "typeAnnotation": null,
              "start": 329,
              "end": 330
            },
            "start": 323,
            "end": 331
          }
        ],
        "start": 321,
        "end": 333
      },
      "start": 307,
      "end": 333
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
        "start": 341,
        "end": 342
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
              "start": 343,
              "end": 344
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 343,
            "end": 344
          }
        ],
        "start": 342,
        "end": 345
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
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 360,
              "end": 365
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
                  "start": 367,
                  "end": 368
                },
                "typeArguments": null,
                "start": 367,
                "end": 368
              },
              "start": 365,
              "end": 368
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 352,
            "end": 369
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "biz",
              "optional": false,
              "typeAnnotation": null,
              "start": 374,
              "end": 377
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
                    "type": "ThrowStatement",
                    "argument": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 396,
                        "end": 400
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 401,
                        "end": 406
                      },
                      "optional": false,
                      "computed": false,
                      "start": 396,
                      "end": 406
                    },
                    "start": 390,
                    "end": 407
                  }
                ],
                "start": 380,
                "end": 413
              },
              "expression": false,
              "start": 377,
              "end": 413
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 374,
            "end": 413
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
              "start": 419,
              "end": 430
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
                    "type": "ThrowStatement",
                    "argument": {
                      "type": "ThisExpression",
                      "start": 449,
                      "end": 453
                    },
                    "start": 443,
                    "end": 454
                  }
                ],
                "start": 433,
                "end": 460
              },
              "expression": false,
              "start": 430,
              "end": 460
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 419,
            "end": 460
          }
        ],
        "start": 346,
        "end": 462
      },
      "abstract": false,
      "declare": false,
      "start": 335,
      "end": 462
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
            "start": 468,
            "end": 470
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "id",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 479,
                  "end": 481
                },
                "value": {
                  "type": "Literal",
                  "value": 12,
                  "raw": "12",
                  "start": 482,
                  "end": 484
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 479,
                "end": 484
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "biz",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 490,
                  "end": 493
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
                        "type": "ThrowStatement",
                        "argument": {
                          "type": "ThisExpression",
                          "start": 512,
                          "end": 516
                        },
                        "start": 506,
                        "end": 517
                      }
                    ],
                    "start": 496,
                    "end": 523
                  },
                  "expression": false,
                  "start": 493,
                  "end": 523
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 490,
                "end": 523
              }
            ],
            "start": 473,
            "end": 525
          },
          "definite": false,
          "start": 468,
          "end": 525
        }
      ],
      "declare": false,
      "start": 464,
      "end": 525
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 525
}
```
