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
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 19,
        "end": 50,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 25,
            "end": 48,
            "accessibility": null,
            "computed": false,
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
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 36,
              "end": 48,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 45,
                "end": 48,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
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
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
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
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 52,
      "end": 204,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 102,
        "end": 204,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 108,
            "end": 110,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 108,
              "end": 109,
              "decorators": [],
              "name": "t",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 151,
            "end": 202,
            "accessibility": null,
            "computed": false,
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
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 162,
              "end": 202,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 165,
                "end": 202,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 175,
                    "end": 187,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 175,
                      "end": 186,
                      "arguments": [
                        {
                          "type": "ThisExpression",
                          "start": 181,
                          "end": 185
                        }
                      ],
                      "callee": {
                        "type": "Super",
                        "start": 175,
                        "end": 180
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
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
      "implements": [],
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
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 206,
      "end": 360,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 254,
        "end": 360,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 260,
            "end": 266,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 260,
              "end": 261,
              "decorators": [],
              "name": "t",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 264,
              "end": 265,
              "raw": "4",
              "value": 4
            }
          },
          {
            "type": "MethodDefinition",
            "start": 307,
            "end": 358,
            "accessibility": null,
            "computed": false,
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
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 318,
              "end": 358,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 321,
                "end": 358,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 331,
                    "end": 343,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 331,
                      "end": 342,
                      "arguments": [
                        {
                          "type": "ThisExpression",
                          "start": 337,
                          "end": 341
                        }
                      ],
                      "callee": {
                        "type": "Super",
                        "start": 331,
                        "end": 336
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
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
      "implements": [],
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
      "typeParameters": null
    },
    {
      "type": "TSModuleDeclaration",
      "start": 362,
      "end": 433,
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
                "definite": false,
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
                }
              }
            ],
            "declare": false,
            "kind": "var"
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 369,
        "end": 370,
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    },
    {
      "type": "FunctionDeclaration",
      "start": 549,
      "end": 582,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 579,
        "end": 582,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 558,
        "end": 569,
        "decorators": [],
        "name": "genericFunc",
        "optional": false,
        "typeAnnotation": null
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
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 576,
                "end": 577,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 569,
        "end": 572,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 570,
            "end": 571,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 570,
              "end": 571,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 583,
      "end": 612,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 583,
        "end": 611,
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
        "callee": {
          "type": "Identifier",
          "start": 583,
          "end": 594,
          "decorators": [],
          "name": "genericFunc",
          "optional": false,
          "typeAnnotation": null
        },
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
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 637,
      "end": 670,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 666,
        "end": 670,
        "body": []
      },
      "declare": false,
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
      "implements": [],
      "superClass": {
        "type": "ThisExpression",
        "start": 661,
        "end": 665
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "TSEnumDeclaration",
      "start": 706,
      "end": 814,
      "body": {
        "type": "TSEnumBody",
        "start": 720,
        "end": 814,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 726,
            "end": 734,
            "computed": false,
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
            }
          },
          {
            "type": "TSEnumMember",
            "start": 765,
            "end": 782,
            "computed": false,
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
              "computed": false,
              "object": {
                "type": "ThisExpression",
                "start": 769,
                "end": 773
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 774,
                "end": 782,
                "decorators": [],
                "name": "spaaaace",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 711,
        "end": 719,
        "decorators": [],
        "name": "SomeEnum",
        "optional": false,
        "typeAnnotation": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
