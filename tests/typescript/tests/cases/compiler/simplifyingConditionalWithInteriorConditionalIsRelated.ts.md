__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 61,
  "end": 689,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 61,
      "end": 122,
      "id": {
        "type": "Identifier",
        "start": 66,
        "end": 81,
        "decorators": [],
        "name": "ConditionalType",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 81,
        "end": 84,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 82,
            "end": 83,
            "name": {
              "type": "Identifier",
              "start": 82,
              "end": 83,
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
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 87,
        "end": 121,
        "checkType": {
          "type": "TSTypeReference",
          "start": 87,
          "end": 88,
          "typeName": {
            "type": "Identifier",
            "start": 87,
            "end": 88,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "extendsType": {
          "type": "TSStringKeyword",
          "start": 97,
          "end": 103
        },
        "trueType": {
          "type": "TSStringKeyword",
          "start": 106,
          "end": 112
        },
        "falseType": {
          "type": "TSNumberKeyword",
          "start": 115,
          "end": 121
        }
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 124,
      "end": 217,
      "id": {
        "type": "Identifier",
        "start": 133,
        "end": 155,
        "decorators": [],
        "name": "ConditionalOrUndefined",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 155,
        "end": 158,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 156,
            "end": 157,
            "name": {
              "type": "Identifier",
              "start": 156,
              "end": 157,
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
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 160,
        "end": 192,
        "typeAnnotation": {
          "type": "TSUnionType",
          "start": 162,
          "end": 192,
          "types": [
            {
              "type": "TSTypeReference",
              "start": 162,
              "end": 180,
              "typeName": {
                "type": "Identifier",
                "start": 162,
                "end": 177,
                "decorators": [],
                "name": "ConditionalType",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 177,
                "end": 180,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 178,
                    "end": 179,
                    "typeName": {
                      "type": "Identifier",
                      "start": 178,
                      "end": 179,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            },
            {
              "type": "TSUndefinedKeyword",
              "start": 183,
              "end": 192
            }
          ]
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 193,
        "end": 217,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 199,
            "end": 215,
            "argument": {
              "type": "TSAsExpression",
              "start": 206,
              "end": 214,
              "expression": {
                "type": "Literal",
                "start": 206,
                "end": 207,
                "value": 0,
                "raw": "0"
              },
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 211,
                "end": 214
              }
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 219,
      "end": 332,
      "id": {
        "type": "Identifier",
        "start": 228,
        "end": 243,
        "decorators": [],
        "name": "JustConditional",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 243,
        "end": 246,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 244,
            "end": 245,
            "name": {
              "type": "Identifier",
              "start": 244,
              "end": 245,
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
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 248,
        "end": 268,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 250,
          "end": 268,
          "typeName": {
            "type": "Identifier",
            "start": 250,
            "end": 265,
            "decorators": [],
            "name": "ConditionalType",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 265,
            "end": 268,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 266,
                "end": 267,
                "typeName": {
                  "type": "Identifier",
                  "start": 266,
                  "end": 267,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ]
          }
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 269,
        "end": 332,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 275,
            "end": 311,
            "argument": {
              "type": "TSNonNullExpression",
              "start": 282,
              "end": 310,
              "expression": {
                "type": "CallExpression",
                "start": 282,
                "end": 309,
                "callee": {
                  "type": "Identifier",
                  "start": 282,
                  "end": 304,
                  "decorators": [],
                  "name": "ConditionalOrUndefined",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 304,
                  "end": 307,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 305,
                      "end": 306,
                      "typeName": {
                        "type": "Identifier",
                        "start": 305,
                        "end": 306,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  ]
                },
                "arguments": [],
                "optional": false
              }
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 356,
      "end": 428,
      "id": {
        "type": "Identifier",
        "start": 365,
        "end": 383,
        "decorators": [],
        "name": "genericOrUndefined",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 383,
        "end": 386,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 384,
            "end": 385,
            "name": {
              "type": "Identifier",
              "start": 384,
              "end": 385,
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
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 388,
        "end": 403,
        "typeAnnotation": {
          "type": "TSUnionType",
          "start": 390,
          "end": 403,
          "types": [
            {
              "type": "TSTypeReference",
              "start": 390,
              "end": 391,
              "typeName": {
                "type": "Identifier",
                "start": 390,
                "end": 391,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            {
              "type": "TSUndefinedKeyword",
              "start": 394,
              "end": 403
            }
          ]
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 404,
        "end": 428,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 410,
            "end": 426,
            "argument": {
              "type": "TSAsExpression",
              "start": 417,
              "end": 425,
              "expression": {
                "type": "Literal",
                "start": 417,
                "end": 418,
                "value": 0,
                "raw": "0"
              },
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 422,
                "end": 425
              }
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 430,
      "end": 511,
      "id": {
        "type": "Identifier",
        "start": 439,
        "end": 450,
        "decorators": [],
        "name": "JustGeneric",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 450,
        "end": 453,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 451,
            "end": 452,
            "name": {
              "type": "Identifier",
              "start": 451,
              "end": 452,
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
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 455,
        "end": 458,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 457,
          "end": 458,
          "typeName": {
            "type": "Identifier",
            "start": 457,
            "end": 458,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 459,
        "end": 511,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 465,
            "end": 497,
            "argument": {
              "type": "TSNonNullExpression",
              "start": 472,
              "end": 496,
              "expression": {
                "type": "CallExpression",
                "start": 472,
                "end": 495,
                "callee": {
                  "type": "Identifier",
                  "start": 472,
                  "end": 490,
                  "decorators": [],
                  "name": "genericOrUndefined",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 490,
                  "end": 493,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 491,
                      "end": 492,
                      "typeName": {
                        "type": "Identifier",
                        "start": 491,
                        "end": 492,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  ]
                },
                "arguments": [],
                "optional": false
              }
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 537,
      "end": 689,
      "id": {
        "type": "Identifier",
        "start": 546,
        "end": 547,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 547,
        "end": 550,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 548,
            "end": 549,
            "name": {
              "type": "Identifier",
              "start": 548,
              "end": 549,
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
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 553,
        "end": 689,
        "body": [
          {
            "type": "TSTypeAliasDeclaration",
            "start": 559,
            "end": 605,
            "id": {
              "type": "Identifier",
              "start": 564,
              "end": 567,
              "decorators": [],
              "name": "One",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSConditionalType",
              "start": 570,
              "end": 604,
              "checkType": {
                "type": "TSTypeReference",
                "start": 570,
                "end": 571,
                "typeName": {
                  "type": "Identifier",
                  "start": 570,
                  "end": 571,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "extendsType": {
                "type": "TSStringKeyword",
                "start": 580,
                "end": 586
              },
              "trueType": {
                "type": "TSStringKeyword",
                "start": 589,
                "end": 595
              },
              "falseType": {
                "type": "TSStringKeyword",
                "start": 598,
                "end": 604
              }
            },
            "declare": false
          },
          {
            "type": "TSTypeAliasDeclaration",
            "start": 610,
            "end": 650,
            "id": {
              "type": "Identifier",
              "start": 615,
              "end": 616,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSConditionalType",
              "start": 619,
              "end": 649,
              "checkType": {
                "type": "TSTypeReference",
                "start": 619,
                "end": 620,
                "typeName": {
                  "type": "Identifier",
                  "start": 619,
                  "end": 620,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "extendsType": {
                "type": "TSNumberKeyword",
                "start": 629,
                "end": 635
              },
              "trueType": {
                "type": "TSTypeReference",
                "start": 638,
                "end": 641,
                "typeName": {
                  "type": "Identifier",
                  "start": 638,
                  "end": 641,
                  "decorators": [],
                  "name": "One",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "falseType": {
                "type": "TSNeverKeyword",
                "start": 644,
                "end": 649
              }
            },
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 655,
            "end": 687,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 661,
                "end": 686,
                "id": {
                  "type": "Identifier",
                  "start": 661,
                  "end": 667,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 662,
                    "end": 667,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 664,
                      "end": 667,
                      "typeName": {
                        "type": "Identifier",
                        "start": 664,
                        "end": 667,
                        "decorators": [],
                        "name": "One",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                },
                "init": {
                  "type": "TSAsExpression",
                  "start": 670,
                  "end": 686,
                  "expression": {
                    "type": "TSAsExpression",
                    "start": 670,
                    "end": 681,
                    "expression": {
                      "type": "Literal",
                      "start": 670,
                      "end": 674,
                      "value": null,
                      "raw": "null"
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 678,
                      "end": 681
                    }
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 685,
                    "end": 686,
                    "typeName": {
                      "type": "Identifier",
                      "start": 685,
                      "end": 686,
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
