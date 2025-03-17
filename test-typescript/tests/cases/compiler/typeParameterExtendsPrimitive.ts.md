__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 10,
  "end": 482,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 10,
      "end": 111,
      "id": {
        "type": "Identifier",
        "start": 19,
        "end": 20,
        "name": "f",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
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
                "id": {
                  "type": "Identifier",
                  "start": 51,
                  "end": 55,
                  "name": "t",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 52,
                    "end": 55,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 54,
                      "end": 55,
                      "typeName": {
                        "type": "Identifier",
                        "start": 54,
                        "end": 55,
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
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
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
                "id": {
                  "type": "Identifier",
                  "start": 65,
                  "end": 66,
                  "name": "v",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                      "method": false,
                      "shorthand": false,
                      "computed": true,
                      "key": {
                        "type": "Identifier",
                        "start": 80,
                        "end": 81,
                        "name": "t",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 84,
                        "end": 85,
                        "value": 0,
                        "raw": "0"
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ]
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "ReturnStatement",
            "start": 96,
            "end": 109,
            "argument": {
              "type": "BinaryExpression",
              "start": 103,
              "end": 108,
              "left": {
                "type": "Identifier",
                "start": 103,
                "end": 104,
                "name": "t",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "start": 107,
                "end": 108,
                "name": "t",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 20,
        "end": 38,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 21,
            "end": 37,
            "name": {
              "type": "Identifier",
              "start": 21,
              "end": 22,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 31,
              "end": 37
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 123,
      "end": 148,
      "id": {
        "type": "Identifier",
        "start": 133,
        "end": 134,
        "name": "I",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 135,
        "end": 148,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 137,
            "end": 146,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 137,
              "end": 138,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 138,
              "end": 146,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 140,
                "end": 146
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
      "type": "TSTypeAliasDeclaration",
      "start": 149,
      "end": 190,
      "id": {
        "type": "Identifier",
        "start": 154,
        "end": 159,
        "name": "IdMap",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 160,
              "end": 161,
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
        "type": "TSMappedType",
        "start": 165,
        "end": 189,
        "typeParameter": {
          "type": "TSTypeParameter",
          "start": 168,
          "end": 180,
          "name": {
            "type": "Identifier",
            "start": 168,
            "end": 169,
            "name": "P",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "constraint": {
            "type": "TSTypeOperator",
            "start": 173,
            "end": 180,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 179,
              "end": 180,
              "typeName": {
                "type": "Identifier",
                "start": 179,
                "end": 180,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "default": null,
          "in": false,
          "out": false,
          "const": false
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "start": 183,
          "end": 187,
          "objectType": {
            "type": "TSTypeReference",
            "start": 183,
            "end": 184,
            "typeName": {
              "type": "Identifier",
              "start": 183,
              "end": 184,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          "indexType": {
            "type": "TSTypeReference",
            "start": 185,
            "end": 186,
            "typeName": {
              "type": "Identifier",
              "start": 185,
              "end": 186,
              "name": "P",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        },
        "optional": null,
        "readonly": null,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 173,
          "end": 180,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 179,
            "end": 180,
            "typeName": {
              "type": "Identifier",
              "start": 179,
              "end": 180,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        },
        "key": {
          "type": "Identifier",
          "start": 168,
          "end": 169,
          "name": "P",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 191,
      "end": 278,
      "id": {
        "type": "Identifier",
        "start": 200,
        "end": 201,
        "name": "g",
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
          "start": 215,
          "end": 226,
          "name": "i",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 216,
            "end": 226,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 218,
              "end": 226,
              "typeName": {
                "type": "Identifier",
                "start": 218,
                "end": 223,
                "name": "IdMap",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 223,
                "end": 226,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 224,
                    "end": 225,
                    "typeName": {
                      "type": "Identifier",
                      "start": 224,
                      "end": 225,
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
          },
          "decorators": [],
          "optional": false
        }
      ],
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
                "id": {
                  "type": "Identifier",
                  "start": 240,
                  "end": 249,
                  "name": "n",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 241,
                    "end": 249,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 243,
                      "end": 249
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 252,
                  "end": 255,
                  "object": {
                    "type": "Identifier",
                    "start": 252,
                    "end": 253,
                    "name": "i",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 254,
                    "end": 255,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          },
          {
            "type": "ReturnStatement",
            "start": 261,
            "end": 276,
            "argument": {
              "type": "BinaryExpression",
              "start": 268,
              "end": 275,
              "left": {
                "type": "MemberExpression",
                "start": 268,
                "end": 271,
                "object": {
                  "type": "Identifier",
                  "start": 268,
                  "end": 269,
                  "name": "i",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 270,
                  "end": 271,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "operator": "*",
              "right": {
                "type": "Literal",
                "start": 274,
                "end": 275,
                "value": 2,
                "raw": "2"
              }
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 201,
        "end": 214,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 202,
            "end": 213,
            "name": {
              "type": "Identifier",
              "start": 202,
              "end": 203,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 212,
              "end": 213,
              "typeName": {
                "type": "Identifier",
                "start": 212,
                "end": 213,
                "name": "I",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 290,
      "end": 481,
      "id": {
        "type": "Identifier",
        "start": 299,
        "end": 300,
        "name": "h",
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
          "start": 348,
          "end": 358,
          "name": "array",
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
                "typeName": {
                  "type": "Identifier",
                  "start": 355,
                  "end": 356,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 360,
          "end": 367,
          "name": "prop",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 364,
            "end": 367,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 366,
              "end": 367,
              "typeName": {
                "type": "Identifier",
                "start": 366,
                "end": 367,
                "name": "K",
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
                "id": {
                  "type": "Identifier",
                  "start": 387,
                  "end": 393,
                  "name": "result",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 396,
                  "end": 397,
                  "value": 0,
                  "raw": "0"
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "ForOfStatement",
            "start": 403,
            "end": 460,
            "await": false,
            "left": {
              "type": "VariableDeclaration",
              "start": 408,
              "end": 415,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 414,
                  "end": 415,
                  "id": {
                    "type": "Identifier",
                    "start": 414,
                    "end": 415,
                    "name": "v",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "kind": "const",
              "declare": false
            },
            "right": {
              "type": "Identifier",
              "start": 419,
              "end": 424,
              "name": "array",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "BlockStatement",
              "start": 426,
              "end": 460,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 436,
                  "end": 454,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 436,
                    "end": 453,
                    "operator": "+=",
                    "left": {
                      "type": "Identifier",
                      "start": 436,
                      "end": 442,
                      "name": "result",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "MemberExpression",
                      "start": 446,
                      "end": 453,
                      "object": {
                        "type": "Identifier",
                        "start": 446,
                        "end": 447,
                        "name": "v",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 448,
                        "end": 452,
                        "name": "prop",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": true,
                      "optional": false
                    }
                  },
                  "directive": null
                }
              ]
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
              "name": "result",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 300,
        "end": 347,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 301,
            "end": 328,
            "name": {
              "type": "Identifier",
              "start": 301,
              "end": 302,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 311,
              "end": 328,
              "typeName": {
                "type": "Identifier",
                "start": 311,
                "end": 317,
                "name": "Record",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 317,
                "end": 328,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 318,
                    "end": 319,
                    "typeName": {
                      "type": "Identifier",
                      "start": 318,
                      "end": 319,
                      "name": "K",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 321,
                    "end": 327
                  }
                ]
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 330,
            "end": 346,
            "name": {
              "type": "Identifier",
              "start": 330,
              "end": 331,
              "name": "K",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 340,
              "end": 346
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 368,
        "end": 376,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 370,
          "end": 376
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
