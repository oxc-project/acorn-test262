__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 816,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 50,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 18,
        "name": "BaseErrClass",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 19,
        "end": 50,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 25,
            "end": 48,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 25,
              "end": 36,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 36,
              "end": 48,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 37,
                  "end": 43,
                  "name": "t",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 38,
                    "end": 43,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 40,
                      "end": 43
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 45,
                "end": 48,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 52,
      "end": 204,
      "id": {
        "type": "Identifier",
        "start": 58,
        "end": 80,
        "name": "ClassWithNoInitializer",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 89,
        "end": 101,
        "name": "BaseErrClass",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 102,
        "end": 204,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 108,
            "end": 110,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 108,
              "end": 109,
              "name": "t",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 151,
            "end": 202,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 151,
              "end": 162,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 162,
              "end": 202,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                      "arguments": [
                        {
                          "type": "ThisExpression",
                          "start": 181,
                          "end": 185
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 206,
      "end": 360,
      "id": {
        "type": "Identifier",
        "start": 212,
        "end": 232,
        "name": "ClassWithInitializer",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 241,
        "end": 253,
        "name": "BaseErrClass",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 254,
        "end": 360,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 260,
            "end": 266,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 260,
              "end": 261,
              "name": "t",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 264,
              "end": 265,
              "value": 4,
              "raw": "4"
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 307,
            "end": 358,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 307,
              "end": 318,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 318,
              "end": 358,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                      "arguments": [
                        {
                          "type": "ThisExpression",
                          "start": 337,
                          "end": 341
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "TSModuleDeclaration",
      "start": 362,
      "end": 433,
      "id": {
        "type": "Identifier",
        "start": 369,
        "end": 370,
        "name": "M",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 413,
                "end": 421,
                "id": {
                  "type": "Identifier",
                  "start": 413,
                  "end": 414,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ThisExpression",
                  "start": 417,
                  "end": 421
                },
                "definite": false
              }
            ],
            "kind": "var",
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
        "name": "genericFunc",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 573,
          "end": 577,
          "name": "x",
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
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 579,
        "end": 582,
        "body": []
      },
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
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
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
          "name": "genericFunc",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 601,
            "end": 610,
            "name": "undefined",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
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
        }
      },
      "directive": null
    },
    {
      "type": "ClassDeclaration",
      "start": 637,
      "end": 670,
      "id": {
        "type": "Identifier",
        "start": 643,
        "end": 652,
        "name": "ErrClass3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "ThisExpression",
        "start": 661,
        "end": 665
      },
      "body": {
        "type": "ClassBody",
        "start": 666,
        "end": 670,
        "body": []
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "TSEnumDeclaration",
      "start": 706,
      "end": 814,
      "id": {
        "type": "Identifier",
        "start": 711,
        "end": 719,
        "name": "SomeEnum",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [
        {
          "type": "TSEnumMember",
          "start": 726,
          "end": 734,
          "id": {
            "type": "Identifier",
            "start": 726,
            "end": 727,
            "name": "A",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
            "name": "B",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
              "name": "spaaaace",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "computed": false
        }
      ],
      "const": false,
      "declare": false,
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
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
              "name": "B",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                "name": "spaaaace",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "computed": false
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
