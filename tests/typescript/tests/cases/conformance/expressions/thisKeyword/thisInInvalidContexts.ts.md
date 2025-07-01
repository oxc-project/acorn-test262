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
        "name": "BaseErrClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 18
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
              "start": 25,
              "end": 36
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
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 40,
                      "end": 43
                    },
                    "start": 38,
                    "end": 43
                  },
                  "start": 37,
                  "end": 43
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 45,
                "end": 48
              },
              "expression": false,
              "start": 36,
              "end": 48
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 25,
            "end": 48
          }
        ],
        "start": 19,
        "end": 50
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 50
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ClassWithNoInitializer",
        "optional": false,
        "typeAnnotation": null,
        "start": 58,
        "end": 80
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "BaseErrClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 89,
        "end": 101
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
              "name": "t",
              "optional": false,
              "typeAnnotation": null,
              "start": 108,
              "end": 109
            },
            "typeAnnotation": null,
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 108,
            "end": 110
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
              "start": 151,
              "end": 162
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
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Super",
                        "start": 175,
                        "end": 180
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "ThisExpression",
                          "start": 181,
                          "end": 185
                        }
                      ],
                      "optional": false,
                      "start": 175,
                      "end": 186
                    },
                    "directive": null,
                    "start": 175,
                    "end": 187
                  }
                ],
                "start": 165,
                "end": 202
              },
              "expression": false,
              "start": 162,
              "end": 202
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 151,
            "end": 202
          }
        ],
        "start": 102,
        "end": 204
      },
      "abstract": false,
      "declare": false,
      "start": 52,
      "end": 204
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ClassWithInitializer",
        "optional": false,
        "typeAnnotation": null,
        "start": 212,
        "end": 232
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "BaseErrClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 241,
        "end": 253
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
              "name": "t",
              "optional": false,
              "typeAnnotation": null,
              "start": 260,
              "end": 261
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 4,
              "raw": "4",
              "start": 264,
              "end": 265
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 260,
            "end": 266
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
              "start": 307,
              "end": 318
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
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Super",
                        "start": 331,
                        "end": 336
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "ThisExpression",
                          "start": 337,
                          "end": 341
                        }
                      ],
                      "optional": false,
                      "start": 331,
                      "end": 342
                    },
                    "directive": null,
                    "start": 331,
                    "end": 343
                  }
                ],
                "start": 321,
                "end": 358
              },
              "expression": false,
              "start": 318,
              "end": 358
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 307,
            "end": 358
          }
        ],
        "start": 254,
        "end": 360
      },
      "abstract": false,
      "declare": false,
      "start": 206,
      "end": 360
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 369,
        "end": 370
      },
      "body": {
        "type": "TSModuleBlock",
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 413,
                  "end": 414
                },
                "init": {
                  "type": "ThisExpression",
                  "start": 417,
                  "end": 421
                },
                "definite": false,
                "start": 413,
                "end": 421
              }
            ],
            "declare": false,
            "start": 409,
            "end": 422
          }
        ],
        "start": 371,
        "end": 433
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 362,
      "end": 433
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "genericFunc",
        "optional": false,
        "typeAnnotation": null,
        "start": 558,
        "end": 569
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
              "start": 570,
              "end": 571
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 570,
            "end": 571
          }
        ],
        "start": 569,
        "end": 572
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
                "start": 576,
                "end": 577
              },
              "typeArguments": null,
              "start": 576,
              "end": 577
            },
            "start": 574,
            "end": 577
          },
          "start": 573,
          "end": 577
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 579,
        "end": 582
      },
      "expression": false,
      "start": 549,
      "end": 582
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "genericFunc",
          "optional": false,
          "typeAnnotation": null,
          "start": 583,
          "end": 594
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSThisType",
              "start": 595,
              "end": 599
            }
          ],
          "start": 594,
          "end": 600
        },
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "undefined",
            "optional": false,
            "typeAnnotation": null,
            "start": 601,
            "end": 610
          }
        ],
        "optional": false,
        "start": 583,
        "end": 611
      },
      "directive": null,
      "start": 583,
      "end": 612
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ErrClass3",
        "optional": false,
        "typeAnnotation": null,
        "start": 643,
        "end": 652
      },
      "typeParameters": null,
      "superClass": {
        "type": "ThisExpression",
        "start": 661,
        "end": 665
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 666,
        "end": 670
      },
      "abstract": false,
      "declare": false,
      "start": 637,
      "end": 670
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SomeEnum",
        "optional": false,
        "typeAnnotation": null,
        "start": 711,
        "end": 719
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 726,
              "end": 727
            },
            "initializer": {
              "type": "ThisExpression",
              "start": 730,
              "end": 734
            },
            "computed": false,
            "start": 726,
            "end": 734
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 765,
              "end": 766
            },
            "initializer": {
              "type": "MemberExpression",
              "object": {
                "type": "ThisExpression",
                "start": 769,
                "end": 773
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "spaaaace",
                "optional": false,
                "typeAnnotation": null,
                "start": 774,
                "end": 782
              },
              "optional": false,
              "computed": false,
              "start": 769,
              "end": 782
            },
            "computed": false,
            "start": 765,
            "end": 782
          }
        ],
        "start": 720,
        "end": 814
      },
      "const": false,
      "declare": false,
      "start": 706,
      "end": 814
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 815
}
```
