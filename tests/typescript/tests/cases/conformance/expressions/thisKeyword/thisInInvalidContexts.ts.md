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
        "start": 372,
        "end": 373
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
                  "start": 416,
                  "end": 417
                },
                "init": {
                  "type": "ThisExpression",
                  "start": 420,
                  "end": 424
                },
                "definite": false,
                "start": 416,
                "end": 424
              }
            ],
            "declare": false,
            "start": 412,
            "end": 425
          }
        ],
        "start": 374,
        "end": 436
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 362,
      "end": 436
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "genericFunc",
        "optional": false,
        "typeAnnotation": null,
        "start": 561,
        "end": 572
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
              "start": 573,
              "end": 574
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 573,
            "end": 574
          }
        ],
        "start": 572,
        "end": 575
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
                "start": 579,
                "end": 580
              },
              "typeArguments": null,
              "start": 579,
              "end": 580
            },
            "start": 577,
            "end": 580
          },
          "start": 576,
          "end": 580
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 582,
        "end": 585
      },
      "expression": false,
      "start": 552,
      "end": 585
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
          "start": 586,
          "end": 597
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSThisType",
              "start": 598,
              "end": 602
            }
          ],
          "start": 597,
          "end": 603
        },
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "undefined",
            "optional": false,
            "typeAnnotation": null,
            "start": 604,
            "end": 613
          }
        ],
        "optional": false,
        "start": 586,
        "end": 614
      },
      "directive": null,
      "start": 586,
      "end": 615
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
        "start": 646,
        "end": 655
      },
      "typeParameters": null,
      "superClass": {
        "type": "ThisExpression",
        "start": 664,
        "end": 668
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 669,
        "end": 673
      },
      "abstract": false,
      "declare": false,
      "start": 640,
      "end": 673
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SomeEnum",
        "optional": false,
        "typeAnnotation": null,
        "start": 714,
        "end": 722
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
              "start": 729,
              "end": 730
            },
            "initializer": {
              "type": "ThisExpression",
              "start": 733,
              "end": 737
            },
            "computed": false,
            "start": 729,
            "end": 737
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 768,
              "end": 769
            },
            "initializer": {
              "type": "MemberExpression",
              "object": {
                "type": "ThisExpression",
                "start": 772,
                "end": 776
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "spaaaace",
                "optional": false,
                "typeAnnotation": null,
                "start": 777,
                "end": 785
              },
              "optional": false,
              "computed": false,
              "start": 772,
              "end": 785
            },
            "computed": false,
            "start": 768,
            "end": 785
          }
        ],
        "start": 723,
        "end": 817
      },
      "const": false,
      "declare": false,
      "start": 709,
      "end": 817
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 818
}
```
