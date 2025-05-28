__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 815,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 50,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 18,
        "decorators": [],
        "name": "BaseErrClass",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 19,
        "end": 50,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 25,
            "end": 48,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 25,
              "end": 36,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 36,
              "end": 48,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 37,
                  "end": 43,
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 38,
                    "end": 43,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 40,
                      "end": 43
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 45,
                "end": 48,
                "body": []
              },
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 52,
      "end": 204,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 58,
        "end": 80,
        "decorators": [],
        "name": "ClassWithNoInitializer",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 89,
        "end": 101,
        "decorators": [],
        "name": "BaseErrClass",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 102,
        "end": 204,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 108,
            "end": 110,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 108,
              "end": 109,
              "decorators": [],
              "name": "t",
              "optional": false,
              "typeAnnotation": null
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
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 151,
            "end": 202,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 151,
              "end": 162,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 162,
              "end": 202,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 165,
                "end": 202,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 175,
                    "end": 187,
                    "expression": {
                      "type": "CallExpression",
                      "start": 175,
                      "end": 186,
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
                      "optional": false
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 206,
      "end": 360,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 212,
        "end": 232,
        "decorators": [],
        "name": "ClassWithInitializer",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 241,
        "end": 253,
        "decorators": [],
        "name": "BaseErrClass",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 254,
        "end": 360,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 260,
            "end": 266,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 260,
              "end": 261,
              "decorators": [],
              "name": "t",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 264,
              "end": 265,
              "value": 4,
              "raw": "4"
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 307,
            "end": 358,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 307,
              "end": 318,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 318,
              "end": 358,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 321,
                "end": 358,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 331,
                    "end": 343,
                    "expression": {
                      "type": "CallExpression",
                      "start": 331,
                      "end": 342,
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
                      "optional": false
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 362,
      "end": 433,
      "id": {
        "type": "Identifier",
        "start": 369,
        "end": 370,
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 371,
        "end": 433,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 409,
            "end": 422,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 413,
                "end": 421,
                "id": {
                  "type": "Identifier",
                  "start": 413,
                  "end": 414,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ThisExpression",
                  "start": 417,
                  "end": 421
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 549,
      "end": 582,
      "id": {
        "type": "Identifier",
        "start": 558,
        "end": 569,
        "decorators": [],
        "name": "genericFunc",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 569,
        "end": 572,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 570,
            "end": 571,
            "name": {
              "type": "Identifier",
              "start": 570,
              "end": 571,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [
        {
          "type": "Identifier",
          "start": 573,
          "end": 577,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 574,
            "end": 577,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 576,
              "end": 577,
              "typeName": {
                "type": "Identifier",
                "start": 576,
                "end": 577,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 579,
        "end": 582,
        "body": []
      },
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 583,
      "end": 612,
      "expression": {
        "type": "CallExpression",
        "start": 583,
        "end": 611,
        "callee": {
          "type": "Identifier",
          "start": 583,
          "end": 594,
          "decorators": [],
          "name": "genericFunc",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 594,
          "end": 600,
          "params": [
            {
              "type": "TSThisType",
              "start": 595,
              "end": 599
            }
          ]
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 601,
            "end": 610,
            "decorators": [],
            "name": "undefined",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ClassDeclaration",
      "start": 637,
      "end": 670,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 643,
        "end": 652,
        "decorators": [],
        "name": "ErrClass3",
        "optional": false,
        "typeAnnotation": null
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
        "start": 666,
        "end": 670,
        "body": []
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "TSEnumDeclaration",
      "start": 706,
      "end": 814,
      "id": {
        "type": "Identifier",
        "start": 711,
        "end": 719,
        "decorators": [],
        "name": "SomeEnum",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSEnumBody",
        "start": 720,
        "end": 814,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 726,
            "end": 734,
            "id": {
              "type": "Identifier",
              "start": 726,
              "end": 727,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "ThisExpression",
              "start": 730,
              "end": 734
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 765,
            "end": 782,
            "id": {
              "type": "Identifier",
              "start": 765,
              "end": 766,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "MemberExpression",
              "start": 769,
              "end": 782,
              "object": {
                "type": "ThisExpression",
                "start": 769,
                "end": 773
              },
              "property": {
                "type": "Identifier",
                "start": 774,
                "end": 782,
                "decorators": [],
                "name": "spaaaace",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "computed": false
          }
        ]
      },
      "const": false,
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
