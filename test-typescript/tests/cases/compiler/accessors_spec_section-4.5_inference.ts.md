__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 886,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 11,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 11,
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
      "type": "ClassDeclaration",
      "start": 12,
      "end": 33,
      "id": {
        "type": "Identifier",
        "start": 18,
        "end": 19,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 28,
        "end": 29,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 30,
        "end": 33,
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
      "type": "ClassDeclaration",
      "start": 35,
      "end": 886,
      "id": {
        "type": "Identifier",
        "start": 41,
        "end": 75,
        "name": "LanguageSpec_section_4_5_inference",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 76,
        "end": 886,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 83,
            "end": 138,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 94,
              "end": 128,
              "name": "InferredGetterFromSetterAnnotation",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 128,
              "end": 138,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 129,
                  "end": 133,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 130,
                    "end": 133,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 132,
                      "end": 133,
                      "typeName": {
                        "type": "Identifier",
                        "start": 132,
                        "end": 133,
                        "name": "A",
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
                "start": 135,
                "end": 138,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 143,
            "end": 210,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 154,
              "end": 188,
              "name": "InferredGetterFromSetterAnnotation",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 188,
              "end": 210,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 191,
                "end": 210,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 193,
                    "end": 208,
                    "argument": {
                      "type": "NewExpression",
                      "start": 200,
                      "end": 207,
                      "callee": {
                        "type": "Identifier",
                        "start": 204,
                        "end": 205,
                        "name": "B",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [],
                      "typeArguments": null
                    }
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
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 216,
            "end": 295,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 227,
              "end": 273,
              "name": "InferredGetterFromSetterAnnotation_GetterFirst",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 273,
              "end": 295,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 276,
                "end": 295,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 278,
                    "end": 293,
                    "argument": {
                      "type": "NewExpression",
                      "start": 285,
                      "end": 292,
                      "callee": {
                        "type": "Identifier",
                        "start": 289,
                        "end": 290,
                        "name": "B",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [],
                      "typeArguments": null
                    }
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
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 300,
            "end": 367,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 311,
              "end": 357,
              "name": "InferredGetterFromSetterAnnotation_GetterFirst",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 357,
              "end": 367,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 358,
                  "end": 362,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 359,
                    "end": 362,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 361,
                      "end": 362,
                      "typeName": {
                        "type": "Identifier",
                        "start": 361,
                        "end": 362,
                        "name": "A",
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
                "start": 364,
                "end": 367,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 378,
            "end": 429,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 389,
              "end": 407,
              "name": "InferredFromGetter",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 407,
              "end": 429,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 410,
                "end": 429,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 412,
                    "end": 427,
                    "argument": {
                      "type": "NewExpression",
                      "start": 419,
                      "end": 426,
                      "callee": {
                        "type": "Identifier",
                        "start": 423,
                        "end": 424,
                        "name": "B",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [],
                      "typeArguments": null
                    }
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
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 434,
            "end": 470,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 445,
              "end": 463,
              "name": "InferredFromGetter",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 463,
              "end": 470,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 464,
                  "end": 465,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 467,
                "end": 470,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 476,
            "end": 524,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 487,
              "end": 517,
              "name": "InferredFromGetter_SetterFirst",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 517,
              "end": 524,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 518,
                  "end": 519,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 521,
                "end": 524,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 529,
            "end": 592,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 540,
              "end": 570,
              "name": "InferredFromGetter_SetterFirst",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 570,
              "end": 592,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 573,
                "end": 592,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 575,
                    "end": 590,
                    "argument": {
                      "type": "NewExpression",
                      "start": 582,
                      "end": 589,
                      "callee": {
                        "type": "Identifier",
                        "start": 586,
                        "end": 587,
                        "name": "B",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [],
                      "typeArguments": null
                    }
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
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 598,
            "end": 650,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 609,
              "end": 643,
              "name": "InferredSetterFromGetterAnnotation",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 643,
              "end": 650,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 644,
                  "end": 645,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 647,
                "end": 650,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 655,
            "end": 726,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 666,
              "end": 700,
              "name": "InferredSetterFromGetterAnnotation",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 700,
              "end": 726,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 707,
                "end": 726,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 709,
                    "end": 724,
                    "argument": {
                      "type": "NewExpression",
                      "start": 716,
                      "end": 723,
                      "callee": {
                        "type": "Identifier",
                        "start": 720,
                        "end": 721,
                        "name": "B",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [],
                      "typeArguments": null
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 703,
                "end": 706,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 705,
                  "end": 706,
                  "typeName": {
                    "type": "Identifier",
                    "start": 705,
                    "end": 706,
                    "name": "A",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 732,
            "end": 815,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 743,
              "end": 789,
              "name": "InferredSetterFromGetterAnnotation_GetterFirst",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 789,
              "end": 815,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 796,
                "end": 815,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 798,
                    "end": 813,
                    "argument": {
                      "type": "NewExpression",
                      "start": 805,
                      "end": 812,
                      "callee": {
                        "type": "Identifier",
                        "start": 809,
                        "end": 810,
                        "name": "B",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [],
                      "typeArguments": null
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 792,
                "end": 795,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 794,
                  "end": 795,
                  "typeName": {
                    "type": "Identifier",
                    "start": 794,
                    "end": 795,
                    "name": "A",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 820,
            "end": 884,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 831,
              "end": 877,
              "name": "InferredSetterFromGetterAnnotation_GetterFirst",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 877,
              "end": 884,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 878,
                  "end": 879,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 881,
                "end": 884,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "public"
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
