__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 528,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 22,
      "end": 85,
      "id": {
        "type": "Identifier",
        "start": 27,
        "end": 30,
        "name": "Box",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 30,
        "end": 33,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 31,
            "end": 32,
            "name": {
              "type": "Identifier",
              "start": 31,
              "end": 32,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
        "type": "TSTypeLiteral",
        "start": 36,
        "end": 85,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 42,
            "end": 55,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 42,
              "end": 45,
              "name": "get",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 45,
              "end": 54,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 47,
                "end": 54,
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 50,
                  "end": 54,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 53,
                    "end": 54,
                    "typeName": {
                      "type": "Identifier",
                      "start": 53,
                      "end": 54,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 60,
            "end": 83,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 60,
              "end": 63,
              "name": "set",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 63,
              "end": 83,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 65,
                "end": 83,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 66,
                    "end": 74,
                    "name": "value",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 71,
                      "end": 74,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 73,
                        "end": 74,
                        "typeName": {
                          "type": "Identifier",
                          "start": 73,
                          "end": 74,
                          "name": "T",
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
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 76,
                  "end": 83,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 79,
                    "end": 83
                  }
                }
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
      "start": 87,
      "end": 129,
      "id": {
        "type": "Identifier",
        "start": 104,
        "end": 107,
        "name": "box",
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
          "start": 111,
          "end": 119,
          "name": "value",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 116,
            "end": 119,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 118,
              "end": 119,
              "typeName": {
                "type": "Identifier",
                "start": 118,
                "end": 119,
                "name": "T",
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
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 107,
        "end": 110,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 108,
            "end": 109,
            "name": {
              "type": "Identifier",
              "start": 108,
              "end": 109,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 120,
        "end": 128,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 122,
          "end": 128,
          "typeName": {
            "type": "Identifier",
            "start": 122,
            "end": 125,
            "name": "Box",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 125,
            "end": 128,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 126,
                "end": 127,
                "typeName": {
                  "type": "Identifier",
                  "start": 126,
                  "end": 127,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            ]
          }
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 131,
      "end": 150,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 137,
          "end": 149,
          "id": {
            "type": "Identifier",
            "start": 137,
            "end": 140,
            "name": "bn1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 143,
            "end": 149,
            "callee": {
              "type": "Identifier",
              "start": 143,
              "end": 146,
              "name": "box",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 147,
                "end": 148,
                "value": 0,
                "raw": "0"
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 167,
      "end": 199,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 173,
          "end": 198,
          "id": {
            "type": "Identifier",
            "start": 173,
            "end": 189,
            "name": "bn2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 176,
              "end": 189,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 178,
                "end": 189,
                "typeName": {
                  "type": "Identifier",
                  "start": 178,
                  "end": 181,
                  "name": "Box",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 181,
                  "end": 189,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 182,
                      "end": 188
                    }
                  ]
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 192,
            "end": 198,
            "callee": {
              "type": "Identifier",
              "start": 192,
              "end": 195,
              "name": "box",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 196,
                "end": 197,
                "value": 0,
                "raw": "0"
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 208,
      "end": 231,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 214,
          "end": 230,
          "id": {
            "type": "Identifier",
            "start": 214,
            "end": 217,
            "name": "bb1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 220,
            "end": 230,
            "callee": {
              "type": "Identifier",
              "start": 220,
              "end": 223,
              "name": "box",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 224,
                "end": 229,
                "value": false,
                "raw": "false"
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 249,
      "end": 286,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 255,
          "end": 285,
          "id": {
            "type": "Identifier",
            "start": 255,
            "end": 272,
            "name": "bb2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 258,
              "end": 272,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 260,
                "end": 272,
                "typeName": {
                  "type": "Identifier",
                  "start": 260,
                  "end": 263,
                  "name": "Box",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 263,
                  "end": 272,
                  "params": [
                    {
                      "type": "TSBooleanKeyword",
                      "start": 264,
                      "end": 271
                    }
                  ]
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 275,
            "end": 285,
            "callee": {
              "type": "Identifier",
              "start": 275,
              "end": 278,
              "name": "box",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 279,
                "end": 284,
                "value": false,
                "raw": "false"
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 363,
      "end": 418,
      "id": {
        "type": "Identifier",
        "start": 373,
        "end": 383,
        "name": "Observable",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
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
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "body": {
        "type": "TSInterfaceBody",
        "start": 387,
        "end": 418,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 391,
            "end": 397,
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 393,
              "end": 396,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 395,
                "end": 396,
                "typeName": {
                  "type": "Identifier",
                  "start": 395,
                  "end": 396,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            }
          },
          {
            "type": "TSCallSignatureDeclaration",
            "start": 400,
            "end": 416,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 401,
                "end": 409,
                "name": "value",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 406,
                  "end": 409,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 408,
                    "end": 409,
                    "typeName": {
                      "type": "Identifier",
                      "start": 408,
                      "end": 409,
                      "name": "T",
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
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 410,
              "end": 415,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 412,
                "end": 415
              }
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 420,
      "end": 476,
      "id": {
        "type": "Identifier",
        "start": 437,
        "end": 447,
        "name": "observable",
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
          "start": 451,
          "end": 459,
          "name": "value",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 456,
            "end": 459,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 458,
              "end": 459,
              "typeName": {
                "type": "Identifier",
                "start": 458,
                "end": 459,
                "name": "T",
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
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 447,
        "end": 450,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 448,
            "end": 449,
            "name": {
              "type": "Identifier",
              "start": 448,
              "end": 449,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 460,
        "end": 475,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 462,
          "end": 475,
          "typeName": {
            "type": "Identifier",
            "start": 462,
            "end": 472,
            "name": "Observable",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 472,
            "end": 475,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 473,
                "end": 474,
                "typeName": {
                  "type": "Identifier",
                  "start": 473,
                  "end": 474,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            ]
          }
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 478,
      "end": 527,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 484,
          "end": 526,
          "id": {
            "type": "Identifier",
            "start": 484,
            "end": 506,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 485,
              "end": 506,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 487,
                "end": 506,
                "typeName": {
                  "type": "Identifier",
                  "start": 487,
                  "end": 497,
                  "name": "Observable",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 497,
                  "end": 506,
                  "params": [
                    {
                      "type": "TSBooleanKeyword",
                      "start": 498,
                      "end": 505
                    }
                  ]
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 509,
            "end": 526,
            "callee": {
              "type": "Identifier",
              "start": 509,
              "end": 519,
              "name": "observable",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 520,
                "end": 525,
                "value": false,
                "raw": "false"
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
