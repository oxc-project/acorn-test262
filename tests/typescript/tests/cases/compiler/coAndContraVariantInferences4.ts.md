__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 630,
  "body": [
    {
      "type": "TSEnumDeclaration",
      "start": 0,
      "end": 54,
      "id": {
        "type": "Identifier",
        "start": 11,
        "end": 21,
        "decorators": [],
        "name": "SyntaxKind",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSEnumBody",
        "start": 22,
        "end": 54,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 28,
            "end": 36,
            "id": {
              "type": "Identifier",
              "start": 28,
              "end": 36,
              "decorators": [],
              "name": "Modifier",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 42,
            "end": 51,
            "id": {
              "type": "Identifier",
              "start": 42,
              "end": 51,
              "decorators": [],
              "name": "Decorator",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null,
            "computed": false
          }
        ]
      },
      "const": true,
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 56,
      "end": 96,
      "id": {
        "type": "Identifier",
        "start": 66,
        "end": 70,
        "decorators": [],
        "name": "Node",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 71,
        "end": 96,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 77,
            "end": 94,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 77,
              "end": 81,
              "decorators": [],
              "name": "kind",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 81,
              "end": 93,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 83,
                "end": 93,
                "typeName": {
                  "type": "Identifier",
                  "start": 83,
                  "end": 93,
                  "decorators": [],
                  "name": "SyntaxKind",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 98,
      "end": 160,
      "id": {
        "type": "Identifier",
        "start": 108,
        "end": 116,
        "decorators": [],
        "name": "Modifier",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 125,
          "end": 129,
          "expression": {
            "type": "Identifier",
            "start": 125,
            "end": 129,
            "decorators": [],
            "name": "Node",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "start": 130,
        "end": 160,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 132,
            "end": 158,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 132,
              "end": 136,
              "decorators": [],
              "name": "kind",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 136,
              "end": 157,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 138,
                "end": 157,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 138,
                  "end": 157,
                  "left": {
                    "type": "Identifier",
                    "start": 138,
                    "end": 148,
                    "decorators": [],
                    "name": "SyntaxKind",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 149,
                    "end": 157,
                    "decorators": [],
                    "name": "Modifier",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 161,
      "end": 225,
      "id": {
        "type": "Identifier",
        "start": 171,
        "end": 180,
        "decorators": [],
        "name": "Decorator",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 189,
          "end": 193,
          "expression": {
            "type": "Identifier",
            "start": 189,
            "end": 193,
            "decorators": [],
            "name": "Node",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "start": 194,
        "end": 225,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 196,
            "end": 223,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 196,
              "end": 200,
              "decorators": [],
              "name": "kind",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 200,
              "end": 222,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 202,
                "end": 222,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 202,
                  "end": 222,
                  "left": {
                    "type": "Identifier",
                    "start": 202,
                    "end": 212,
                    "decorators": [],
                    "name": "SyntaxKind",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 213,
                    "end": 222,
                    "decorators": [],
                    "name": "Decorator",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 227,
      "end": 285,
      "id": {
        "type": "Identifier",
        "start": 244,
        "end": 254,
        "decorators": [],
        "name": "isModifier",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 255,
          "end": 265,
          "decorators": [],
          "name": "node",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 259,
            "end": 265,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 261,
              "end": 265,
              "typeName": {
                "type": "Identifier",
                "start": 261,
                "end": 265,
                "decorators": [],
                "name": "Node",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 266,
        "end": 284,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 268,
          "end": 284,
          "parameterName": {
            "type": "Identifier",
            "start": 268,
            "end": 272,
            "decorators": [],
            "name": "node",
            "optional": false,
            "typeAnnotation": null
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 276,
            "end": 284,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 276,
              "end": 284,
              "typeName": {
                "type": "Identifier",
                "start": 276,
                "end": 284,
                "decorators": [],
                "name": "Modifier",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 286,
      "end": 346,
      "id": {
        "type": "Identifier",
        "start": 303,
        "end": 314,
        "decorators": [],
        "name": "isDecorator",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 315,
          "end": 325,
          "decorators": [],
          "name": "node",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 319,
            "end": 325,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 321,
              "end": 325,
              "typeName": {
                "type": "Identifier",
                "start": 321,
                "end": 325,
                "decorators": [],
                "name": "Node",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 326,
        "end": 345,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 328,
          "end": 345,
          "parameterName": {
            "type": "Identifier",
            "start": 328,
            "end": 332,
            "decorators": [],
            "name": "node",
            "optional": false,
            "typeAnnotation": null
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 336,
            "end": 345,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 336,
              "end": 345,
              "typeName": {
                "type": "Identifier",
                "start": 336,
                "end": 345,
                "decorators": [],
                "name": "Decorator",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 348,
      "end": 471,
      "id": {
        "type": "Identifier",
        "start": 365,
        "end": 370,
        "decorators": [],
        "name": "every",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 370,
        "end": 386,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 371,
            "end": 372,
            "name": {
              "type": "Identifier",
              "start": 371,
              "end": 372,
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
          },
          {
            "type": "TSTypeParameter",
            "start": 374,
            "end": 385,
            "name": {
              "type": "Identifier",
              "start": 374,
              "end": 375,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 384,
              "end": 385,
              "typeName": {
                "type": "Identifier",
                "start": 384,
                "end": 385,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
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
          "start": 387,
          "end": 406,
          "decorators": [],
          "name": "array",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 392,
            "end": 406,
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "start": 394,
              "end": 406,
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 403,
                "end": 406,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 403,
                  "end": 404,
                  "typeName": {
                    "type": "Identifier",
                    "start": 403,
                    "end": 404,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 408,
          "end": 446,
          "decorators": [],
          "name": "callback",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 416,
            "end": 446,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 418,
              "end": 446,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 419,
                  "end": 429,
                  "decorators": [],
                  "name": "element",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 426,
                    "end": 429,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 428,
                      "end": 429,
                      "typeName": {
                        "type": "Identifier",
                        "start": 428,
                        "end": 429,
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
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 431,
                "end": 446,
                "typeAnnotation": {
                  "type": "TSTypePredicate",
                  "start": 434,
                  "end": 446,
                  "parameterName": {
                    "type": "Identifier",
                    "start": 434,
                    "end": 441,
                    "decorators": [],
                    "name": "element",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "asserts": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 445,
                    "end": 446,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 445,
                      "end": 446,
                      "typeName": {
                        "type": "Identifier",
                        "start": 445,
                        "end": 446,
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 447,
        "end": 470,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 449,
          "end": 470,
          "parameterName": {
            "type": "Identifier",
            "start": 449,
            "end": 454,
            "decorators": [],
            "name": "array",
            "optional": false,
            "typeAnnotation": null
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 458,
            "end": 470,
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "start": 458,
              "end": 470,
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 467,
                "end": 470,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 467,
                  "end": 468,
                  "typeName": {
                    "type": "Identifier",
                    "start": 467,
                    "end": 468,
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            }
          }
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 473,
      "end": 541,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 487,
          "end": 540,
          "id": {
            "type": "Identifier",
            "start": 487,
            "end": 540,
            "decorators": [],
            "name": "modifiers",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 496,
              "end": 540,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 498,
                "end": 540,
                "types": [
                  {
                    "type": "TSTypeOperator",
                    "start": 498,
                    "end": 518,
                    "operator": "readonly",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 507,
                      "end": 518,
                      "elementType": {
                        "type": "TSTypeReference",
                        "start": 507,
                        "end": 516,
                        "typeName": {
                          "type": "Identifier",
                          "start": 507,
                          "end": 516,
                          "decorators": [],
                          "name": "Decorator",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  {
                    "type": "TSTypeOperator",
                    "start": 521,
                    "end": 540,
                    "operator": "readonly",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 530,
                      "end": 540,
                      "elementType": {
                        "type": "TSTypeReference",
                        "start": 530,
                        "end": 538,
                        "typeName": {
                          "type": "Identifier",
                          "start": 530,
                          "end": 538,
                          "decorators": [],
                          "name": "Modifier",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "FunctionDeclaration",
      "start": 543,
      "end": 630,
      "id": {
        "type": "Identifier",
        "start": 552,
        "end": 555,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 558,
        "end": 630,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 564,
            "end": 593,
            "expression": {
              "type": "CallExpression",
              "start": 564,
              "end": 592,
              "callee": {
                "type": "Identifier",
                "start": 564,
                "end": 569,
                "decorators": [],
                "name": "every",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 570,
                  "end": 579,
                  "decorators": [],
                  "name": "modifiers",
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "Identifier",
                  "start": 581,
                  "end": 591,
                  "decorators": [],
                  "name": "isModifier",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 598,
            "end": 628,
            "expression": {
              "type": "CallExpression",
              "start": 598,
              "end": 627,
              "callee": {
                "type": "Identifier",
                "start": 598,
                "end": 603,
                "decorators": [],
                "name": "every",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 604,
                  "end": 613,
                  "decorators": [],
                  "name": "modifiers",
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "Identifier",
                  "start": 615,
                  "end": 626,
                  "decorators": [],
                  "name": "isDecorator",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            },
            "directive": null
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
