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
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 94,
        "end": 97
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
              "start": 98,
              "end": 99
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null,
                "start": 108,
                "end": 114
              },
              "typeArguments": null,
              "start": 108,
              "end": 114
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 98,
            "end": 114
          }
        ],
        "start": 97,
        "end": 115
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
                "start": 119,
                "end": 120
              },
              "typeArguments": null,
              "start": 119,
              "end": 120
            },
            "start": 117,
            "end": 120
          },
          "start": 116,
          "end": 120
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 122,
        "end": 125
      },
      "expression": false,
      "start": 85,
      "end": 125
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
            "name": "r",
            "optional": false,
            "typeAnnotation": null,
            "start": 130,
            "end": 131
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 134,
              "end": 137
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [],
                "start": 138,
                "end": 140
              }
            ],
            "optional": false,
            "start": 134,
            "end": 141
          },
          "definite": false,
          "start": 130,
          "end": 141
        }
      ],
      "declare": false,
      "start": 126,
      "end": 142
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
            "start": 147,
            "end": 148
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 151,
            "end": 153
          },
          "definite": false,
          "start": 147,
          "end": 153
        }
      ],
      "declare": false,
      "start": 143,
      "end": 154
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
            "name": "r",
            "optional": false,
            "typeAnnotation": null,
            "start": 159,
            "end": 160
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 163,
              "end": 166
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [],
                "start": 167,
                "end": 169
              }
            ],
            "optional": false,
            "start": 163,
            "end": 170
          },
          "definite": false,
          "start": 159,
          "end": 170
        }
      ],
      "declare": false,
      "start": 155,
      "end": 171
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
        "start": 179,
        "end": 180
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
              "start": 181,
              "end": 182
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null,
                "start": 191,
                "end": 197
              },
              "typeArguments": null,
              "start": 191,
              "end": 197
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 181,
            "end": 197
          }
        ],
        "start": 180,
        "end": 198
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
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 205,
              "end": 216
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
                          "start": 227,
                          "end": 228
                        },
                        "typeArguments": null,
                        "start": 227,
                        "end": 228
                      },
                      "start": 225,
                      "end": 228
                    },
                    "start": 224,
                    "end": 228
                  },
                  "readonly": false,
                  "static": false,
                  "start": 217,
                  "end": 228
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 230,
                "end": 233
              },
              "expression": false,
              "start": 216,
              "end": 233
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 205,
            "end": 233
          }
        ],
        "start": 199,
        "end": 235
      },
      "abstract": false,
      "declare": false,
      "start": 173,
      "end": 235
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
            "name": "r2",
            "optional": false,
            "typeAnnotation": null,
            "start": 241,
            "end": 243
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 250,
              "end": 251
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [],
                "start": 252,
                "end": 254
              }
            ],
            "start": 246,
            "end": 255
          },
          "definite": false,
          "start": 241,
          "end": 255
        }
      ],
      "declare": false,
      "start": 237,
      "end": 256
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 268,
        "end": 269
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
              "start": 270,
              "end": 271
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null,
                "start": 280,
                "end": 286
              },
              "typeArguments": null,
              "start": 280,
              "end": 286
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 270,
            "end": 286
          }
        ],
        "start": 269,
        "end": 287
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 294,
              "end": 295
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
                  "start": 297,
                  "end": 298
                },
                "typeArguments": null,
                "start": 297,
                "end": 298
              },
              "start": 295,
              "end": 298
            },
            "accessibility": null,
            "static": false,
            "start": 294,
            "end": 299
          }
        ],
        "start": 288,
        "end": 301
      },
      "declare": false,
      "start": 258,
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
            "name": "i",
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
                  "start": 309,
                  "end": 310
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeLiteral",
                      "members": [],
                      "start": 311,
                      "end": 313
                    }
                  ],
                  "start": 310,
                  "end": 314
                },
                "start": 309,
                "end": 314
              },
              "start": 307,
              "end": 314
            },
            "start": 306,
            "end": 314
          },
          "init": null,
          "definite": false,
          "start": 306,
          "end": 314
        }
      ],
      "declare": false,
      "start": 302,
      "end": 315
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 343,
        "end": 347
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
              "start": 348,
              "end": 349
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "members": [],
              "start": 358,
              "end": 360
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 348,
            "end": 360
          }
        ],
        "start": 347,
        "end": 361
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
                "start": 365,
                "end": 366
              },
              "typeArguments": null,
              "start": 365,
              "end": 366
            },
            "start": 363,
            "end": 366
          },
          "start": 362,
          "end": 366
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 368,
        "end": 371
      },
      "expression": false,
      "start": 334,
      "end": 371
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
            "name": "r",
            "optional": false,
            "typeAnnotation": null,
            "start": 376,
            "end": 377
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null,
              "start": 380,
              "end": 384
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [],
                "start": 385,
                "end": 387
              }
            ],
            "optional": false,
            "start": 380,
            "end": 388
          },
          "definite": false,
          "start": 376,
          "end": 388
        }
      ],
      "declare": false,
      "start": 372,
      "end": 389
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
            "start": 394,
            "end": 395
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 398,
            "end": 400
          },
          "definite": false,
          "start": 394,
          "end": 400
        }
      ],
      "declare": false,
      "start": 390,
      "end": 401
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
            "name": "r",
            "optional": false,
            "typeAnnotation": null,
            "start": 406,
            "end": 407
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null,
              "start": 410,
              "end": 414
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [],
                "start": 415,
                "end": 417
              }
            ],
            "optional": false,
            "start": 410,
            "end": 418
          },
          "definite": false,
          "start": 406,
          "end": 418
        }
      ],
      "declare": false,
      "start": 402,
      "end": 419
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C2",
        "optional": false,
        "typeAnnotation": null,
        "start": 427,
        "end": 429
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
              "start": 430,
              "end": 431
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "members": [],
              "start": 440,
              "end": 442
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 430,
            "end": 442
          }
        ],
        "start": 429,
        "end": 443
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
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 450,
              "end": 461
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
                          "start": 472,
                          "end": 473
                        },
                        "typeArguments": null,
                        "start": 472,
                        "end": 473
                      },
                      "start": 470,
                      "end": 473
                    },
                    "start": 469,
                    "end": 473
                  },
                  "readonly": false,
                  "static": false,
                  "start": 462,
                  "end": 473
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 475,
                "end": 478
              },
              "expression": false,
              "start": 461,
              "end": 478
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 450,
            "end": 478
          }
        ],
        "start": 444,
        "end": 480
      },
      "abstract": false,
      "declare": false,
      "start": 421,
      "end": 480
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
            "name": "r2",
            "optional": false,
            "typeAnnotation": null,
            "start": 486,
            "end": 488
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "C2",
              "optional": false,
              "typeAnnotation": null,
              "start": 495,
              "end": 497
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [],
                "start": 498,
                "end": 500
              }
            ],
            "start": 491,
            "end": 501
          },
          "definite": false,
          "start": 486,
          "end": 501
        }
      ],
      "declare": false,
      "start": 482,
      "end": 502
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I2",
        "optional": false,
        "typeAnnotation": null,
        "start": 514,
        "end": 516
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
              "start": 517,
              "end": 518
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "members": [],
              "start": 527,
              "end": 529
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 517,
            "end": 529
          }
        ],
        "start": 516,
        "end": 530
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 537,
              "end": 538
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
                  "start": 540,
                  "end": 541
                },
                "typeArguments": null,
                "start": 540,
                "end": 541
              },
              "start": 538,
              "end": 541
            },
            "accessibility": null,
            "static": false,
            "start": 537,
            "end": 542
          }
        ],
        "start": 531,
        "end": 544
      },
      "declare": false,
      "start": 504,
      "end": 544
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
            "name": "i2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 553,
                  "end": 555
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeLiteral",
                      "members": [],
                      "start": 556,
                      "end": 558
                    }
                  ],
                  "start": 555,
                  "end": 559
                },
                "start": 553,
                "end": 559
              },
              "start": 551,
              "end": 559
            },
            "start": 549,
            "end": 559
          },
          "init": null,
          "definite": false,
          "start": 549,
          "end": 559
        }
      ],
      "declare": false,
      "start": 545,
      "end": 560
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 85,
  "end": 561
}
```
