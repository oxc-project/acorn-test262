__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 902,
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
      "end": 254,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 102,
        "end": 254,
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
            "end": 252,
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
              "end": 252,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 165,
                "end": 252,
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
      "start": 256,
      "end": 410,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 304,
        "end": 410,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 310,
            "end": 316,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 310,
              "end": 311,
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
              "start": 314,
              "end": 315,
              "raw": "4",
              "value": 4
            }
          },
          {
            "type": "MethodDefinition",
            "start": 357,
            "end": 408,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 357,
              "end": 368,
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
              "start": 368,
              "end": 408,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 371,
                "end": 408,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 381,
                    "end": 393,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 381,
                      "end": 392,
                      "arguments": [
                        {
                          "type": "ThisExpression",
                          "start": 387,
                          "end": 391
                        }
                      ],
                      "callee": {
                        "type": "Super",
                        "start": 381,
                        "end": 386
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
        "start": 262,
        "end": 282,
        "decorators": [],
        "name": "ClassWithInitializer",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 291,
        "end": 303,
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
      "start": 412,
      "end": 483,
      "body": {
        "type": "TSModuleBlock",
        "start": 421,
        "end": 483,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 459,
            "end": 472,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 463,
                "end": 471,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 463,
                  "end": 464,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ThisExpression",
                  "start": 467,
                  "end": 471
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
        "start": 419,
        "end": 420,
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    },
    {
      "type": "FunctionDeclaration",
      "start": 599,
      "end": 632,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 629,
        "end": 632,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 608,
        "end": 619,
        "decorators": [],
        "name": "genericFunc",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 623,
          "end": 627,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 624,
            "end": 627,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 626,
              "end": 627,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 626,
                "end": 627,
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
        "start": 619,
        "end": 622,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 620,
            "end": 621,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 620,
              "end": 621,
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
      "start": 633,
      "end": 662,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 633,
        "end": 661,
        "arguments": [
          {
            "type": "Identifier",
            "start": 651,
            "end": 660,
            "decorators": [],
            "name": "undefined",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 633,
          "end": 644,
          "decorators": [],
          "name": "genericFunc",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 644,
          "end": 650,
          "params": [
            {
              "type": "TSThisType",
              "start": 645,
              "end": 649
            }
          ]
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 687,
      "end": 720,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 716,
        "end": 720,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 693,
        "end": 702,
        "decorators": [],
        "name": "ErrClass3",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "ThisExpression",
        "start": 711,
        "end": 715
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "TSEnumDeclaration",
      "start": 756,
      "end": 864,
      "body": {
        "type": "TSEnumBody",
        "start": 770,
        "end": 864,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 776,
            "end": 784,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 776,
              "end": 777,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "ThisExpression",
              "start": 780,
              "end": 784
            }
          },
          {
            "type": "TSEnumMember",
            "start": 815,
            "end": 832,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 815,
              "end": 816,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "MemberExpression",
              "start": 819,
              "end": 832,
              "computed": false,
              "object": {
                "type": "ThisExpression",
                "start": 819,
                "end": 823
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 824,
                "end": 832,
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
        "start": 761,
        "end": 769,
        "decorators": [],
        "name": "SomeEnum",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "TSExportAssignment",
      "start": 866,
      "end": 880,
      "expression": {
        "type": "ThisExpression",
        "start": 875,
        "end": 879
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
