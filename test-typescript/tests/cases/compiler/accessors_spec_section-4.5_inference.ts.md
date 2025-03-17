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
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 11,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "A",
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
      "start": 12,
      "end": 33,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 30,
        "end": 33,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 18,
        "end": 19,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 28,
        "end": 29,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 35,
      "end": 886,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 76,
        "end": 886,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 83,
            "end": 138,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 94,
              "end": 128,
              "decorators": [],
              "name": "InferredGetterFromSetterAnnotation",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 128,
              "end": 138,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 135,
                "end": 138,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 129,
                  "end": 133,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 130,
                    "end": 133,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 132,
                      "end": 133,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 132,
                        "end": 133,
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 143,
            "end": 210,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 154,
              "end": 188,
              "decorators": [],
              "name": "InferredGetterFromSetterAnnotation",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 188,
              "end": 210,
              "async": false,
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
                      "arguments": [],
                      "callee": {
                        "type": "Identifier",
                        "start": 204,
                        "end": 205,
                        "decorators": [],
                        "name": "B",
                        "optional": false,
                        "typeAnnotation": null
                      },
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
          },
          {
            "type": "MethodDefinition",
            "start": 216,
            "end": 295,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 227,
              "end": 273,
              "decorators": [],
              "name": "InferredGetterFromSetterAnnotation_GetterFirst",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 273,
              "end": 295,
              "async": false,
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
                      "arguments": [],
                      "callee": {
                        "type": "Identifier",
                        "start": 289,
                        "end": 290,
                        "decorators": [],
                        "name": "B",
                        "optional": false,
                        "typeAnnotation": null
                      },
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
          },
          {
            "type": "MethodDefinition",
            "start": 300,
            "end": 367,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 311,
              "end": 357,
              "decorators": [],
              "name": "InferredGetterFromSetterAnnotation_GetterFirst",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 357,
              "end": 367,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 364,
                "end": 367,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 358,
                  "end": 362,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 359,
                    "end": 362,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 361,
                      "end": 362,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 361,
                        "end": 362,
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 378,
            "end": 429,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 389,
              "end": 407,
              "decorators": [],
              "name": "InferredFromGetter",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 407,
              "end": 429,
              "async": false,
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
                      "arguments": [],
                      "callee": {
                        "type": "Identifier",
                        "start": 423,
                        "end": 424,
                        "decorators": [],
                        "name": "B",
                        "optional": false,
                        "typeAnnotation": null
                      },
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
          },
          {
            "type": "MethodDefinition",
            "start": 434,
            "end": 470,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 445,
              "end": 463,
              "decorators": [],
              "name": "InferredFromGetter",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 463,
              "end": 470,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 467,
                "end": 470,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 464,
                  "end": 465,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 476,
            "end": 524,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 487,
              "end": 517,
              "decorators": [],
              "name": "InferredFromGetter_SetterFirst",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 517,
              "end": 524,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 521,
                "end": 524,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 518,
                  "end": 519,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 529,
            "end": 592,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 540,
              "end": 570,
              "decorators": [],
              "name": "InferredFromGetter_SetterFirst",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 570,
              "end": 592,
              "async": false,
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
                      "arguments": [],
                      "callee": {
                        "type": "Identifier",
                        "start": 586,
                        "end": 587,
                        "decorators": [],
                        "name": "B",
                        "optional": false,
                        "typeAnnotation": null
                      },
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
          },
          {
            "type": "MethodDefinition",
            "start": 598,
            "end": 650,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 609,
              "end": 643,
              "decorators": [],
              "name": "InferredSetterFromGetterAnnotation",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 643,
              "end": 650,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 647,
                "end": 650,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 644,
                  "end": 645,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 655,
            "end": 726,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 666,
              "end": 700,
              "decorators": [],
              "name": "InferredSetterFromGetterAnnotation",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 700,
              "end": 726,
              "async": false,
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
                      "arguments": [],
                      "callee": {
                        "type": "Identifier",
                        "start": 720,
                        "end": 721,
                        "decorators": [],
                        "name": "B",
                        "optional": false,
                        "typeAnnotation": null
                      },
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
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 703,
                "end": 706,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 705,
                  "end": 706,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 705,
                    "end": 706,
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 732,
            "end": 815,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 743,
              "end": 789,
              "decorators": [],
              "name": "InferredSetterFromGetterAnnotation_GetterFirst",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 789,
              "end": 815,
              "async": false,
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
                      "arguments": [],
                      "callee": {
                        "type": "Identifier",
                        "start": 809,
                        "end": 810,
                        "decorators": [],
                        "name": "B",
                        "optional": false,
                        "typeAnnotation": null
                      },
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
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 792,
                "end": 795,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 794,
                  "end": 795,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 794,
                    "end": 795,
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 820,
            "end": 884,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 831,
              "end": 877,
              "decorators": [],
              "name": "InferredSetterFromGetterAnnotation_GetterFirst",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 877,
              "end": 884,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 881,
                "end": 884,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 878,
                  "end": 879,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
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
        "start": 41,
        "end": 75,
        "decorators": [],
        "name": "LanguageSpec_section_4_5_inference",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
