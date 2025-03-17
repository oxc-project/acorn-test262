__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 4186,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 31,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 8,
        "name": "Box",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 8,
        "end": 11,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 9,
            "end": 10,
            "name": {
              "type": "Identifier",
              "start": 9,
              "end": 10,
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
        "start": 14,
        "end": 31,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 20,
            "end": 29,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 20,
              "end": 25,
              "name": "value",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 25,
              "end": 28,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 27,
                "end": 28,
                "typeName": {
                  "type": "Identifier",
                  "start": 27,
                  "end": 28,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
      "type": "TSTypeAliasDeclaration",
      "start": 33,
      "end": 86,
      "id": {
        "type": "Identifier",
        "start": 38,
        "end": 46,
        "name": "Boxified",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 46,
        "end": 49,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 47,
            "end": 48,
            "name": {
              "type": "Identifier",
              "start": 47,
              "end": 48,
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
        "start": 52,
        "end": 86,
        "typeParameter": {
          "type": "TSTypeParameter",
          "start": 59,
          "end": 71,
          "name": {
            "type": "Identifier",
            "start": 59,
            "end": 60,
            "name": "P",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "constraint": {
            "type": "TSTypeOperator",
            "start": 64,
            "end": 71,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 70,
              "end": 71,
              "typeName": {
                "type": "Identifier",
                "start": 70,
                "end": 71,
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
          "type": "TSTypeReference",
          "start": 74,
          "end": 83,
          "typeName": {
            "type": "Identifier",
            "start": 74,
            "end": 77,
            "name": "Box",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 77,
            "end": 83,
            "params": [
              {
                "type": "TSIndexedAccessType",
                "start": 78,
                "end": 82,
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 78,
                  "end": 79,
                  "typeName": {
                    "type": "Identifier",
                    "start": 78,
                    "end": 79,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "start": 80,
                  "end": 81,
                  "typeName": {
                    "type": "Identifier",
                    "start": 80,
                    "end": 81,
                    "name": "P",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            ]
          }
        },
        "optional": null,
        "readonly": null,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 64,
          "end": 71,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 70,
            "end": 71,
            "typeName": {
              "type": "Identifier",
              "start": 70,
              "end": 71,
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
          "start": 59,
          "end": 60,
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
      "start": 88,
      "end": 146,
      "id": {
        "type": "Identifier",
        "start": 97,
        "end": 100,
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
          "start": 104,
          "end": 108,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 105,
            "end": 108,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 107,
              "end": 108,
              "typeName": {
                "type": "Identifier",
                "start": 107,
                "end": 108,
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
      "body": {
        "type": "BlockStatement",
        "start": 118,
        "end": 146,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 124,
            "end": 144,
            "argument": {
              "type": "ObjectExpression",
              "start": 131,
              "end": 143,
              "properties": [
                {
                  "type": "Property",
                  "start": 133,
                  "end": 141,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 133,
                    "end": 138,
                    "name": "value",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 140,
                    "end": 141,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 100,
        "end": 103,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 101,
            "end": 102,
            "name": {
              "type": "Identifier",
              "start": 101,
              "end": 102,
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
        "start": 109,
        "end": 117,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 111,
          "end": 117,
          "typeName": {
            "type": "Identifier",
            "start": 111,
            "end": 114,
            "name": "Box",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 114,
            "end": 117,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 115,
                "end": 116,
                "typeName": {
                  "type": "Identifier",
                  "start": 115,
                  "end": 116,
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
      "type": "FunctionDeclaration",
      "start": 148,
      "end": 203,
      "id": {
        "type": "Identifier",
        "start": 157,
        "end": 162,
        "name": "unbox",
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
          "start": 166,
          "end": 175,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 167,
            "end": 175,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 169,
              "end": 175,
              "typeName": {
                "type": "Identifier",
                "start": 169,
                "end": 172,
                "name": "Box",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 172,
                "end": 175,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 173,
                    "end": 174,
                    "typeName": {
                      "type": "Identifier",
                      "start": 173,
                      "end": 174,
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
        "start": 180,
        "end": 203,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 186,
            "end": 201,
            "argument": {
              "type": "MemberExpression",
              "start": 193,
              "end": 200,
              "object": {
                "type": "Identifier",
                "start": 193,
                "end": 194,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 195,
                "end": 200,
                "name": "value",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 162,
        "end": 165,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 163,
            "end": 164,
            "name": {
              "type": "Identifier",
              "start": 163,
              "end": 164,
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
        "start": 176,
        "end": 179,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 178,
          "end": 179,
          "typeName": {
            "type": "Identifier",
            "start": 178,
            "end": 179,
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
      "type": "FunctionDeclaration",
      "start": 205,
      "end": 367,
      "id": {
        "type": "Identifier",
        "start": 214,
        "end": 220,
        "name": "boxify",
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
          "start": 224,
          "end": 230,
          "name": "obj",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 227,
            "end": 230,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 229,
              "end": 230,
              "typeName": {
                "type": "Identifier",
                "start": 229,
                "end": 230,
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
      "body": {
        "type": "BlockStatement",
        "start": 245,
        "end": 367,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 251,
            "end": 282,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 255,
                "end": 281,
                "id": {
                  "type": "Identifier",
                  "start": 255,
                  "end": 261,
                  "name": "result",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "TSAsExpression",
                  "start": 264,
                  "end": 281,
                  "expression": {
                    "type": "ObjectExpression",
                    "start": 264,
                    "end": 266,
                    "properties": []
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 270,
                    "end": 281,
                    "typeName": {
                      "type": "Identifier",
                      "start": 270,
                      "end": 278,
                      "name": "Boxified",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
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
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "ForInStatement",
            "start": 287,
            "end": 346,
            "left": {
              "type": "VariableDeclaration",
              "start": 292,
              "end": 297,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 296,
                  "end": 297,
                  "id": {
                    "type": "Identifier",
                    "start": 296,
                    "end": 297,
                    "name": "k",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "kind": "let",
              "declare": false
            },
            "right": {
              "type": "Identifier",
              "start": 301,
              "end": 304,
              "name": "obj",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "BlockStatement",
              "start": 306,
              "end": 346,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 316,
                  "end": 340,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 316,
                    "end": 339,
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "start": 316,
                      "end": 325,
                      "object": {
                        "type": "Identifier",
                        "start": 316,
                        "end": 322,
                        "name": "result",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 323,
                        "end": 324,
                        "name": "k",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": true,
                      "optional": false
                    },
                    "right": {
                      "type": "CallExpression",
                      "start": 328,
                      "end": 339,
                      "callee": {
                        "type": "Identifier",
                        "start": 328,
                        "end": 331,
                        "name": "box",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "start": 332,
                          "end": 338,
                          "object": {
                            "type": "Identifier",
                            "start": 332,
                            "end": 335,
                            "name": "obj",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 336,
                            "end": 337,
                            "name": "k",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": true,
                          "optional": false
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    }
                  },
                  "directive": null
                }
              ]
            }
          },
          {
            "type": "ReturnStatement",
            "start": 351,
            "end": 365,
            "argument": {
              "type": "Identifier",
              "start": 358,
              "end": 364,
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
        "start": 220,
        "end": 223,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 221,
            "end": 222,
            "name": {
              "type": "Identifier",
              "start": 221,
              "end": 222,
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
        "start": 231,
        "end": 244,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 233,
          "end": 244,
          "typeName": {
            "type": "Identifier",
            "start": 233,
            "end": 241,
            "name": "Boxified",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 241,
            "end": 244,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 242,
                "end": 243,
                "typeName": {
                  "type": "Identifier",
                  "start": 242,
                  "end": 243,
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
      "type": "FunctionDeclaration",
      "start": 369,
      "end": 540,
      "id": {
        "type": "Identifier",
        "start": 378,
        "end": 386,
        "name": "unboxify",
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
          "start": 405,
          "end": 421,
          "name": "obj",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 408,
            "end": 421,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 410,
              "end": 421,
              "typeName": {
                "type": "Identifier",
                "start": 410,
                "end": 418,
                "name": "Boxified",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 418,
                "end": 421,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 419,
                    "end": 420,
                    "typeName": {
                      "type": "Identifier",
                      "start": 419,
                      "end": 420,
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
        "start": 426,
        "end": 540,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 432,
            "end": 453,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 436,
                "end": 452,
                "id": {
                  "type": "Identifier",
                  "start": 436,
                  "end": 442,
                  "name": "result",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "TSAsExpression",
                  "start": 445,
                  "end": 452,
                  "expression": {
                    "type": "ObjectExpression",
                    "start": 445,
                    "end": 447,
                    "properties": []
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 451,
                    "end": 452,
                    "typeName": {
                      "type": "Identifier",
                      "start": 451,
                      "end": 452,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "ForInStatement",
            "start": 458,
            "end": 519,
            "left": {
              "type": "VariableDeclaration",
              "start": 463,
              "end": 468,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 467,
                  "end": 468,
                  "id": {
                    "type": "Identifier",
                    "start": 467,
                    "end": 468,
                    "name": "k",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "kind": "let",
              "declare": false
            },
            "right": {
              "type": "Identifier",
              "start": 472,
              "end": 475,
              "name": "obj",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "BlockStatement",
              "start": 477,
              "end": 519,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 487,
                  "end": 513,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 487,
                    "end": 512,
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "start": 487,
                      "end": 496,
                      "object": {
                        "type": "Identifier",
                        "start": 487,
                        "end": 493,
                        "name": "result",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 494,
                        "end": 495,
                        "name": "k",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": true,
                      "optional": false
                    },
                    "right": {
                      "type": "CallExpression",
                      "start": 499,
                      "end": 512,
                      "callee": {
                        "type": "Identifier",
                        "start": 499,
                        "end": 504,
                        "name": "unbox",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "start": 505,
                          "end": 511,
                          "object": {
                            "type": "Identifier",
                            "start": 505,
                            "end": 508,
                            "name": "obj",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 509,
                            "end": 510,
                            "name": "k",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": true,
                          "optional": false
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    }
                  },
                  "directive": null
                }
              ]
            }
          },
          {
            "type": "ReturnStatement",
            "start": 524,
            "end": 538,
            "argument": {
              "type": "Identifier",
              "start": 531,
              "end": 537,
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
        "start": 386,
        "end": 404,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 387,
            "end": 403,
            "name": {
              "type": "Identifier",
              "start": 387,
              "end": 388,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSObjectKeyword",
              "start": 397,
              "end": 403
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
        "start": 422,
        "end": 425,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 424,
          "end": 425,
          "typeName": {
            "type": "Identifier",
            "start": 424,
            "end": 425,
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
      "type": "FunctionDeclaration",
      "start": 542,
      "end": 669,
      "id": {
        "type": "Identifier",
        "start": 551,
        "end": 565,
        "name": "assignBoxified",
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
          "start": 569,
          "end": 585,
          "name": "obj",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 572,
            "end": 585,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 574,
              "end": 585,
              "typeName": {
                "type": "Identifier",
                "start": 574,
                "end": 582,
                "name": "Boxified",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 582,
                "end": 585,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 583,
                    "end": 584,
                    "typeName": {
                      "type": "Identifier",
                      "start": 583,
                      "end": 584,
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
        },
        {
          "type": "Identifier",
          "start": 587,
          "end": 596,
          "name": "values",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 593,
            "end": 596,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 595,
              "end": 596,
              "typeName": {
                "type": "Identifier",
                "start": 595,
                "end": 596,
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
      "body": {
        "type": "BlockStatement",
        "start": 598,
        "end": 669,
        "body": [
          {
            "type": "ForInStatement",
            "start": 604,
            "end": 667,
            "left": {
              "type": "VariableDeclaration",
              "start": 609,
              "end": 614,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 613,
                  "end": 614,
                  "id": {
                    "type": "Identifier",
                    "start": 613,
                    "end": 614,
                    "name": "k",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "kind": "let",
              "declare": false
            },
            "right": {
              "type": "Identifier",
              "start": 618,
              "end": 624,
              "name": "values",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "BlockStatement",
              "start": 626,
              "end": 667,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 636,
                  "end": 661,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 636,
                    "end": 660,
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "start": 636,
                      "end": 648,
                      "object": {
                        "type": "MemberExpression",
                        "start": 636,
                        "end": 642,
                        "object": {
                          "type": "Identifier",
                          "start": 636,
                          "end": 639,
                          "name": "obj",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 640,
                          "end": 641,
                          "name": "k",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": true,
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 643,
                        "end": 648,
                        "name": "value",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "right": {
                      "type": "MemberExpression",
                      "start": 651,
                      "end": 660,
                      "object": {
                        "type": "Identifier",
                        "start": 651,
                        "end": 657,
                        "name": "values",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 658,
                        "end": 659,
                        "name": "k",
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
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 565,
        "end": 568,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 566,
            "end": 567,
            "name": {
              "type": "Identifier",
              "start": 566,
              "end": 567,
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
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 671,
      "end": 814,
      "id": {
        "type": "Identifier",
        "start": 680,
        "end": 682,
        "name": "f1",
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
        "start": 685,
        "end": 814,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 691,
            "end": 758,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 695,
                "end": 757,
                "id": {
                  "type": "Identifier",
                  "start": 695,
                  "end": 696,
                  "name": "v",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 699,
                  "end": 757,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 709,
                      "end": 714,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 709,
                        "end": 710,
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 712,
                        "end": 714,
                        "value": 42,
                        "raw": "42"
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 724,
                      "end": 734,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 724,
                        "end": 725,
                        "name": "b",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 727,
                        "end": 734,
                        "value": "hello",
                        "raw": "\"hello\""
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 744,
                      "end": 751,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 744,
                        "end": 745,
                        "name": "c",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 747,
                        "end": 751,
                        "value": true,
                        "raw": "true"
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ]
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 763,
            "end": 781,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 767,
                "end": 780,
                "id": {
                  "type": "Identifier",
                  "start": 767,
                  "end": 768,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 771,
                  "end": 780,
                  "callee": {
                    "type": "Identifier",
                    "start": 771,
                    "end": 777,
                    "name": "boxify",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 778,
                      "end": 779,
                      "name": "v",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 786,
            "end": 812,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 790,
                "end": 811,
                "id": {
                  "type": "Identifier",
                  "start": 790,
                  "end": 799,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 791,
                    "end": 799,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 793,
                      "end": 799
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 802,
                  "end": 811,
                  "object": {
                    "type": "MemberExpression",
                    "start": 802,
                    "end": 805,
                    "object": {
                      "type": "Identifier",
                      "start": 802,
                      "end": 803,
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 804,
                      "end": 805,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 806,
                    "end": 811,
                    "name": "value",
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
            "kind": "let",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 816,
      "end": 970,
      "id": {
        "type": "Identifier",
        "start": 825,
        "end": 827,
        "name": "f2",
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
        "start": 830,
        "end": 970,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 836,
            "end": 918,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 840,
                "end": 917,
                "id": {
                  "type": "Identifier",
                  "start": 840,
                  "end": 841,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 844,
                  "end": 917,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 854,
                      "end": 864,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 854,
                        "end": 855,
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "CallExpression",
                        "start": 857,
                        "end": 864,
                        "callee": {
                          "type": "Identifier",
                          "start": 857,
                          "end": 860,
                          "name": "box",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "arguments": [
                          {
                            "type": "Literal",
                            "start": 861,
                            "end": 863,
                            "value": 42,
                            "raw": "42"
                          }
                        ],
                        "optional": false,
                        "typeArguments": null
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 874,
                      "end": 889,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 874,
                        "end": 875,
                        "name": "b",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "CallExpression",
                        "start": 877,
                        "end": 889,
                        "callee": {
                          "type": "Identifier",
                          "start": 877,
                          "end": 880,
                          "name": "box",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "arguments": [
                          {
                            "type": "Literal",
                            "start": 881,
                            "end": 888,
                            "value": "hello",
                            "raw": "\"hello\""
                          }
                        ],
                        "optional": false,
                        "typeArguments": null
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 899,
                      "end": 911,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 899,
                        "end": 900,
                        "name": "c",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "CallExpression",
                        "start": 902,
                        "end": 911,
                        "callee": {
                          "type": "Identifier",
                          "start": 902,
                          "end": 905,
                          "name": "box",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "arguments": [
                          {
                            "type": "Literal",
                            "start": 906,
                            "end": 910,
                            "value": true,
                            "raw": "true"
                          }
                        ],
                        "optional": false,
                        "typeArguments": null
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ]
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 923,
            "end": 943,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 927,
                "end": 942,
                "id": {
                  "type": "Identifier",
                  "start": 927,
                  "end": 928,
                  "name": "v",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 931,
                  "end": 942,
                  "callee": {
                    "type": "Identifier",
                    "start": 931,
                    "end": 939,
                    "name": "unboxify",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 940,
                      "end": 941,
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 948,
            "end": 968,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 952,
                "end": 967,
                "id": {
                  "type": "Identifier",
                  "start": 952,
                  "end": 961,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 953,
                    "end": 961,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 955,
                      "end": 961
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 964,
                  "end": 967,
                  "object": {
                    "type": "Identifier",
                    "start": 964,
                    "end": 965,
                    "name": "v",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 966,
                    "end": 967,
                    "name": "a",
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
            "kind": "let",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 972,
      "end": 1113,
      "id": {
        "type": "Identifier",
        "start": 981,
        "end": 983,
        "name": "f3",
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
        "start": 986,
        "end": 1113,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 992,
            "end": 1074,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 996,
                "end": 1073,
                "id": {
                  "type": "Identifier",
                  "start": 996,
                  "end": 997,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 1000,
                  "end": 1073,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 1010,
                      "end": 1020,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1010,
                        "end": 1011,
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "CallExpression",
                        "start": 1013,
                        "end": 1020,
                        "callee": {
                          "type": "Identifier",
                          "start": 1013,
                          "end": 1016,
                          "name": "box",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "arguments": [
                          {
                            "type": "Literal",
                            "start": 1017,
                            "end": 1019,
                            "value": 42,
                            "raw": "42"
                          }
                        ],
                        "optional": false,
                        "typeArguments": null
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 1030,
                      "end": 1045,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1030,
                        "end": 1031,
                        "name": "b",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "CallExpression",
                        "start": 1033,
                        "end": 1045,
                        "callee": {
                          "type": "Identifier",
                          "start": 1033,
                          "end": 1036,
                          "name": "box",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "arguments": [
                          {
                            "type": "Literal",
                            "start": 1037,
                            "end": 1044,
                            "value": "hello",
                            "raw": "\"hello\""
                          }
                        ],
                        "optional": false,
                        "typeArguments": null
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 1055,
                      "end": 1067,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1055,
                        "end": 1056,
                        "name": "c",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "CallExpression",
                        "start": 1058,
                        "end": 1067,
                        "callee": {
                          "type": "Identifier",
                          "start": 1058,
                          "end": 1061,
                          "name": "box",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "arguments": [
                          {
                            "type": "Literal",
                            "start": 1062,
                            "end": 1066,
                            "value": true,
                            "raw": "true"
                          }
                        ],
                        "optional": false,
                        "typeArguments": null
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ]
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 1079,
            "end": 1111,
            "expression": {
              "type": "CallExpression",
              "start": 1079,
              "end": 1110,
              "callee": {
                "type": "Identifier",
                "start": 1079,
                "end": 1093,
                "name": "assignBoxified",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1094,
                  "end": 1095,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "ObjectExpression",
                  "start": 1097,
                  "end": 1109,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 1099,
                      "end": 1107,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1099,
                        "end": 1100,
                        "name": "c",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 1102,
                        "end": 1107,
                        "value": false,
                        "raw": "false"
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ]
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1115,
      "end": 1277,
      "id": {
        "type": "Identifier",
        "start": 1124,
        "end": 1126,
        "name": "f4",
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
        "start": 1129,
        "end": 1277,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1135,
            "end": 1217,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1139,
                "end": 1216,
                "id": {
                  "type": "Identifier",
                  "start": 1139,
                  "end": 1140,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 1143,
                  "end": 1216,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 1153,
                      "end": 1163,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1153,
                        "end": 1154,
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "CallExpression",
                        "start": 1156,
                        "end": 1163,
                        "callee": {
                          "type": "Identifier",
                          "start": 1156,
                          "end": 1159,
                          "name": "box",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "arguments": [
                          {
                            "type": "Literal",
                            "start": 1160,
                            "end": 1162,
                            "value": 42,
                            "raw": "42"
                          }
                        ],
                        "optional": false,
                        "typeArguments": null
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 1173,
                      "end": 1188,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1173,
                        "end": 1174,
                        "name": "b",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "CallExpression",
                        "start": 1176,
                        "end": 1188,
                        "callee": {
                          "type": "Identifier",
                          "start": 1176,
                          "end": 1179,
                          "name": "box",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "arguments": [
                          {
                            "type": "Literal",
                            "start": 1180,
                            "end": 1187,
                            "value": "hello",
                            "raw": "\"hello\""
                          }
                        ],
                        "optional": false,
                        "typeArguments": null
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 1198,
                      "end": 1210,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1198,
                        "end": 1199,
                        "name": "c",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "CallExpression",
                        "start": 1201,
                        "end": 1210,
                        "callee": {
                          "type": "Identifier",
                          "start": 1201,
                          "end": 1204,
                          "name": "box",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "arguments": [
                          {
                            "type": "Literal",
                            "start": 1205,
                            "end": 1209,
                            "value": true,
                            "raw": "true"
                          }
                        ],
                        "optional": false,
                        "typeArguments": null
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ]
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 1222,
            "end": 1246,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1222,
              "end": 1245,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1222,
                "end": 1223,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "CallExpression",
                "start": 1226,
                "end": 1245,
                "callee": {
                  "type": "Identifier",
                  "start": 1226,
                  "end": 1232,
                  "name": "boxify",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "CallExpression",
                    "start": 1233,
                    "end": 1244,
                    "callee": {
                      "type": "Identifier",
                      "start": 1233,
                      "end": 1241,
                      "name": "unboxify",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 1242,
                        "end": 1243,
                        "name": "b",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "optional": false,
                    "typeArguments": null
                  }
                ],
                "optional": false,
                "typeArguments": null
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1251,
            "end": 1275,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1251,
              "end": 1274,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1251,
                "end": 1252,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "CallExpression",
                "start": 1255,
                "end": 1274,
                "callee": {
                  "type": "Identifier",
                  "start": 1255,
                  "end": 1263,
                  "name": "unboxify",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "CallExpression",
                    "start": 1264,
                    "end": 1273,
                    "callee": {
                      "type": "Identifier",
                      "start": 1264,
                      "end": 1270,
                      "name": "boxify",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 1271,
                        "end": 1272,
                        "name": "b",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "optional": false,
                    "typeArguments": null
                  }
                ],
                "optional": false,
                "typeArguments": null
              }
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1279,
      "end": 1361,
      "id": {
        "type": "Identifier",
        "start": 1288,
        "end": 1298,
        "name": "makeRecord",
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
          "start": 1320,
          "end": 1340,
          "name": "obj",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1323,
            "end": 1340,
            "typeAnnotation": {
              "type": "TSMappedType",
              "start": 1325,
              "end": 1340,
              "typeParameter": {
                "type": "TSTypeParameter",
                "start": 1328,
                "end": 1334,
                "name": {
                  "type": "Identifier",
                  "start": 1328,
                  "end": 1329,
                  "name": "P",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "constraint": {
                  "type": "TSTypeReference",
                  "start": 1333,
                  "end": 1334,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1333,
                    "end": 1334,
                    "name": "K",
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
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1337,
                "end": 1338,
                "typeName": {
                  "type": "Identifier",
                  "start": 1337,
                  "end": 1338,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              "optional": null,
              "readonly": null,
              "constraint": {
                "type": "TSTypeReference",
                "start": 1333,
                "end": 1334,
                "typeName": {
                  "type": "Identifier",
                  "start": 1333,
                  "end": 1334,
                  "name": "K",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              "key": {
                "type": "Identifier",
                "start": 1328,
                "end": 1329,
                "name": "P",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1342,
        "end": 1361,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 1348,
            "end": 1359,
            "argument": {
              "type": "Identifier",
              "start": 1355,
              "end": 1358,
              "name": "obj",
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
        "start": 1298,
        "end": 1319,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1299,
            "end": 1300,
            "name": {
              "type": "Identifier",
              "start": 1299,
              "end": 1300,
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
          },
          {
            "type": "TSTypeParameter",
            "start": 1302,
            "end": 1318,
            "name": {
              "type": "Identifier",
              "start": 1302,
              "end": 1303,
              "name": "K",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 1312,
              "end": 1318
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
      "start": 1363,
      "end": 1557,
      "id": {
        "type": "Identifier",
        "start": 1372,
        "end": 1374,
        "name": "f5",
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
          "start": 1375,
          "end": 1384,
          "name": "s",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1376,
            "end": 1384,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 1378,
              "end": 1384
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1386,
        "end": 1557,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1392,
            "end": 1486,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1396,
                "end": 1485,
                "id": {
                  "type": "Identifier",
                  "start": 1396,
                  "end": 1397,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 1400,
                  "end": 1485,
                  "callee": {
                    "type": "Identifier",
                    "start": 1400,
                    "end": 1410,
                    "name": "makeRecord",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "ObjectExpression",
                      "start": 1411,
                      "end": 1484,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 1421,
                          "end": 1431,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1421,
                            "end": 1422,
                            "name": "a",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "CallExpression",
                            "start": 1424,
                            "end": 1431,
                            "callee": {
                              "type": "Identifier",
                              "start": 1424,
                              "end": 1427,
                              "name": "box",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "arguments": [
                              {
                                "type": "Literal",
                                "start": 1428,
                                "end": 1430,
                                "value": 42,
                                "raw": "42"
                              }
                            ],
                            "optional": false,
                            "typeArguments": null
                          },
                          "kind": "init",
                          "optional": false
                        },
                        {
                          "type": "Property",
                          "start": 1441,
                          "end": 1456,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1441,
                            "end": 1442,
                            "name": "b",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "CallExpression",
                            "start": 1444,
                            "end": 1456,
                            "callee": {
                              "type": "Identifier",
                              "start": 1444,
                              "end": 1447,
                              "name": "box",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "arguments": [
                              {
                                "type": "Literal",
                                "start": 1448,
                                "end": 1455,
                                "value": "hello",
                                "raw": "\"hello\""
                              }
                            ],
                            "optional": false,
                            "typeArguments": null
                          },
                          "kind": "init",
                          "optional": false
                        },
                        {
                          "type": "Property",
                          "start": 1466,
                          "end": 1478,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1466,
                            "end": 1467,
                            "name": "c",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "CallExpression",
                            "start": 1469,
                            "end": 1478,
                            "callee": {
                              "type": "Identifier",
                              "start": 1469,
                              "end": 1472,
                              "name": "box",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "arguments": [
                              {
                                "type": "Literal",
                                "start": 1473,
                                "end": 1477,
                                "value": true,
                                "raw": "true"
                              }
                            ],
                            "optional": false,
                            "typeArguments": null
                          },
                          "kind": "init",
                          "optional": false
                        }
                      ]
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1491,
            "end": 1511,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1495,
                "end": 1510,
                "id": {
                  "type": "Identifier",
                  "start": 1495,
                  "end": 1496,
                  "name": "v",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 1499,
                  "end": 1510,
                  "callee": {
                    "type": "Identifier",
                    "start": 1499,
                    "end": 1507,
                    "name": "unboxify",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 1508,
                      "end": 1509,
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1516,
            "end": 1555,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1520,
                "end": 1554,
                "id": {
                  "type": "Identifier",
                  "start": 1520,
                  "end": 1548,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1521,
                    "end": 1548,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 1523,
                      "end": 1548,
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 1523,
                          "end": 1529
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 1532,
                          "end": 1538
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "start": 1541,
                          "end": 1548
                        }
                      ]
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 1551,
                  "end": 1554,
                  "object": {
                    "type": "Identifier",
                    "start": 1551,
                    "end": 1552,
                    "name": "v",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 1553,
                    "end": 1554,
                    "name": "a",
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
            "kind": "let",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1559,
      "end": 1630,
      "id": {
        "type": "Identifier",
        "start": 1568,
        "end": 1582,
        "name": "makeDictionary",
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
          "start": 1586,
          "end": 1609,
          "name": "obj",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1589,
            "end": 1609,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 1591,
              "end": 1609,
              "members": [
                {
                  "type": "TSIndexSignature",
                  "start": 1593,
                  "end": 1607,
                  "parameters": [
                    {
                      "type": "Identifier",
                      "start": 1594,
                      "end": 1603,
                      "name": "x",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1595,
                        "end": 1603,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 1597,
                          "end": 1603
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1604,
                    "end": 1607,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1606,
                      "end": 1607,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1606,
                        "end": 1607,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1611,
        "end": 1630,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 1617,
            "end": 1628,
            "argument": {
              "type": "Identifier",
              "start": 1624,
              "end": 1627,
              "name": "obj",
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
        "start": 1582,
        "end": 1585,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1583,
            "end": 1584,
            "name": {
              "type": "Identifier",
              "start": 1583,
              "end": 1584,
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
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1632,
      "end": 1831,
      "id": {
        "type": "Identifier",
        "start": 1641,
        "end": 1643,
        "name": "f6",
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
          "start": 1644,
          "end": 1653,
          "name": "s",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1645,
            "end": 1653,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 1647,
              "end": 1653
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1655,
        "end": 1831,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1661,
            "end": 1759,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1665,
                "end": 1758,
                "id": {
                  "type": "Identifier",
                  "start": 1665,
                  "end": 1666,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 1669,
                  "end": 1758,
                  "callee": {
                    "type": "Identifier",
                    "start": 1669,
                    "end": 1683,
                    "name": "makeDictionary",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "ObjectExpression",
                      "start": 1684,
                      "end": 1757,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 1694,
                          "end": 1704,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1694,
                            "end": 1695,
                            "name": "a",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "CallExpression",
                            "start": 1697,
                            "end": 1704,
                            "callee": {
                              "type": "Identifier",
                              "start": 1697,
                              "end": 1700,
                              "name": "box",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "arguments": [
                              {
                                "type": "Literal",
                                "start": 1701,
                                "end": 1703,
                                "value": 42,
                                "raw": "42"
                              }
                            ],
                            "optional": false,
                            "typeArguments": null
                          },
                          "kind": "init",
                          "optional": false
                        },
                        {
                          "type": "Property",
                          "start": 1714,
                          "end": 1729,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1714,
                            "end": 1715,
                            "name": "b",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "CallExpression",
                            "start": 1717,
                            "end": 1729,
                            "callee": {
                              "type": "Identifier",
                              "start": 1717,
                              "end": 1720,
                              "name": "box",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "arguments": [
                              {
                                "type": "Literal",
                                "start": 1721,
                                "end": 1728,
                                "value": "hello",
                                "raw": "\"hello\""
                              }
                            ],
                            "optional": false,
                            "typeArguments": null
                          },
                          "kind": "init",
                          "optional": false
                        },
                        {
                          "type": "Property",
                          "start": 1739,
                          "end": 1751,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1739,
                            "end": 1740,
                            "name": "c",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "CallExpression",
                            "start": 1742,
                            "end": 1751,
                            "callee": {
                              "type": "Identifier",
                              "start": 1742,
                              "end": 1745,
                              "name": "box",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "arguments": [
                              {
                                "type": "Literal",
                                "start": 1746,
                                "end": 1750,
                                "value": true,
                                "raw": "true"
                              }
                            ],
                            "optional": false,
                            "typeArguments": null
                          },
                          "kind": "init",
                          "optional": false
                        }
                      ]
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1764,
            "end": 1784,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1768,
                "end": 1783,
                "id": {
                  "type": "Identifier",
                  "start": 1768,
                  "end": 1769,
                  "name": "v",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 1772,
                  "end": 1783,
                  "callee": {
                    "type": "Identifier",
                    "start": 1772,
                    "end": 1780,
                    "name": "unboxify",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 1781,
                      "end": 1782,
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1789,
            "end": 1829,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1793,
                "end": 1828,
                "id": {
                  "type": "Identifier",
                  "start": 1793,
                  "end": 1821,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1794,
                    "end": 1821,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 1796,
                      "end": 1821,
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 1796,
                          "end": 1802
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 1805,
                          "end": 1811
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "start": 1814,
                          "end": 1821
                        }
                      ]
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 1824,
                  "end": 1828,
                  "object": {
                    "type": "Identifier",
                    "start": 1824,
                    "end": 1825,
                    "name": "v",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 1826,
                    "end": 1827,
                    "name": "s",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": true,
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1833,
      "end": 1897,
      "id": {
        "type": "Identifier",
        "start": 1850,
        "end": 1858,
        "name": "validate",
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
          "start": 1862,
          "end": 1892,
          "name": "obj",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1865,
            "end": 1892,
            "typeAnnotation": {
              "type": "TSMappedType",
              "start": 1867,
              "end": 1892,
              "typeParameter": {
                "type": "TSTypeParameter",
                "start": 1870,
                "end": 1882,
                "name": {
                  "type": "Identifier",
                  "start": 1870,
                  "end": 1871,
                  "name": "P",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "constraint": {
                  "type": "TSTypeOperator",
                  "start": 1875,
                  "end": 1882,
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1881,
                    "end": 1882,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1881,
                      "end": 1882,
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
                "start": 1886,
                "end": 1890,
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 1886,
                  "end": 1887,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1886,
                    "end": 1887,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "start": 1888,
                  "end": 1889,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1888,
                    "end": 1889,
                    "name": "P",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              },
              "optional": true,
              "readonly": null,
              "constraint": {
                "type": "TSTypeOperator",
                "start": 1875,
                "end": 1882,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 1881,
                  "end": 1882,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1881,
                    "end": 1882,
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
                "start": 1870,
                "end": 1871,
                "name": "P",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
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
        "start": 1858,
        "end": 1861,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1859,
            "end": 1860,
            "name": {
              "type": "Identifier",
              "start": 1859,
              "end": 1860,
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
        "start": 1893,
        "end": 1896,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1895,
          "end": 1896,
          "typeName": {
            "type": "Identifier",
            "start": 1895,
            "end": 1896,
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
      "type": "TSDeclareFunction",
      "start": 1898,
      "end": 1967,
      "id": {
        "type": "Identifier",
        "start": 1915,
        "end": 1920,
        "name": "clone",
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
          "start": 1924,
          "end": 1962,
          "name": "obj",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1927,
            "end": 1962,
            "typeAnnotation": {
              "type": "TSMappedType",
              "start": 1929,
              "end": 1962,
              "typeParameter": {
                "type": "TSTypeParameter",
                "start": 1941,
                "end": 1953,
                "name": {
                  "type": "Identifier",
                  "start": 1941,
                  "end": 1942,
                  "name": "P",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "constraint": {
                  "type": "TSTypeOperator",
                  "start": 1946,
                  "end": 1953,
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1952,
                    "end": 1953,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1952,
                      "end": 1953,
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
                "start": 1956,
                "end": 1960,
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 1956,
                  "end": 1957,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1956,
                    "end": 1957,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "start": 1958,
                  "end": 1959,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1958,
                    "end": 1959,
                    "name": "P",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              },
              "optional": null,
              "readonly": true,
              "constraint": {
                "type": "TSTypeOperator",
                "start": 1946,
                "end": 1953,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 1952,
                  "end": 1953,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1952,
                    "end": 1953,
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
                "start": 1941,
                "end": 1942,
                "name": "P",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
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
        "start": 1920,
        "end": 1923,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1921,
            "end": 1922,
            "name": {
              "type": "Identifier",
              "start": 1921,
              "end": 1922,
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
        "start": 1963,
        "end": 1966,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1965,
          "end": 1966,
          "typeName": {
            "type": "Identifier",
            "start": 1965,
            "end": 1966,
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
      "type": "TSDeclareFunction",
      "start": 1968,
      "end": 2049,
      "id": {
        "type": "Identifier",
        "start": 1985,
        "end": 2001,
        "name": "validateAndClone",
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
          "start": 2005,
          "end": 2044,
          "name": "obj",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2008,
            "end": 2044,
            "typeAnnotation": {
              "type": "TSMappedType",
              "start": 2010,
              "end": 2044,
              "typeParameter": {
                "type": "TSTypeParameter",
                "start": 2022,
                "end": 2034,
                "name": {
                  "type": "Identifier",
                  "start": 2022,
                  "end": 2023,
                  "name": "P",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "constraint": {
                  "type": "TSTypeOperator",
                  "start": 2027,
                  "end": 2034,
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 2033,
                    "end": 2034,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2033,
                      "end": 2034,
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
                "start": 2038,
                "end": 2042,
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 2038,
                  "end": 2039,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2038,
                    "end": 2039,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "start": 2040,
                  "end": 2041,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2040,
                    "end": 2041,
                    "name": "P",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              },
              "optional": true,
              "readonly": true,
              "constraint": {
                "type": "TSTypeOperator",
                "start": 2027,
                "end": 2034,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 2033,
                  "end": 2034,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2033,
                    "end": 2034,
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
                "start": 2022,
                "end": 2023,
                "name": "P",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
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
        "start": 2001,
        "end": 2004,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2002,
            "end": 2003,
            "name": {
              "type": "Identifier",
              "start": 2002,
              "end": 2003,
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
        "start": 2045,
        "end": 2048,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 2047,
          "end": 2048,
          "typeName": {
            "type": "Identifier",
            "start": 2047,
            "end": 2048,
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
      "type": "TSTypeAliasDeclaration",
      "start": 2051,
      "end": 2105,
      "id": {
        "type": "Identifier",
        "start": 2056,
        "end": 2059,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 2062,
        "end": 2105,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 2068,
            "end": 2079,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 2068,
              "end": 2069,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2070,
              "end": 2078,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 2072,
                "end": 2078
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 2084,
            "end": 2103,
            "computed": false,
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "start": 2093,
              "end": 2094,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2094,
              "end": 2102,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 2096,
                "end": 2102
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
      "type": "FunctionDeclaration",
      "start": 2107,
      "end": 2316,
      "id": {
        "type": "Identifier",
        "start": 2116,
        "end": 2119,
        "name": "f10",
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
          "start": 2120,
          "end": 2128,
          "name": "foo",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2123,
            "end": 2128,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2125,
              "end": 2128,
              "typeName": {
                "type": "Identifier",
                "start": 2125,
                "end": 2128,
                "name": "Foo",
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
        "start": 2130,
        "end": 2316,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 2136,
            "end": 2158,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2140,
                "end": 2157,
                "id": {
                  "type": "Identifier",
                  "start": 2140,
                  "end": 2141,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 2144,
                  "end": 2157,
                  "callee": {
                    "type": "Identifier",
                    "start": 2144,
                    "end": 2152,
                    "name": "validate",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 2153,
                      "end": 2156,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 2201,
            "end": 2220,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2205,
                "end": 2219,
                "id": {
                  "type": "Identifier",
                  "start": 2205,
                  "end": 2206,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 2209,
                  "end": 2219,
                  "callee": {
                    "type": "Identifier",
                    "start": 2209,
                    "end": 2214,
                    "name": "clone",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 2215,
                      "end": 2218,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 2255,
            "end": 2285,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2259,
                "end": 2284,
                "id": {
                  "type": "Identifier",
                  "start": 2259,
                  "end": 2260,
                  "name": "z",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 2263,
                  "end": 2284,
                  "callee": {
                    "type": "Identifier",
                    "start": 2263,
                    "end": 2279,
                    "name": "validateAndClone",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 2280,
                      "end": 2283,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2340,
      "end": 2377,
      "id": {
        "type": "Identifier",
        "start": 2345,
        "end": 2349,
        "name": "Func",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2349,
        "end": 2352,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2350,
            "end": 2351,
            "name": {
              "type": "Identifier",
              "start": 2350,
              "end": 2351,
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
        "type": "TSFunctionType",
        "start": 2355,
        "end": 2376,
        "typeParameters": null,
        "params": [
          {
            "type": "RestElement",
            "start": 2356,
            "end": 2370,
            "argument": {
              "type": "Identifier",
              "start": 2359,
              "end": 2363,
              "name": "args",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "decorators": [],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2363,
              "end": 2370,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 2365,
                "end": 2370,
                "elementType": {
                  "type": "TSAnyKeyword",
                  "start": 2365,
                  "end": 2368
                }
              }
            },
            "value": null
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 2372,
          "end": 2376,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 2375,
            "end": 2376,
            "typeName": {
              "type": "Identifier",
              "start": 2375,
              "end": 2376,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2378,
      "end": 2443,
      "id": {
        "type": "Identifier",
        "start": 2383,
        "end": 2387,
        "name": "Spec",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2387,
        "end": 2390,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2388,
            "end": 2389,
            "name": {
              "type": "Identifier",
              "start": 2388,
              "end": 2389,
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
        "start": 2393,
        "end": 2442,
        "typeParameter": {
          "type": "TSTypeParameter",
          "start": 2400,
          "end": 2412,
          "name": {
            "type": "Identifier",
            "start": 2400,
            "end": 2401,
            "name": "P",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "constraint": {
            "type": "TSTypeOperator",
            "start": 2405,
            "end": 2412,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2411,
              "end": 2412,
              "typeName": {
                "type": "Identifier",
                "start": 2411,
                "end": 2412,
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
          "type": "TSUnionType",
          "start": 2415,
          "end": 2438,
          "types": [
            {
              "type": "TSTypeReference",
              "start": 2415,
              "end": 2425,
              "typeName": {
                "type": "Identifier",
                "start": 2415,
                "end": 2419,
                "name": "Func",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 2419,
                "end": 2425,
                "params": [
                  {
                    "type": "TSIndexedAccessType",
                    "start": 2420,
                    "end": 2424,
                    "objectType": {
                      "type": "TSTypeReference",
                      "start": 2420,
                      "end": 2421,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2420,
                        "end": 2421,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    },
                    "indexType": {
                      "type": "TSTypeReference",
                      "start": 2422,
                      "end": 2423,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2422,
                        "end": 2423,
                        "name": "P",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  }
                ]
              }
            },
            {
              "type": "TSTypeReference",
              "start": 2428,
              "end": 2438,
              "typeName": {
                "type": "Identifier",
                "start": 2428,
                "end": 2432,
                "name": "Spec",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 2432,
                "end": 2438,
                "params": [
                  {
                    "type": "TSIndexedAccessType",
                    "start": 2433,
                    "end": 2437,
                    "objectType": {
                      "type": "TSTypeReference",
                      "start": 2433,
                      "end": 2434,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2433,
                        "end": 2434,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    },
                    "indexType": {
                      "type": "TSTypeReference",
                      "start": 2435,
                      "end": 2436,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2435,
                        "end": 2436,
                        "name": "P",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  }
                ]
              }
            }
          ]
        },
        "optional": null,
        "readonly": null,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 2405,
          "end": 2412,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 2411,
            "end": 2412,
            "typeName": {
              "type": "Identifier",
              "start": 2411,
              "end": 2412,
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
          "start": 2400,
          "end": 2401,
          "name": "P",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 2692,
      "end": 2759,
      "id": {
        "type": "Identifier",
        "start": 2709,
        "end": 2718,
        "name": "applySpec",
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
          "start": 2722,
          "end": 2734,
          "name": "obj",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2725,
            "end": 2734,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2727,
              "end": 2734,
              "typeName": {
                "type": "Identifier",
                "start": 2727,
                "end": 2731,
                "name": "Spec",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 2731,
                "end": 2734,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 2732,
                    "end": 2733,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2732,
                      "end": 2733,
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
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2718,
        "end": 2721,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2719,
            "end": 2720,
            "name": {
              "type": "Identifier",
              "start": 2719,
              "end": 2720,
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
        "start": 2735,
        "end": 2758,
        "typeAnnotation": {
          "type": "TSFunctionType",
          "start": 2737,
          "end": 2758,
          "typeParameters": null,
          "params": [
            {
              "type": "RestElement",
              "start": 2738,
              "end": 2752,
              "argument": {
                "type": "Identifier",
                "start": 2741,
                "end": 2745,
                "name": "args",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "decorators": [],
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 2745,
                "end": 2752,
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "start": 2747,
                  "end": 2752,
                  "elementType": {
                    "type": "TSAnyKeyword",
                    "start": 2747,
                    "end": 2750
                  }
                }
              },
              "value": null
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 2754,
            "end": 2758,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2757,
              "end": 2758,
              "typeName": {
                "type": "Identifier",
                "start": 2757,
                "end": 2758,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          }
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 2836,
      "end": 2933,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2840,
          "end": 2932,
          "id": {
            "type": "Identifier",
            "start": 2840,
            "end": 2842,
            "name": "g1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 2845,
            "end": 2932,
            "callee": {
              "type": "Identifier",
              "start": 2845,
              "end": 2854,
              "name": "applySpec",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 2855,
                "end": 2931,
                "properties": [
                  {
                    "type": "Property",
                    "start": 2861,
                    "end": 2879,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 2861,
                      "end": 2864,
                      "name": "sum",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "start": 2866,
                      "end": 2879,
                      "id": null,
                      "expression": true,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 2867,
                          "end": 2873,
                          "name": "a",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 2868,
                            "end": 2873,
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "start": 2870,
                              "end": 2873
                            }
                          },
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "body": {
                        "type": "Literal",
                        "start": 2878,
                        "end": 2879,
                        "value": 3,
                        "raw": "3"
                      },
                      "typeParameters": null,
                      "returnType": null
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 2885,
                    "end": 2929,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 2885,
                      "end": 2891,
                      "name": "nested",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "ObjectExpression",
                      "start": 2893,
                      "end": 2929,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 2903,
                          "end": 2923,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 2903,
                            "end": 2906,
                            "name": "mul",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "ArrowFunctionExpression",
                            "start": 2908,
                            "end": 2923,
                            "id": null,
                            "expression": true,
                            "generator": false,
                            "async": false,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 2909,
                                "end": 2915,
                                "name": "b",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 2910,
                                  "end": 2915,
                                  "typeAnnotation": {
                                    "type": "TSAnyKeyword",
                                    "start": 2912,
                                    "end": 2915
                                  }
                                },
                                "decorators": [],
                                "optional": false
                              }
                            ],
                            "body": {
                              "type": "Literal",
                              "start": 2920,
                              "end": 2923,
                              "value": "n",
                              "raw": "\"n\""
                            },
                            "typeParameters": null,
                            "returnType": null
                          },
                          "kind": "init",
                          "optional": false
                        }
                      ]
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3004,
      "end": 3068,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3008,
          "end": 3067,
          "id": {
            "type": "Identifier",
            "start": 3008,
            "end": 3010,
            "name": "g2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 3013,
            "end": 3067,
            "callee": {
              "type": "Identifier",
              "start": 3013,
              "end": 3022,
              "name": "applySpec",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 3023,
                "end": 3066,
                "properties": [
                  {
                    "type": "Property",
                    "start": 3025,
                    "end": 3064,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 3025,
                      "end": 3028,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "ObjectExpression",
                      "start": 3030,
                      "end": 3064,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 3032,
                          "end": 3062,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 3032,
                            "end": 3035,
                            "name": "bar",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "ObjectExpression",
                            "start": 3037,
                            "end": 3062,
                            "properties": [
                              {
                                "type": "Property",
                                "start": 3039,
                                "end": 3060,
                                "method": false,
                                "shorthand": false,
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 3039,
                                  "end": 3042,
                                  "name": "baz",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "value": {
                                  "type": "ArrowFunctionExpression",
                                  "start": 3044,
                                  "end": 3060,
                                  "id": null,
                                  "expression": true,
                                  "generator": false,
                                  "async": false,
                                  "params": [
                                    {
                                      "type": "Identifier",
                                      "start": 3045,
                                      "end": 3051,
                                      "name": "x",
                                      "typeAnnotation": {
                                        "type": "TSTypeAnnotation",
                                        "start": 3046,
                                        "end": 3051,
                                        "typeAnnotation": {
                                          "type": "TSAnyKeyword",
                                          "start": 3048,
                                          "end": 3051
                                        }
                                      },
                                      "decorators": [],
                                      "optional": false
                                    }
                                  ],
                                  "body": {
                                    "type": "Literal",
                                    "start": 3056,
                                    "end": 3060,
                                    "value": true,
                                    "raw": "true"
                                  },
                                  "typeParameters": null,
                                  "returnType": null
                                },
                                "kind": "init",
                                "optional": false
                              }
                            ]
                          },
                          "kind": "init",
                          "optional": false
                        }
                      ]
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3092,
      "end": 3150,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3098,
          "end": 3149,
          "id": {
            "type": "Identifier",
            "start": 3098,
            "end": 3101,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 3104,
            "end": 3149,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 3108,
                "end": 3117,
                "name": "object",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 3114,
                  "end": 3117,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 3116,
                    "end": 3117,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3116,
                      "end": 3117,
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
              {
                "type": "Identifier",
                "start": 3119,
                "end": 3138,
                "name": "partial",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 3126,
                  "end": 3138,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 3128,
                    "end": 3138,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3128,
                      "end": 3135,
                      "name": "Partial",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 3135,
                      "end": 3138,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 3136,
                          "end": 3137,
                          "typeName": {
                            "type": "Identifier",
                            "start": 3136,
                            "end": 3137,
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
              "type": "Identifier",
              "start": 3143,
              "end": 3149,
              "name": "object",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 3104,
              "end": 3107,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 3105,
                  "end": 3106,
                  "name": {
                    "type": "Identifier",
                    "start": 3105,
                    "end": 3106,
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
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3151,
      "end": 3172,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3155,
          "end": 3171,
          "id": {
            "type": "Identifier",
            "start": 3155,
            "end": 3156,
            "name": "o",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 3159,
            "end": 3171,
            "properties": [
              {
                "type": "Property",
                "start": 3160,
                "end": 3164,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 3160,
                  "end": 3161,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 3163,
                  "end": 3164,
                  "value": 5,
                  "raw": "5"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 3166,
                "end": 3170,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 3166,
                  "end": 3167,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 3169,
                  "end": 3170,
                  "value": 7,
                  "raw": "7"
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 3173,
      "end": 3188,
      "expression": {
        "type": "CallExpression",
        "start": 3173,
        "end": 3187,
        "callee": {
          "type": "Identifier",
          "start": 3173,
          "end": 3176,
          "name": "foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 3177,
            "end": 3178,
            "name": "o",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          {
            "type": "ObjectExpression",
            "start": 3180,
            "end": 3186,
            "properties": [
              {
                "type": "Property",
                "start": 3181,
                "end": 3185,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 3181,
                  "end": 3182,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 3184,
                  "end": 3185,
                  "value": 9,
                  "raw": "9"
                },
                "kind": "init",
                "optional": false
              }
            ]
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 3189,
      "end": 3208,
      "expression": {
        "type": "AssignmentExpression",
        "start": 3189,
        "end": 3207,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 3189,
          "end": 3190,
          "name": "o",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 3193,
          "end": 3207,
          "callee": {
            "type": "Identifier",
            "start": 3193,
            "end": 3196,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "arguments": [
            {
              "type": "Identifier",
              "start": 3197,
              "end": 3198,
              "name": "o",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            {
              "type": "ObjectExpression",
              "start": 3200,
              "end": 3206,
              "properties": [
                {
                  "type": "Property",
                  "start": 3201,
                  "end": 3205,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 3201,
                    "end": 3202,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 3204,
                    "end": 3205,
                    "value": 9,
                    "raw": "9"
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
            }
          ],
          "optional": false,
          "typeArguments": null
        }
      },
      "directive": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 3336,
      "end": 3399,
      "id": {
        "type": "Identifier",
        "start": 3353,
        "end": 3356,
        "name": "f20",
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
          "start": 3379,
          "end": 3394,
          "name": "obj",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3382,
            "end": 3394,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 3384,
              "end": 3394,
              "typeName": {
                "type": "Identifier",
                "start": 3384,
                "end": 3388,
                "name": "Pick",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 3388,
                "end": 3394,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 3389,
                    "end": 3390,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3389,
                      "end": 3390,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 3392,
                    "end": 3393,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3392,
                      "end": 3393,
                      "name": "K",
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
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3356,
        "end": 3378,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3357,
            "end": 3358,
            "name": {
              "type": "Identifier",
              "start": 3357,
              "end": 3358,
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
          },
          {
            "type": "TSTypeParameter",
            "start": 3360,
            "end": 3377,
            "name": {
              "type": "Identifier",
              "start": 3360,
              "end": 3361,
              "name": "K",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 3370,
              "end": 3377,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3376,
                "end": 3377,
                "typeName": {
                  "type": "Identifier",
                  "start": 3376,
                  "end": 3377,
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
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 3395,
        "end": 3398,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 3397,
          "end": 3398,
          "typeName": {
            "type": "Identifier",
            "start": 3397,
            "end": 3398,
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
      "type": "TSDeclareFunction",
      "start": 3400,
      "end": 3463,
      "id": {
        "type": "Identifier",
        "start": 3417,
        "end": 3420,
        "name": "f21",
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
          "start": 3443,
          "end": 3458,
          "name": "obj",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3446,
            "end": 3458,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 3448,
              "end": 3458,
              "typeName": {
                "type": "Identifier",
                "start": 3448,
                "end": 3452,
                "name": "Pick",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 3452,
                "end": 3458,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 3453,
                    "end": 3454,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3453,
                      "end": 3454,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 3456,
                    "end": 3457,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3456,
                      "end": 3457,
                      "name": "K",
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
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3420,
        "end": 3442,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3421,
            "end": 3422,
            "name": {
              "type": "Identifier",
              "start": 3421,
              "end": 3422,
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
          },
          {
            "type": "TSTypeParameter",
            "start": 3424,
            "end": 3441,
            "name": {
              "type": "Identifier",
              "start": 3424,
              "end": 3425,
              "name": "K",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 3434,
              "end": 3441,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3440,
                "end": 3441,
                "typeName": {
                  "type": "Identifier",
                  "start": 3440,
                  "end": 3441,
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
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 3459,
        "end": 3462,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 3461,
          "end": 3462,
          "typeName": {
            "type": "Identifier",
            "start": 3461,
            "end": 3462,
            "name": "K",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 3464,
      "end": 3537,
      "id": {
        "type": "Identifier",
        "start": 3481,
        "end": 3484,
        "name": "f22",
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
          "start": 3507,
          "end": 3532,
          "name": "obj",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3510,
            "end": 3532,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 3512,
              "end": 3532,
              "typeName": {
                "type": "Identifier",
                "start": 3512,
                "end": 3520,
                "name": "Boxified",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 3520,
                "end": 3532,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 3521,
                    "end": 3531,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3521,
                      "end": 3525,
                      "name": "Pick",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 3525,
                      "end": 3531,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 3526,
                          "end": 3527,
                          "typeName": {
                            "type": "Identifier",
                            "start": 3526,
                            "end": 3527,
                            "name": "T",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 3529,
                          "end": 3530,
                          "typeName": {
                            "type": "Identifier",
                            "start": 3529,
                            "end": 3530,
                            "name": "K",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      ]
                    }
                  }
                ]
              }
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
        "start": 3484,
        "end": 3506,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3485,
            "end": 3486,
            "name": {
              "type": "Identifier",
              "start": 3485,
              "end": 3486,
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
          },
          {
            "type": "TSTypeParameter",
            "start": 3488,
            "end": 3505,
            "name": {
              "type": "Identifier",
              "start": 3488,
              "end": 3489,
              "name": "K",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 3498,
              "end": 3505,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3504,
                "end": 3505,
                "typeName": {
                  "type": "Identifier",
                  "start": 3504,
                  "end": 3505,
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
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 3533,
        "end": 3536,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 3535,
          "end": 3536,
          "typeName": {
            "type": "Identifier",
            "start": 3535,
            "end": 3536,
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
      "type": "TSDeclareFunction",
      "start": 3538,
      "end": 3614,
      "id": {
        "type": "Identifier",
        "start": 3555,
        "end": 3558,
        "name": "f23",
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
          "start": 3594,
          "end": 3609,
          "name": "obj",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3597,
            "end": 3609,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 3599,
              "end": 3609,
              "typeName": {
                "type": "Identifier",
                "start": 3599,
                "end": 3603,
                "name": "Pick",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 3603,
                "end": 3609,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 3604,
                    "end": 3605,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3604,
                      "end": 3605,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 3607,
                    "end": 3608,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3607,
                      "end": 3608,
                      "name": "K",
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
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3558,
        "end": 3593,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3559,
            "end": 3560,
            "name": {
              "type": "Identifier",
              "start": 3559,
              "end": 3560,
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
          },
          {
            "type": "TSTypeParameter",
            "start": 3562,
            "end": 3579,
            "name": {
              "type": "Identifier",
              "start": 3562,
              "end": 3563,
              "name": "U",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 3572,
              "end": 3579,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3578,
                "end": 3579,
                "typeName": {
                  "type": "Identifier",
                  "start": 3578,
                  "end": 3579,
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
          {
            "type": "TSTypeParameter",
            "start": 3581,
            "end": 3592,
            "name": {
              "type": "Identifier",
              "start": 3581,
              "end": 3582,
              "name": "K",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 3591,
              "end": 3592,
              "typeName": {
                "type": "Identifier",
                "start": 3591,
                "end": 3592,
                "name": "U",
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
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 3610,
        "end": 3613,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 3612,
          "end": 3613,
          "typeName": {
            "type": "Identifier",
            "start": 3612,
            "end": 3613,
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
      "type": "TSDeclareFunction",
      "start": 3615,
      "end": 3699,
      "id": {
        "type": "Identifier",
        "start": 3632,
        "end": 3635,
        "name": "f24",
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
          "start": 3671,
          "end": 3690,
          "name": "obj",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3674,
            "end": 3690,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 3676,
              "end": 3690,
              "typeName": {
                "type": "Identifier",
                "start": 3676,
                "end": 3680,
                "name": "Pick",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 3680,
                "end": 3690,
                "params": [
                  {
                    "type": "TSIntersectionType",
                    "start": 3681,
                    "end": 3686,
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "start": 3681,
                        "end": 3682,
                        "typeName": {
                          "type": "Identifier",
                          "start": 3681,
                          "end": 3682,
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      },
                      {
                        "type": "TSTypeReference",
                        "start": 3685,
                        "end": 3686,
                        "typeName": {
                          "type": "Identifier",
                          "start": 3685,
                          "end": 3686,
                          "name": "U",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    ]
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 3688,
                    "end": 3689,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3688,
                      "end": 3689,
                      "name": "K",
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
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3635,
        "end": 3670,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3636,
            "end": 3637,
            "name": {
              "type": "Identifier",
              "start": 3636,
              "end": 3637,
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
          },
          {
            "type": "TSTypeParameter",
            "start": 3639,
            "end": 3640,
            "name": {
              "type": "Identifier",
              "start": 3639,
              "end": 3640,
              "name": "U",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 3642,
            "end": 3669,
            "name": {
              "type": "Identifier",
              "start": 3642,
              "end": 3643,
              "name": "K",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSUnionType",
              "start": 3652,
              "end": 3669,
              "types": [
                {
                  "type": "TSTypeOperator",
                  "start": 3652,
                  "end": 3659,
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 3658,
                    "end": 3659,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3658,
                      "end": 3659,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                {
                  "type": "TSTypeOperator",
                  "start": 3662,
                  "end": 3669,
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 3668,
                    "end": 3669,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3668,
                      "end": 3669,
                      "name": "U",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                }
              ]
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
        "start": 3691,
        "end": 3698,
        "typeAnnotation": {
          "type": "TSIntersectionType",
          "start": 3693,
          "end": 3698,
          "types": [
            {
              "type": "TSTypeReference",
              "start": 3693,
              "end": 3694,
              "typeName": {
                "type": "Identifier",
                "start": 3693,
                "end": 3694,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            {
              "type": "TSTypeReference",
              "start": 3697,
              "end": 3698,
              "typeName": {
                "type": "Identifier",
                "start": 3697,
                "end": 3698,
                "name": "U",
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
    {
      "type": "VariableDeclaration",
      "start": 3701,
      "end": 3741,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3705,
          "end": 3740,
          "id": {
            "type": "Identifier",
            "start": 3705,
            "end": 3707,
            "name": "x0",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 3710,
            "end": 3740,
            "callee": {
              "type": "Identifier",
              "start": 3710,
              "end": 3713,
              "name": "f20",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 3714,
                "end": 3739,
                "properties": [
                  {
                    "type": "Property",
                    "start": 3716,
                    "end": 3723,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 3716,
                      "end": 3719,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 3721,
                      "end": 3723,
                      "value": 42,
                      "raw": "42"
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 3725,
                    "end": 3737,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 3725,
                      "end": 3728,
                      "name": "bar",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 3730,
                      "end": 3737,
                      "value": "hello",
                      "raw": "\"hello\""
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3742,
      "end": 3782,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3746,
          "end": 3781,
          "id": {
            "type": "Identifier",
            "start": 3746,
            "end": 3748,
            "name": "x1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 3751,
            "end": 3781,
            "callee": {
              "type": "Identifier",
              "start": 3751,
              "end": 3754,
              "name": "f21",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 3755,
                "end": 3780,
                "properties": [
                  {
                    "type": "Property",
                    "start": 3757,
                    "end": 3764,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 3757,
                      "end": 3760,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 3762,
                      "end": 3764,
                      "value": 42,
                      "raw": "42"
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 3766,
                    "end": 3778,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 3766,
                      "end": 3769,
                      "name": "bar",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 3771,
                      "end": 3778,
                      "value": "hello",
                      "raw": "\"hello\""
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3783,
      "end": 3845,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3787,
          "end": 3844,
          "id": {
            "type": "Identifier",
            "start": 3787,
            "end": 3789,
            "name": "x2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 3792,
            "end": 3844,
            "callee": {
              "type": "Identifier",
              "start": 3792,
              "end": 3795,
              "name": "f22",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 3796,
                "end": 3843,
                "properties": [
                  {
                    "type": "Property",
                    "start": 3798,
                    "end": 3815,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 3798,
                      "end": 3801,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "ObjectExpression",
                      "start": 3803,
                      "end": 3815,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 3805,
                          "end": 3814,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 3805,
                            "end": 3810,
                            "name": "value",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Literal",
                            "start": 3812,
                            "end": 3814,
                            "value": 42,
                            "raw": "42"
                          },
                          "kind": "init",
                          "optional": false
                        }
                      ]
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 3818,
                    "end": 3841,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 3818,
                      "end": 3821,
                      "name": "bar",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "ObjectExpression",
                      "start": 3823,
                      "end": 3841,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 3825,
                          "end": 3839,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 3825,
                            "end": 3830,
                            "name": "value",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Literal",
                            "start": 3832,
                            "end": 3839,
                            "value": "hello",
                            "raw": "\"hello\""
                          },
                          "kind": "init",
                          "optional": false
                        }
                      ]
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3846,
      "end": 3886,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3850,
          "end": 3885,
          "id": {
            "type": "Identifier",
            "start": 3850,
            "end": 3852,
            "name": "x3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 3855,
            "end": 3885,
            "callee": {
              "type": "Identifier",
              "start": 3855,
              "end": 3858,
              "name": "f23",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 3859,
                "end": 3884,
                "properties": [
                  {
                    "type": "Property",
                    "start": 3861,
                    "end": 3868,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 3861,
                      "end": 3864,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 3866,
                      "end": 3868,
                      "value": 42,
                      "raw": "42"
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 3870,
                    "end": 3882,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 3870,
                      "end": 3873,
                      "name": "bar",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 3875,
                      "end": 3882,
                      "value": "hello",
                      "raw": "\"hello\""
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3887,
      "end": 3927,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3891,
          "end": 3926,
          "id": {
            "type": "Identifier",
            "start": 3891,
            "end": 3893,
            "name": "x4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 3896,
            "end": 3926,
            "callee": {
              "type": "Identifier",
              "start": 3896,
              "end": 3899,
              "name": "f24",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 3900,
                "end": 3925,
                "properties": [
                  {
                    "type": "Property",
                    "start": 3902,
                    "end": 3909,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 3902,
                      "end": 3905,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 3907,
                      "end": 3909,
                      "value": 42,
                      "raw": "42"
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 3911,
                    "end": 3923,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 3911,
                      "end": 3914,
                      "name": "bar",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 3916,
                      "end": 3923,
                      "value": "hello",
                      "raw": "\"hello\""
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 3951,
      "end": 4047,
      "id": {
        "type": "Identifier",
        "start": 3960,
        "end": 3968,
        "name": "getProps",
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
          "start": 3991,
          "end": 3997,
          "name": "obj",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3994,
            "end": 3997,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 3996,
              "end": 3997,
              "typeName": {
                "type": "Identifier",
                "start": 3996,
                "end": 3997,
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
        {
          "type": "Identifier",
          "start": 3999,
          "end": 4008,
          "name": "list",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 4003,
            "end": 4008,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 4005,
              "end": 4008,
              "elementType": {
                "type": "TSTypeReference",
                "start": 4005,
                "end": 4006,
                "typeName": {
                  "type": "Identifier",
                  "start": 4005,
                  "end": 4006,
                  "name": "K",
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
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 4022,
        "end": 4047,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 4028,
            "end": 4045,
            "argument": {
              "type": "TSAsExpression",
              "start": 4035,
              "end": 4044,
              "expression": {
                "type": "ObjectExpression",
                "start": 4035,
                "end": 4037,
                "properties": []
              },
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 4041,
                "end": 4044
              }
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3968,
        "end": 3990,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3969,
            "end": 3970,
            "name": {
              "type": "Identifier",
              "start": 3969,
              "end": 3970,
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
          },
          {
            "type": "TSTypeParameter",
            "start": 3972,
            "end": 3989,
            "name": {
              "type": "Identifier",
              "start": 3972,
              "end": 3973,
              "name": "K",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 3982,
              "end": 3989,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3988,
                "end": 3989,
                "typeName": {
                  "type": "Identifier",
                  "start": 3988,
                  "end": 3989,
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
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 4009,
        "end": 4021,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 4011,
          "end": 4021,
          "typeName": {
            "type": "Identifier",
            "start": 4011,
            "end": 4015,
            "name": "Pick",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 4015,
            "end": 4021,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 4016,
                "end": 4017,
                "typeName": {
                  "type": "Identifier",
                  "start": 4016,
                  "end": 4017,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              {
                "type": "TSTypeReference",
                "start": 4019,
                "end": 4020,
                "typeName": {
                  "type": "Identifier",
                  "start": 4019,
                  "end": 4020,
                  "name": "K",
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
      "start": 4049,
      "end": 4071,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4055,
          "end": 4070,
          "id": {
            "type": "Identifier",
            "start": 4055,
            "end": 4065,
            "name": "myAny",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 4060,
              "end": 4065,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 4062,
                "end": 4065
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 4068,
            "end": 4070,
            "properties": []
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 4073,
      "end": 4116,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4079,
          "end": 4115,
          "id": {
            "type": "Identifier",
            "start": 4079,
            "end": 4081,
            "name": "o1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 4084,
            "end": 4115,
            "callee": {
              "type": "Identifier",
              "start": 4084,
              "end": 4092,
              "name": "getProps",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 4093,
                "end": 4098,
                "name": "myAny",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "ArrayExpression",
                "start": 4100,
                "end": 4114,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 4101,
                    "end": 4106,
                    "value": "foo",
                    "raw": "'foo'"
                  },
                  {
                    "type": "Literal",
                    "start": 4108,
                    "end": 4113,
                    "value": "bar",
                    "raw": "'bar'"
                  }
                ]
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
      "start": 4118,
      "end": 4185,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4124,
          "end": 4184,
          "id": {
            "type": "Identifier",
            "start": 4124,
            "end": 4150,
            "name": "o2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 4126,
              "end": 4150,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 4128,
                "end": 4150,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 4130,
                    "end": 4139,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 4130,
                      "end": 4133,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 4133,
                      "end": 4138,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 4135,
                        "end": 4138
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 4140,
                    "end": 4148,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 4140,
                      "end": 4143,
                      "name": "bar",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 4143,
                      "end": 4148,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 4145,
                        "end": 4148
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 4153,
            "end": 4184,
            "callee": {
              "type": "Identifier",
              "start": 4153,
              "end": 4161,
              "name": "getProps",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 4162,
                "end": 4167,
                "name": "myAny",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "ArrayExpression",
                "start": 4169,
                "end": 4183,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 4170,
                    "end": 4175,
                    "value": "foo",
                    "raw": "'foo'"
                  },
                  {
                    "type": "Literal",
                    "start": 4177,
                    "end": 4182,
                    "value": "bar",
                    "raw": "'bar'"
                  }
                ]
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
