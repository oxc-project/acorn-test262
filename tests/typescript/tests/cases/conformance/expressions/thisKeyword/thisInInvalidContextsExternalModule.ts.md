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
      "end": 254,
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
        "end": 254,
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
            "end": 252,
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
              "end": 252,
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
                "end": 252,
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
      "start": 256,
      "end": 410,
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
      "typeParameters": null,
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
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 304,
        "end": 410,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 310,
            "end": 316,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 310,
              "end": 311,
              "decorators": [],
              "name": "t",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 314,
              "end": 315,
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
            "start": 357,
            "end": 408,
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
            "value": {
              "type": "FunctionExpression",
              "start": 368,
              "end": 408,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 371,
                "end": 408,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 381,
                    "end": 393,
                    "expression": {
                      "type": "CallExpression",
                      "start": 381,
                      "end": 392,
                      "callee": {
                        "type": "Super",
                        "start": 381,
                        "end": 386
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "ThisExpression",
                          "start": 387,
                          "end": 391
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
      "start": 412,
      "end": 483,
      "id": {
        "type": "Identifier",
        "start": 419,
        "end": 420,
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 421,
        "end": 483,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 459,
            "end": 472,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 463,
                "end": 471,
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
      "start": 599,
      "end": 632,
      "id": {
        "type": "Identifier",
        "start": 608,
        "end": 619,
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
        "start": 619,
        "end": 622,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 620,
            "end": 621,
            "name": {
              "type": "Identifier",
              "start": 620,
              "end": 621,
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
              "typeName": {
                "type": "Identifier",
                "start": 626,
                "end": 627,
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
        "start": 629,
        "end": 632,
        "body": []
      },
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 633,
      "end": 662,
      "expression": {
        "type": "CallExpression",
        "start": 633,
        "end": 661,
        "callee": {
          "type": "Identifier",
          "start": 633,
          "end": 644,
          "decorators": [],
          "name": "genericFunc",
          "optional": false,
          "typeAnnotation": null
        },
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
        },
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
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ClassDeclaration",
      "start": 687,
      "end": 720,
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
      "typeParameters": null,
      "superClass": {
        "type": "ThisExpression",
        "start": 711,
        "end": 715
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 716,
        "end": 720,
        "body": []
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "TSEnumDeclaration",
      "start": 756,
      "end": 864,
      "id": {
        "type": "Identifier",
        "start": 761,
        "end": 769,
        "decorators": [],
        "name": "SomeEnum",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSEnumBody",
        "start": 770,
        "end": 864,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 776,
            "end": 784,
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
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 815,
            "end": 832,
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
              "object": {
                "type": "ThisExpression",
                "start": 819,
                "end": 823
              },
              "property": {
                "type": "Identifier",
                "start": 824,
                "end": 832,
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
  "sourceType": "module",
  "hashbang": null
}
```
