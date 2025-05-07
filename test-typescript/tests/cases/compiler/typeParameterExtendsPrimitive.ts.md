__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 10,
  "end": 481,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 10,
      "end": 111,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 41,
        "end": 111,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 47,
            "end": 56,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 51,
                "end": 55,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 51,
                  "end": 55,
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 52,
                    "end": 55,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 54,
                      "end": 55,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 54,
                        "end": 55,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 61,
            "end": 91,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 65,
                "end": 91,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 65,
                  "end": 66,
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 69,
                  "end": 91,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 79,
                      "end": 85,
                      "computed": true,
                      "key": {
                        "type": "Identifier",
                        "start": 80,
                        "end": 81,
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 84,
                        "end": 85,
                        "raw": "0",
                        "value": 0,
                        "regex": null,
                        "bigint": null
                      }
                    }
                  ]
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "ReturnStatement",
            "start": 96,
            "end": 109,
            "argument": {
              "type": "BinaryExpression",
              "start": 103,
              "end": 108,
              "operator": "+",
              "left": {
                "type": "Identifier",
                "start": 103,
                "end": 104,
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 107,
                "end": 108,
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 19,
        "end": 20,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 20,
        "end": 38,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 21,
            "end": 37,
            "const": false,
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 31,
              "end": 37
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 21,
              "end": 22,
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
      "type": "TSInterfaceDeclaration",
      "start": 123,
      "end": 148,
      "body": {
        "type": "TSInterfaceBody",
        "start": 135,
        "end": 148,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 137,
            "end": 146,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 137,
              "end": 138,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 138,
              "end": 146,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 140,
                "end": 146
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 133,
        "end": 134,
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 149,
      "end": 190,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 154,
        "end": 159,
        "decorators": [],
        "name": "IdMap",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 165,
        "end": 189,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 173,
          "end": 180,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 179,
            "end": 180,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 179,
              "end": 180,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            }
          }
        },
        "key": {
          "type": "Identifier",
          "start": 168,
          "end": 169,
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null
        },
        "nameType": null,
        "optional": false,
        "readonly": null,
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "start": 183,
          "end": 187,
          "indexType": {
            "type": "TSTypeReference",
            "start": 185,
            "end": 186,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 185,
              "end": 186,
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "objectType": {
            "type": "TSTypeReference",
            "start": 183,
            "end": 184,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 183,
              "end": 184,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 159,
        "end": 162,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 160,
            "end": 161,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 160,
              "end": 161,
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
      "type": "FunctionDeclaration",
      "start": 191,
      "end": 278,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 228,
        "end": 278,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 234,
            "end": 256,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 240,
                "end": 255,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 240,
                  "end": 249,
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 241,
                    "end": 249,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 243,
                      "end": 249
                    }
                  }
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 252,
                  "end": 255,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 252,
                    "end": 253,
                    "decorators": [],
                    "name": "i",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 254,
                    "end": 255,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "ReturnStatement",
            "start": 261,
            "end": 276,
            "argument": {
              "type": "BinaryExpression",
              "start": 268,
              "end": 275,
              "operator": "*",
              "left": {
                "type": "MemberExpression",
                "start": 268,
                "end": 271,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 268,
                  "end": 269,
                  "decorators": [],
                  "name": "i",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 270,
                  "end": 271,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "right": {
                "type": "Literal",
                "start": 274,
                "end": 275,
                "raw": "2",
                "value": 2,
                "regex": null,
                "bigint": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 200,
        "end": 201,
        "decorators": [],
        "name": "g",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 215,
          "end": 226,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 216,
            "end": 226,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 218,
              "end": 226,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 223,
                "end": 226,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 224,
                    "end": 225,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 224,
                      "end": 225,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 218,
                "end": 223,
                "decorators": [],
                "name": "IdMap",
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
        "start": 201,
        "end": 214,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 202,
            "end": 213,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 212,
              "end": 213,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 212,
                "end": 213,
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 202,
              "end": 203,
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
      "type": "FunctionDeclaration",
      "start": 290,
      "end": 481,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 377,
        "end": 481,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 383,
            "end": 398,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 387,
                "end": 397,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 387,
                  "end": 393,
                  "decorators": [],
                  "name": "result",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Literal",
                  "start": 396,
                  "end": 397,
                  "raw": "0",
                  "value": 0,
                  "regex": null,
                  "bigint": null
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "ForOfStatement",
            "start": 403,
            "end": 460,
            "await": false,
            "body": {
              "type": "BlockStatement",
              "start": 426,
              "end": 460,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 436,
                  "end": 454,
                  "directive": null,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 436,
                    "end": 453,
                    "operator": "+=",
                    "left": {
                      "type": "Identifier",
                      "start": 436,
                      "end": 442,
                      "decorators": [],
                      "name": "result",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "MemberExpression",
                      "start": 446,
                      "end": 453,
                      "computed": true,
                      "object": {
                        "type": "Identifier",
                        "start": 446,
                        "end": 447,
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 448,
                        "end": 452,
                        "decorators": [],
                        "name": "prop",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ]
            },
            "left": {
              "type": "VariableDeclaration",
              "start": 408,
              "end": 415,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 414,
                  "end": 415,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 414,
                    "end": 415,
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": null
                }
              ],
              "declare": false,
              "kind": "const"
            },
            "right": {
              "type": "Identifier",
              "start": 419,
              "end": 424,
              "decorators": [],
              "name": "array",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "ReturnStatement",
            "start": 465,
            "end": 479,
            "argument": {
              "type": "Identifier",
              "start": 472,
              "end": 478,
              "decorators": [],
              "name": "result",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 299,
        "end": 300,
        "decorators": [],
        "name": "h",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 348,
          "end": 358,
          "decorators": [],
          "name": "array",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 353,
            "end": 358,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 355,
              "end": 358,
              "elementType": {
                "type": "TSTypeReference",
                "start": 355,
                "end": 356,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 355,
                  "end": 356,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 360,
          "end": 367,
          "decorators": [],
          "name": "prop",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 364,
            "end": 367,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 366,
              "end": 367,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 366,
                "end": 367,
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 368,
        "end": 376,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 370,
          "end": 376
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 300,
        "end": 347,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 301,
            "end": 328,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 311,
              "end": 328,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 317,
                "end": 328,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 318,
                    "end": 319,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 318,
                      "end": 319,
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 321,
                    "end": 327
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 311,
                "end": 317,
                "decorators": [],
                "name": "Record",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 301,
              "end": 302,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 330,
            "end": 346,
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "start": 340,
              "end": 346
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 330,
              "end": 331,
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null
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
