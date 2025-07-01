__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
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
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 32,
                  "end": 33
                },
                "typeArguments": null,
                "start": 25,
                "end": 33
              },
              "start": 23,
              "end": 33
            },
            "start": 22,
            "end": 33
          },
          "init": null,
          "definite": false,
          "start": 22,
          "end": 33
        }
      ],
      "declare": false,
      "start": 18,
      "end": 34
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
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 78,
                  "end": 79
                },
                "typeArguments": null,
                "start": 71,
                "end": 79
              },
              "start": 69,
              "end": 79
            },
            "start": 68,
            "end": 79
          },
          "init": null,
          "definite": false,
          "start": 68,
          "end": 79
        }
      ],
      "declare": false,
      "start": 64,
      "end": 80
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 95,
                  "end": 96
                },
                "typeArguments": null,
                "start": 88,
                "end": 96
              },
              "start": 86,
              "end": 96
            },
            "start": 85,
            "end": 96
          },
          "init": null,
          "definite": false,
          "start": 85,
          "end": 96
        }
      ],
      "declare": false,
      "start": 81,
      "end": 97
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
            "name": "d",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Array",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 124,
                  "end": 129
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "d",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 137,
                        "end": 138
                      },
                      "typeArguments": null,
                      "start": 130,
                      "end": 138
                    }
                  ],
                  "start": 129,
                  "end": 139
                },
                "start": 124,
                "end": 139
              },
              "start": 122,
              "end": 139
            },
            "start": 121,
            "end": 139
          },
          "init": null,
          "definite": false,
          "start": 121,
          "end": 139
        }
      ],
      "declare": false,
      "start": 117,
      "end": 140
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 151,
        "end": 152
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
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 164,
              "end": 165
            },
            "start": 157,
            "end": 166
          }
        ],
        "start": 155,
        "end": 168
      },
      "expression": false,
      "start": 142,
      "end": 168
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g",
        "optional": false,
        "typeAnnotation": null,
        "start": 197,
        "end": 198
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
            "type": "ReturnStatement",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "g",
                "optional": false,
                "typeAnnotation": null,
                "start": 210,
                "end": 211
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 210,
              "end": 213
            },
            "start": 203,
            "end": 214
          }
        ],
        "start": 201,
        "end": 216
      },
      "expression": false,
      "start": 188,
      "end": 216
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
            "name": "f1",
            "optional": false,
            "typeAnnotation": null,
            "start": 240,
            "end": 242
          },
          "init": {
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
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 270,
                      "end": 272
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 270,
                    "end": 274
                  },
                  "start": 263,
                  "end": 275
                }
              ],
              "start": 257,
              "end": 277
            },
            "expression": false,
            "start": 245,
            "end": 277
          },
          "definite": false,
          "start": 240,
          "end": 277
        }
      ],
      "declare": false,
      "start": 236,
      "end": 278
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
            "name": "f2",
            "optional": false,
            "typeAnnotation": null,
            "start": 302,
            "end": 304
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "f2",
                "optional": false,
                "typeAnnotation": null,
                "start": 313,
                "end": 315
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 313,
              "end": 317
            },
            "id": null,
            "generator": false,
            "start": 307,
            "end": 317
          },
          "definite": false,
          "start": 302,
          "end": 317
        }
      ],
      "declare": false,
      "start": 298,
      "end": 318
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "h",
        "optional": false,
        "typeAnnotation": null,
        "start": 347,
        "end": 348
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
            "type": "ReturnStatement",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 364,
                "end": 367
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 364,
              "end": 369
            },
            "start": 357,
            "end": 370
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 384,
              "end": 387
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
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "LogicalExpression",
                    "left": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "h",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 407,
                        "end": 408
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 407,
                      "end": 410
                    },
                    "operator": "||",
                    "right": {
                      "type": "Literal",
                      "value": "hello",
                      "raw": "\"hello\"",
                      "start": 414,
                      "end": 421
                    },
                    "start": 407,
                    "end": 421
                  },
                  "start": 400,
                  "end": 422
                }
              ],
              "start": 390,
              "end": 428
            },
            "expression": false,
            "start": 375,
            "end": 428
          }
        ],
        "start": 351,
        "end": 430
      },
      "expression": false,
      "start": 338,
      "end": 430
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 442,
        "end": 443
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
              "name": "s",
              "optional": false,
              "typeAnnotation": null,
              "start": 450,
              "end": 451
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 453,
                "end": 459
              },
              "start": 451,
              "end": 459
            },
            "accessibility": null,
            "static": false,
            "start": 450,
            "end": 460
          }
        ],
        "start": 444,
        "end": 462
      },
      "declare": false,
      "start": 432,
      "end": 462
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 473,
        "end": 476
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
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 480,
                "end": 481
              },
              "typeArguments": null,
              "start": 480,
              "end": 481
            },
            "start": 478,
            "end": 481
          },
          "start": 477,
          "end": 481
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 484,
          "end": 490
        },
        "start": 482,
        "end": 490
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": "abc",
              "raw": "\"abc\"",
              "start": 500,
              "end": 505
            },
            "start": 493,
            "end": 506
          }
        ],
        "start": 491,
        "end": 508
      },
      "expression": false,
      "start": 464,
      "end": 508
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
        "start": 516,
        "end": 517
      },
      "typeParameters": null,
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
              "name": "s",
              "optional": false,
              "typeAnnotation": null,
              "start": 524,
              "end": 525
            },
            "typeAnnotation": null,
            "value": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 528,
                "end": 531
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ThisExpression",
                  "start": 532,
                  "end": 536
                }
              ],
              "optional": false,
              "start": 528,
              "end": 537
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 524,
            "end": 538
          }
        ],
        "start": 518,
        "end": 540
      },
      "abstract": false,
      "declare": false,
      "start": 510,
      "end": 540
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
        "start": 548,
        "end": 549
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
              "start": 582,
              "end": 583
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
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 603,
                        "end": 607
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 608,
                        "end": 609
                      },
                      "optional": false,
                      "computed": false,
                      "start": 603,
                      "end": 609
                    },
                    "start": 596,
                    "end": 610
                  }
                ],
                "start": 586,
                "end": 616
              },
              "expression": false,
              "start": 583,
              "end": 616
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 578,
            "end": 616
          }
        ],
        "start": 550,
        "end": 618
      },
      "abstract": false,
      "declare": false,
      "start": 542,
      "end": 618
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 18,
  "end": 618
}
```
