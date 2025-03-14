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
      "async": false,
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
              "raw": "true",
              "value": true
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 13,
          "end": 22,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 14,
            "end": 22,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 16,
              "end": 22
            }
          }
        },
        {
          "type": "Identifier",
          "start": 24,
          "end": 33,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 25,
            "end": 33,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 27,
              "end": 33
            }
          }
        }
      ]
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 54,
      "end": 90,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 59,
        "end": 64,
        "decorators": [],
        "name": "Foops",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 67,
        "end": 89,
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
                "decorators": [],
                "name": "foo",
                "optional": false
              }
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 67,
          "end": 77,
          "decorators": [],
          "name": "Parameters",
          "optional": false
        }
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 98,
            "end": 99,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 102,
            "end": 118,
            "async": false,
            "body": {
              "type": "Literal",
              "start": 117,
              "end": 118,
              "raw": "5",
              "value": 5
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 103,
                "end": 112,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 104,
                  "end": 112,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 106,
                    "end": 112
                  }
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 120,
      "end": 152,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 125,
        "end": 128,
        "decorators": [],
        "name": "Xps",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 131,
        "end": 151,
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
                "decorators": [],
                "name": "x",
                "optional": false
              }
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 131,
          "end": 141,
          "decorators": [],
          "name": "Parameters",
          "optional": false
        }
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 159,
            "end": 165,
            "decorators": [],
            "name": "a",
            "optional": false,
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
                  "decorators": [],
                  "name": "Xps",
                  "optional": false
                }
              }
            }
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
                "raw": "'should-not-work'",
                "value": "should-not-work"
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "FunctionDeclaration",
      "start": 213,
      "end": 240,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 238,
        "end": 240,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 222,
        "end": 223,
        "decorators": [],
        "name": "t",
        "optional": false
      },
      "params": [
        {
          "type": "RestElement",
          "start": 224,
          "end": 236,
          "argument": {
            "type": "Identifier",
            "start": 227,
            "end": 231,
            "decorators": [],
            "name": "args",
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
                "decorators": [],
                "name": "Xps",
                "optional": false
              }
            }
          }
        }
      ]
    },
    {
      "type": "ClassDeclaration",
      "start": 257,
      "end": 314,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 265,
        "end": 314,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 271,
            "end": 312,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 271,
              "end": 282,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 282,
              "end": 312,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 305,
                "end": 312,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 283,
                  "end": 292,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 284,
                    "end": 292,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 286,
                      "end": 292
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 294,
                  "end": 303,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 295,
                    "end": 303,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 297,
                      "end": 303
                    }
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 263,
        "end": 264,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 316,
      "end": 348,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 321,
        "end": 324,
        "decorators": [],
        "name": "Cps",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 327,
        "end": 347,
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
                "decorators": [],
                "name": "C",
                "optional": false
              }
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 327,
          "end": 337,
          "decorators": [],
          "name": "Parameters",
          "optional": false
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 368,
      "end": 412,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 373,
        "end": 377,
        "decorators": [],
        "name": "Ccps",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 380,
        "end": 411,
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
                "decorators": [],
                "name": "C",
                "optional": false
              }
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 380,
          "end": 401,
          "decorators": [],
          "name": "ConstructorParameters",
          "optional": false
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 444,
      "end": 509,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 452,
        "end": 509,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 458,
            "end": 507,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 458,
              "end": 469,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 469,
              "end": 507,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 500,
                "end": 507,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 470,
                  "end": 479,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 471,
                    "end": 479,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 473,
                      "end": 479
                    }
                  }
                },
                {
                  "type": "RestElement",
                  "start": 481,
                  "end": 498,
                  "argument": {
                    "type": "Identifier",
                    "start": 484,
                    "end": 488,
                    "decorators": [],
                    "name": "rest",
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
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 450,
        "end": 451,
        "decorators": [],
        "name": "D",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 510,
      "end": 554,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 515,
        "end": 519,
        "decorators": [],
        "name": "Dcps",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 522,
        "end": 553,
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
                "decorators": [],
                "name": "D",
                "optional": false
              }
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 522,
          "end": 543,
          "decorators": [],
          "name": "ConstructorParameters",
          "optional": false
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
