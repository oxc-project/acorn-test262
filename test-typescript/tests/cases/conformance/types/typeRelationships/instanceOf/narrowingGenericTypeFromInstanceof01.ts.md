__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 385,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 53,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 53,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 17,
            "end": 51,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 17,
              "end": 28,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 28,
              "end": 51,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 48,
                "end": 51,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 29,
                  "end": 46,
                  "accessibility": "private",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 37,
                    "end": 46,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 38,
                      "end": 46,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 40,
                        "end": 46
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
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
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 7,
        "end": 10,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 8,
            "end": 9,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 8,
              "end": 9,
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
      "type": "ClassDeclaration",
      "start": 55,
      "end": 69,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 66,
        "end": 69,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 61,
        "end": 62,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 62,
        "end": 65,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 63,
            "end": 64,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 63,
              "end": 64,
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
      "start": 71,
      "end": 103,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 100,
        "end": 103,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 80,
        "end": 87,
        "decorators": [],
        "name": "acceptA",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 91,
          "end": 98,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 92,
            "end": 98,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 94,
              "end": 98,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 95,
                "end": 98,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 96,
                    "end": 97,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 96,
                      "end": 97,
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
                "start": 94,
                "end": 95,
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
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 87,
        "end": 90,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 88,
            "end": 89,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 88,
              "end": 89,
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
      "start": 104,
      "end": 136,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 133,
        "end": 136,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 113,
        "end": 120,
        "decorators": [],
        "name": "acceptB",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 124,
          "end": 131,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 125,
            "end": 131,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 127,
              "end": 131,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 128,
                "end": 131,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 129,
                    "end": 130,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 129,
                      "end": 130,
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
                "start": 127,
                "end": 128,
                "decorators": [],
                "name": "B",
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
        "start": 120,
        "end": 123,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 121,
            "end": 122,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 121,
              "end": 122,
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
      "start": 138,
      "end": 385,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 171,
        "end": 385,
        "body": [
          {
            "type": "IfStatement",
            "start": 177,
            "end": 224,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 197,
              "end": 224,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 207,
                  "end": 218,
                  "directive": null,
                  "expression": {
                    "type": "CallExpression",
                    "start": 207,
                    "end": 217,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 215,
                        "end": 216,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "start": 207,
                      "end": 214,
                      "decorators": [],
                      "name": "acceptA",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "typeArguments": null
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 181,
              "end": 195,
              "operator": "instanceof",
              "left": {
                "type": "Identifier",
                "start": 181,
                "end": 182,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 194,
                "end": 195,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 230,
            "end": 277,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 250,
              "end": 277,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 260,
                  "end": 271,
                  "directive": null,
                  "expression": {
                    "type": "CallExpression",
                    "start": 260,
                    "end": 270,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 268,
                        "end": 269,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "start": 260,
                      "end": 267,
                      "decorators": [],
                      "name": "acceptA",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "typeArguments": null
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 234,
              "end": 248,
              "operator": "instanceof",
              "left": {
                "type": "Identifier",
                "start": 234,
                "end": 235,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 247,
                "end": 248,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 283,
            "end": 330,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 303,
              "end": 330,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 313,
                  "end": 324,
                  "directive": null,
                  "expression": {
                    "type": "CallExpression",
                    "start": 313,
                    "end": 323,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 321,
                        "end": 322,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "start": 313,
                      "end": 320,
                      "decorators": [],
                      "name": "acceptB",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "typeArguments": null
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 287,
              "end": 301,
              "operator": "instanceof",
              "left": {
                "type": "Identifier",
                "start": 287,
                "end": 288,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 300,
                "end": 301,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 336,
            "end": 383,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 356,
              "end": 383,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 366,
                  "end": 377,
                  "directive": null,
                  "expression": {
                    "type": "CallExpression",
                    "start": 366,
                    "end": 376,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 374,
                        "end": 375,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "start": 366,
                      "end": 373,
                      "decorators": [],
                      "name": "acceptB",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "typeArguments": null
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 340,
              "end": 354,
              "operator": "instanceof",
              "left": {
                "type": "Identifier",
                "start": 340,
                "end": 341,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 353,
                "end": 354,
                "decorators": [],
                "name": "B",
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
        "start": 147,
        "end": 151,
        "decorators": [],
        "name": "test",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 155,
          "end": 169,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 156,
            "end": 169,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 158,
              "end": 169,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 158,
                  "end": 162,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 159,
                    "end": 162,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 160,
                        "end": 161,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 160,
                          "end": 161,
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
                    "start": 158,
                    "end": 159,
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 165,
                  "end": 169,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 166,
                    "end": 169,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 167,
                        "end": 168,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 167,
                          "end": 168,
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
                    "start": 165,
                    "end": 166,
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 151,
        "end": 154,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 152,
            "end": 153,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 152,
              "end": 153,
              "decorators": [],
              "name": "T",
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
