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
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 53,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 17,
            "end": 51,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 17,
              "end": 28,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 28,
              "end": 51,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
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
                    "name": "a",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 38,
                      "end": 46,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 40,
                        "end": 46
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  "readonly": false,
                  "static": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 48,
                "end": 51,
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
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 7,
        "end": 10,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 8,
            "end": 9,
            "name": {
              "type": "Identifier",
              "start": 8,
              "end": 9,
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
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 55,
      "end": 69,
      "id": {
        "type": "Identifier",
        "start": 61,
        "end": 62,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 66,
        "end": 69,
        "body": []
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 62,
        "end": 65,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 63,
            "end": 64,
            "name": {
              "type": "Identifier",
              "start": 63,
              "end": 64,
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
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 71,
      "end": 103,
      "id": {
        "type": "Identifier",
        "start": 80,
        "end": 87,
        "name": "acceptA",
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
          "start": 91,
          "end": 98,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 92,
            "end": 98,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 94,
              "end": 98,
              "typeName": {
                "type": "Identifier",
                "start": 94,
                "end": 95,
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 95,
                "end": 98,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 96,
                    "end": 97,
                    "typeName": {
                      "type": "Identifier",
                      "start": 96,
                      "end": 97,
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
        "start": 100,
        "end": 103,
        "body": []
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 87,
        "end": 90,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 88,
            "end": 89,
            "name": {
              "type": "Identifier",
              "start": 88,
              "end": 89,
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
      "start": 104,
      "end": 136,
      "id": {
        "type": "Identifier",
        "start": 113,
        "end": 120,
        "name": "acceptB",
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
          "start": 124,
          "end": 131,
          "name": "b",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 125,
            "end": 131,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 127,
              "end": 131,
              "typeName": {
                "type": "Identifier",
                "start": 127,
                "end": 128,
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 128,
                "end": 131,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 129,
                    "end": 130,
                    "typeName": {
                      "type": "Identifier",
                      "start": 129,
                      "end": 130,
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
        "start": 133,
        "end": 136,
        "body": []
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 120,
        "end": 123,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 121,
            "end": 122,
            "name": {
              "type": "Identifier",
              "start": 121,
              "end": 122,
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
      "start": 138,
      "end": 385,
      "id": {
        "type": "Identifier",
        "start": 147,
        "end": 151,
        "name": "test",
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
          "start": 155,
          "end": 169,
          "name": "x",
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
                  "typeName": {
                    "type": "Identifier",
                    "start": 158,
                    "end": 159,
                    "name": "A",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 159,
                    "end": 162,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 160,
                        "end": 161,
                        "typeName": {
                          "type": "Identifier",
                          "start": 160,
                          "end": 161,
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 165,
                  "end": 169,
                  "typeName": {
                    "type": "Identifier",
                    "start": 165,
                    "end": 166,
                    "name": "B",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 166,
                    "end": 169,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 167,
                        "end": 168,
                        "typeName": {
                          "type": "Identifier",
                          "start": 167,
                          "end": 168,
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
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 171,
        "end": 385,
        "body": [
          {
            "type": "IfStatement",
            "start": 177,
            "end": 224,
            "test": {
              "type": "BinaryExpression",
              "start": 181,
              "end": 195,
              "left": {
                "type": "Identifier",
                "start": 181,
                "end": 182,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "instanceof",
              "right": {
                "type": "Identifier",
                "start": 194,
                "end": 195,
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 197,
              "end": 224,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 207,
                  "end": 218,
                  "expression": {
                    "type": "CallExpression",
                    "start": 207,
                    "end": 217,
                    "callee": {
                      "type": "Identifier",
                      "start": 207,
                      "end": 214,
                      "name": "acceptA",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 215,
                        "end": 216,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "optional": false,
                    "typeArguments": null
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 230,
            "end": 277,
            "test": {
              "type": "BinaryExpression",
              "start": 234,
              "end": 248,
              "left": {
                "type": "Identifier",
                "start": 234,
                "end": 235,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "instanceof",
              "right": {
                "type": "Identifier",
                "start": 247,
                "end": 248,
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 250,
              "end": 277,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 260,
                  "end": 271,
                  "expression": {
                    "type": "CallExpression",
                    "start": 260,
                    "end": 270,
                    "callee": {
                      "type": "Identifier",
                      "start": 260,
                      "end": 267,
                      "name": "acceptA",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 268,
                        "end": 269,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "optional": false,
                    "typeArguments": null
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 283,
            "end": 330,
            "test": {
              "type": "BinaryExpression",
              "start": 287,
              "end": 301,
              "left": {
                "type": "Identifier",
                "start": 287,
                "end": 288,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "instanceof",
              "right": {
                "type": "Identifier",
                "start": 300,
                "end": 301,
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 303,
              "end": 330,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 313,
                  "end": 324,
                  "expression": {
                    "type": "CallExpression",
                    "start": 313,
                    "end": 323,
                    "callee": {
                      "type": "Identifier",
                      "start": 313,
                      "end": 320,
                      "name": "acceptB",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 321,
                        "end": 322,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "optional": false,
                    "typeArguments": null
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 336,
            "end": 383,
            "test": {
              "type": "BinaryExpression",
              "start": 340,
              "end": 354,
              "left": {
                "type": "Identifier",
                "start": 340,
                "end": 341,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "instanceof",
              "right": {
                "type": "Identifier",
                "start": 353,
                "end": 354,
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 356,
              "end": 383,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 366,
                  "end": 377,
                  "expression": {
                    "type": "CallExpression",
                    "start": 366,
                    "end": 376,
                    "callee": {
                      "type": "Identifier",
                      "start": 366,
                      "end": 373,
                      "name": "acceptB",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 374,
                        "end": 375,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "optional": false,
                    "typeArguments": null
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 151,
        "end": 154,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 152,
            "end": 153,
            "name": {
              "type": "Identifier",
              "start": 152,
              "end": 153,
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
