__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 590,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 53,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "name": "foo",
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
          "start": 13,
          "end": 22,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 14,
            "end": 22,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 16,
              "end": 22
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 24,
          "end": 33,
          "name": "b",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 25,
            "end": 33,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 27,
              "end": 33
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 35,
        "end": 53,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 39,
            "end": 51,
            "argument": {
              "type": "Literal",
              "start": 46,
              "end": 50,
              "value": true,
              "raw": "true"
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 54,
      "end": 90,
      "id": {
        "type": "Identifier",
        "start": 59,
        "end": 64,
        "name": "Foops",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 67,
        "end": 89,
        "typeName": {
          "type": "Identifier",
          "start": 67,
          "end": 77,
          "name": "Parameters",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 77,
          "end": 89,
          "params": [
            {
              "type": "TSTypeQuery",
              "start": 78,
              "end": 88,
              "exprName": {
                "type": "Identifier",
                "start": 85,
                "end": 88,
                "name": "foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 92,
      "end": 119,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 98,
          "end": 118,
          "id": {
            "type": "Identifier",
            "start": 98,
            "end": 99,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 102,
            "end": 118,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 103,
                "end": 112,
                "name": "a",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 104,
                  "end": 112,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 106,
                    "end": 112
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "Literal",
              "start": 117,
              "end": 118,
              "value": 5,
              "raw": "5"
            },
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 120,
      "end": 152,
      "id": {
        "type": "Identifier",
        "start": 125,
        "end": 128,
        "name": "Xps",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 131,
        "end": 151,
        "typeName": {
          "type": "Identifier",
          "start": 131,
          "end": 141,
          "name": "Parameters",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 141,
          "end": 151,
          "params": [
            {
              "type": "TSTypeQuery",
              "start": 142,
              "end": 150,
              "exprName": {
                "type": "Identifier",
                "start": 149,
                "end": 150,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 153,
      "end": 188,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 159,
          "end": 187,
          "id": {
            "type": "Identifier",
            "start": 159,
            "end": 165,
            "name": "a",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 160,
              "end": 165,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 162,
                "end": 165,
                "typeName": {
                  "type": "Identifier",
                  "start": 162,
                  "end": 165,
                  "name": "Xps",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 168,
            "end": 187,
            "elements": [
              {
                "type": "Literal",
                "start": 169,
                "end": 186,
                "value": "should-not-work",
                "raw": "'should-not-work'"
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 213,
      "end": 240,
      "id": {
        "type": "Identifier",
        "start": 222,
        "end": 223,
        "name": "t",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "RestElement",
          "start": 224,
          "end": 236,
          "argument": {
            "type": "Identifier",
            "start": 227,
            "end": 231,
            "name": "args",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 231,
            "end": 236,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 233,
              "end": 236,
              "typeName": {
                "type": "Identifier",
                "start": 233,
                "end": 236,
                "name": "Xps",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "value": null
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 238,
        "end": 240,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ClassDeclaration",
      "start": 257,
      "end": 314,
      "id": {
        "type": "Identifier",
        "start": 263,
        "end": 264,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 265,
        "end": 314,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 271,
            "end": 312,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 271,
              "end": 282,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 282,
              "end": 312,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 283,
                  "end": 292,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 284,
                    "end": 292,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 286,
                      "end": 292
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 294,
                  "end": 303,
                  "name": "b",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 295,
                    "end": 303,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 297,
                      "end": 303
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 305,
                "end": 312,
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
      "type": "TSTypeAliasDeclaration",
      "start": 316,
      "end": 348,
      "id": {
        "type": "Identifier",
        "start": 321,
        "end": 324,
        "name": "Cps",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 327,
        "end": 347,
        "typeName": {
          "type": "Identifier",
          "start": 327,
          "end": 337,
          "name": "Parameters",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 337,
          "end": 347,
          "params": [
            {
              "type": "TSTypeQuery",
              "start": 338,
              "end": 346,
              "exprName": {
                "type": "Identifier",
                "start": 345,
                "end": 346,
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 368,
      "end": 412,
      "id": {
        "type": "Identifier",
        "start": 373,
        "end": 377,
        "name": "Ccps",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 380,
        "end": 411,
        "typeName": {
          "type": "Identifier",
          "start": 380,
          "end": 401,
          "name": "ConstructorParameters",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 401,
          "end": 411,
          "params": [
            {
              "type": "TSTypeQuery",
              "start": 402,
              "end": 410,
              "exprName": {
                "type": "Identifier",
                "start": 409,
                "end": 410,
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 444,
      "end": 509,
      "id": {
        "type": "Identifier",
        "start": 450,
        "end": 451,
        "name": "D",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 452,
        "end": 509,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 458,
            "end": 507,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 458,
              "end": 469,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 469,
              "end": 507,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 470,
                  "end": 479,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 471,
                    "end": 479,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 473,
                      "end": 479
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "RestElement",
                  "start": 481,
                  "end": 498,
                  "argument": {
                    "type": "Identifier",
                    "start": 484,
                    "end": 488,
                    "name": "rest",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 488,
                    "end": 498,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 490,
                      "end": 498,
                      "elementType": {
                        "type": "TSStringKeyword",
                        "start": 490,
                        "end": 496
                      }
                    }
                  },
                  "value": null
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 500,
                "end": 507,
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
      "type": "TSTypeAliasDeclaration",
      "start": 510,
      "end": 554,
      "id": {
        "type": "Identifier",
        "start": 515,
        "end": 519,
        "name": "Dcps",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 522,
        "end": 553,
        "typeName": {
          "type": "Identifier",
          "start": 522,
          "end": 543,
          "name": "ConstructorParameters",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 543,
          "end": 553,
          "params": [
            {
              "type": "TSTypeQuery",
              "start": 544,
              "end": 552,
              "exprName": {
                "type": "Identifier",
                "start": 551,
                "end": 552,
                "name": "D",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          ]
        }
      },
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
