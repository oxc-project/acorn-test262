__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 505,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 85,
      "abstract": true,
      "body": {
        "type": "ClassBody",
        "start": 20,
        "end": 85,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 26,
            "end": 31,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 26,
              "end": 27,
              "decorators": [],
              "name": "t",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 27,
              "end": 30,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 29,
                "end": 30,
                "typeName": {
                  "type": "Identifier",
                  "start": 29,
                  "end": 30,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            },
            "value": null
          },
          {
            "type": "TSAbstractMethodDefinition",
            "start": 41,
            "end": 59,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 50,
              "end": 53,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 53,
              "end": 59,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 55,
                "end": 58,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 57,
                  "end": 58,
                  "typeName": {
                    "type": "Identifier",
                    "start": 57,
                    "end": 58,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  }
                }
              }
            }
          },
          {
            "type": "TSAbstractMethodDefinition",
            "start": 64,
            "end": 83,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 73,
              "end": 76,
              "decorators": [],
              "name": "bar",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 76,
              "end": 83,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 77,
                  "end": 81,
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 78,
                    "end": 81,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 80,
                      "end": 81,
                      "typeName": {
                        "type": "Identifier",
                        "start": 80,
                        "end": 81,
                        "decorators": [],
                        "name": "T",
                        "optional": false
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
        "start": 15,
        "end": 16,
        "decorators": [],
        "name": "A",
        "optional": false
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 16,
        "end": 19,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 17,
            "end": 18,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 17,
              "end": 18,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 87,
      "end": 122,
      "abstract": true,
      "body": {
        "type": "ClassBody",
        "start": 120,
        "end": 122,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 102,
        "end": 103,
        "decorators": [],
        "name": "B",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 115,
        "end": 116,
        "decorators": [],
        "name": "A",
        "optional": false
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 116,
        "end": 119,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 117,
            "end": 118,
            "typeName": {
              "type": "Identifier",
              "start": 117,
              "end": 118,
              "decorators": [],
              "name": "T",
              "optional": false
            }
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 103,
        "end": 106,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 104,
            "end": 105,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 104,
              "end": 105,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 124,
      "end": 150,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 148,
        "end": 150,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 130,
        "end": 131,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 143,
        "end": 144,
        "decorators": [],
        "name": "A",
        "optional": false
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 144,
        "end": 147,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 145,
            "end": 146,
            "typeName": {
              "type": "Identifier",
              "start": 145,
              "end": 146,
              "decorators": [],
              "name": "T",
              "optional": false
            }
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 131,
        "end": 134,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 132,
            "end": 133,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 132,
              "end": 133,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 190,
      "end": 218,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 216,
        "end": 218,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 196,
        "end": 197,
        "decorators": [],
        "name": "D",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 206,
        "end": 207,
        "decorators": [],
        "name": "A",
        "optional": false
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 207,
        "end": 215,
        "params": [
          {
            "type": "TSNumberKeyword",
            "start": 208,
            "end": 214
          }
        ]
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 258,
      "end": 348,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 282,
        "end": 348,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 322,
            "end": 346,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 322,
              "end": 325,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 325,
              "end": 346,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 328,
                "end": 346,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 330,
                    "end": 344,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 337,
                      "end": 343,
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "start": 337,
                        "end": 341
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 342,
                        "end": 343,
                        "decorators": [],
                        "name": "t",
                        "optional": false
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 264,
        "end": 265,
        "decorators": [],
        "name": "E",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 277,
        "end": 278,
        "decorators": [],
        "name": "A",
        "optional": false
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 278,
        "end": 281,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 279,
            "end": 280,
            "typeName": {
              "type": "Identifier",
              "start": 279,
              "end": 280,
              "decorators": [],
              "name": "T",
              "optional": false
            }
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 265,
        "end": 268,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 266,
            "end": 267,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 266,
              "end": 267,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 350,
      "end": 429,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 374,
        "end": 429,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 414,
            "end": 427,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 414,
              "end": 417,
              "decorators": [],
              "name": "bar",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 417,
              "end": 427,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 425,
                "end": 427,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 418,
                  "end": 423,
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 420,
                    "end": 423,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 422,
                      "end": 423,
                      "typeName": {
                        "type": "Identifier",
                        "start": 422,
                        "end": 423,
                        "decorators": [],
                        "name": "T",
                        "optional": false
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
        "start": 356,
        "end": 357,
        "decorators": [],
        "name": "F",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 369,
        "end": 370,
        "decorators": [],
        "name": "A",
        "optional": false
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 370,
        "end": 373,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 371,
            "end": 372,
            "typeName": {
              "type": "Identifier",
              "start": 371,
              "end": 372,
              "decorators": [],
              "name": "T",
              "optional": false
            }
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 357,
        "end": 360,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 358,
            "end": 359,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 358,
              "end": 359,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 431,
      "end": 505,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 455,
        "end": 505,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 461,
            "end": 485,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 461,
              "end": 464,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 464,
              "end": 485,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 467,
                "end": 485,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 469,
                    "end": 483,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 476,
                      "end": 482,
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "start": 476,
                        "end": 480
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 481,
                        "end": 482,
                        "decorators": [],
                        "name": "t",
                        "optional": false
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          },
          {
            "type": "MethodDefinition",
            "start": 490,
            "end": 503,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 490,
              "end": 493,
              "decorators": [],
              "name": "bar",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 493,
              "end": 503,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 500,
                "end": 503,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 494,
                  "end": 498,
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 495,
                    "end": 498,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 497,
                      "end": 498,
                      "typeName": {
                        "type": "Identifier",
                        "start": 497,
                        "end": 498,
                        "decorators": [],
                        "name": "T",
                        "optional": false
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
        "start": 437,
        "end": 438,
        "decorators": [],
        "name": "G",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 450,
        "end": 451,
        "decorators": [],
        "name": "A",
        "optional": false
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 451,
        "end": 454,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 452,
            "end": 453,
            "typeName": {
              "type": "Identifier",
              "start": 452,
              "end": 453,
              "decorators": [],
              "name": "T",
              "optional": false
            }
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 438,
        "end": 441,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 439,
            "end": 440,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 439,
              "end": 440,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
