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
        "name": "public",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 16
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 17,
        "end": 20
      },
      "declare": false,
      "start": 0,
      "end": 20
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 28,
        "end": 31
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
              "start": 38,
              "end": 49
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
                  "name": "private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 50,
                  "end": 57
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 59,
                  "end": 65
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "static",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 67,
                  "end": 73
                }
              ],
              "returnType": null,
              "body": {
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
                        "name": "private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 85,
                        "end": 92
                      },
                      "right": {
                        "type": "AssignmentExpression",
                        "operator": "=",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "public",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 95,
                          "end": 101
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "static",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 104,
                          "end": 110
                        },
                        "start": 95,
                        "end": 110
                      },
                      "start": 85,
                      "end": 110
                    },
                    "directive": null,
                    "start": 85,
                    "end": 111
                  }
                ],
                "start": 75,
                "end": 117
              },
              "expression": false,
              "start": 49,
              "end": 117
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 38,
            "end": 117
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "banana",
              "optional": false,
              "typeAnnotation": null,
              "start": 129,
              "end": 135
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
                        "name": "public",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 139,
                        "end": 145
                      },
                      "typeArguments": null,
                      "start": 139,
                      "end": 145
                    },
                    "start": 137,
                    "end": 145
                  },
                  "start": 136,
                  "end": 145
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 147,
                "end": 150
              },
              "expression": false,
              "start": 135,
              "end": 150
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 122,
            "end": 150
          }
        ],
        "start": 32,
        "end": 152
      },
      "abstract": false,
      "declare": false,
      "start": 22,
      "end": 152
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
        "start": 160,
        "end": 161
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
              "start": 168,
              "end": 179
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
                    "name": "public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 187,
                    "end": 193
                  },
                  "readonly": false,
                  "static": false,
                  "start": 180,
                  "end": 193
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "let",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 195,
                  "end": 198
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 200,
                "end": 207
              },
              "expression": false,
              "start": 179,
              "end": 207
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 168,
            "end": 207
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo1",
              "optional": false,
              "typeAnnotation": null,
              "start": 212,
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 217,
                  "end": 224
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "static",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 226,
                  "end": 232
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 234,
                  "end": 240
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "FunctionDeclaration",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "let",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 261,
                      "end": 264
                    },
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 267,
                      "end": 270
                    },
                    "expression": false,
                    "start": 252,
                    "end": 270
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
                          "start": 283,
                          "end": 284
                        },
                        "init": {
                          "type": "FunctionExpression",
                          "id": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "let",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 296,
                            "end": 299
                          },
                          "generator": false,
                          "async": false,
                          "declare": false,
                          "typeParameters": null,
                          "params": [],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "body": [],
                            "start": 302,
                            "end": 305
                          },
                          "expression": false,
                          "start": 287,
                          "end": 305
                        },
                        "definite": false,
                        "start": 283,
                        "end": 305
                      }
                    ],
                    "declare": false,
                    "start": 279,
                    "end": 306
                  }
                ],
                "start": 242,
                "end": 312
              },
              "expression": false,
              "start": 216,
              "end": 312
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 212,
            "end": 312
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "pulbic",
              "optional": false,
              "typeAnnotation": null,
              "start": 325,
              "end": 331
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
                "body": [],
                "start": 334,
                "end": 337
              },
              "expression": false,
              "start": 331,
              "end": 337
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 318,
            "end": 337
          }
        ],
        "start": 162,
        "end": 352
      },
      "abstract": false,
      "declare": false,
      "start": 154,
      "end": 352
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null,
        "start": 360,
        "end": 361
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "public",
              "optional": false,
              "typeAnnotation": null,
              "start": 362,
              "end": 368
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 362,
            "end": 368
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "private",
              "optional": false,
              "typeAnnotation": null,
              "start": 370,
              "end": 377
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 370,
            "end": 377
          }
        ],
        "start": 361,
        "end": 378
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 378,
        "end": 381
      },
      "abstract": false,
      "declare": false,
      "start": 354,
      "end": 381
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null,
        "start": 389,
        "end": 390
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "public",
            "optional": false,
            "typeAnnotation": null,
            "start": 402,
            "end": 408
          },
          "typeArguments": null,
          "start": 402,
          "end": 408
        }
      ],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 409,
        "end": 412
      },
      "abstract": false,
      "declare": false,
      "start": 383,
      "end": 412
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "F",
        "optional": false,
        "typeAnnotation": null,
        "start": 420,
        "end": 421
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "expression": {
            "type": "MemberExpression",
            "object": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "public",
                "optional": false,
                "typeAnnotation": null,
                "start": 433,
                "end": 439
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "private",
                "optional": false,
                "typeAnnotation": null,
                "start": 440,
                "end": 447
              },
              "optional": false,
              "computed": false,
              "start": 433,
              "end": 447
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 448,
              "end": 449
            },
            "optional": false,
            "computed": false,
            "start": 433,
            "end": 449
          },
          "typeArguments": null,
          "start": 433,
          "end": 449
        }
      ],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 450,
        "end": 453
      },
      "abstract": false,
      "declare": false,
      "start": 414,
      "end": 453
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "F1",
        "optional": false,
        "typeAnnotation": null,
        "start": 460,
        "end": 462
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "expression": {
            "type": "MemberExpression",
            "object": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "public",
                "optional": false,
                "typeAnnotation": null,
                "start": 474,
                "end": 480
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "private",
                "optional": false,
                "typeAnnotation": null,
                "start": 481,
                "end": 488
              },
              "optional": false,
              "computed": false,
              "start": 474,
              "end": 488
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "implements",
              "optional": false,
              "typeAnnotation": null,
              "start": 489,
              "end": 499
            },
            "optional": false,
            "computed": false,
            "start": 474,
            "end": 499
          },
          "typeArguments": null,
          "start": 474,
          "end": 499
        }
      ],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 500,
        "end": 503
      },
      "abstract": false,
      "declare": false,
      "start": 454,
      "end": 503
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "G",
        "optional": false,
        "typeAnnotation": null,
        "start": 510,
        "end": 511
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "package",
        "optional": false,
        "typeAnnotation": null,
        "start": 520,
        "end": 527
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 528,
        "end": 531
      },
      "abstract": false,
      "declare": false,
      "start": 504,
      "end": 531
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "H",
        "optional": false,
        "typeAnnotation": null,
        "start": 538,
        "end": 539
      },
      "typeParameters": null,
      "superClass": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "package",
          "optional": false,
          "typeAnnotation": null,
          "start": 548,
          "end": 555
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "A",
          "optional": false,
          "typeAnnotation": null,
          "start": 556,
          "end": 557
        },
        "optional": false,
        "computed": false,
        "start": 548,
        "end": 557
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 558,
        "end": 561
      },
      "abstract": false,
      "declare": false,
      "start": 532,
      "end": 561
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 561
}
```
