__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "List",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 14
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 15,
              "end": 16
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 15,
            "end": 16
          }
        ],
        "start": 14,
        "end": 17
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "data",
              "optional": false,
              "typeAnnotation": null,
              "start": 24,
              "end": 28
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 30,
                  "end": 31
                },
                "typeArguments": null,
                "start": 30,
                "end": 31
              },
              "start": 28,
              "end": 31
            },
            "accessibility": null,
            "static": false,
            "start": 24,
            "end": 32
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "next",
              "optional": false,
              "typeAnnotation": null,
              "start": 37,
              "end": 41
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "List",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 43,
                  "end": 47
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 48,
                        "end": 49
                      },
                      "typeArguments": null,
                      "start": 48,
                      "end": 49
                    }
                  ],
                  "start": 47,
                  "end": 50
                },
                "start": 43,
                "end": 50
              },
              "start": 41,
              "end": 50
            },
            "accessibility": null,
            "static": false,
            "start": 37,
            "end": 51
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "owner",
              "optional": false,
              "typeAnnotation": null,
              "start": 56,
              "end": 61
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "List",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 63,
                  "end": 67
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "List",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 68,
                        "end": 72
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 73,
                              "end": 74
                            },
                            "typeArguments": null,
                            "start": 73,
                            "end": 74
                          }
                        ],
                        "start": 72,
                        "end": 75
                      },
                      "start": 68,
                      "end": 75
                    }
                  ],
                  "start": 67,
                  "end": 76
                },
                "start": 63,
                "end": 76
              },
              "start": 61,
              "end": 76
            },
            "accessibility": null,
            "static": false,
            "start": 56,
            "end": 77
          }
        ],
        "start": 18,
        "end": 79
      },
      "declare": false,
      "start": 0,
      "end": 79
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyList",
        "optional": false,
        "typeAnnotation": null,
        "start": 92,
        "end": 98
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 99,
              "end": 100
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 99,
            "end": 100
          }
        ],
        "start": 98,
        "end": 101
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "data",
              "optional": false,
              "typeAnnotation": null,
              "start": 108,
              "end": 112
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 114,
                  "end": 115
                },
                "typeArguments": null,
                "start": 114,
                "end": 115
              },
              "start": 112,
              "end": 115
            },
            "accessibility": null,
            "static": false,
            "start": 108,
            "end": 116
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "next",
              "optional": false,
              "typeAnnotation": null,
              "start": 121,
              "end": 125
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MyList",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 127,
                  "end": 133
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 134,
                        "end": 135
                      },
                      "typeArguments": null,
                      "start": 134,
                      "end": 135
                    }
                  ],
                  "start": 133,
                  "end": 136
                },
                "start": 127,
                "end": 136
              },
              "start": 125,
              "end": 136
            },
            "accessibility": null,
            "static": false,
            "start": 121,
            "end": 137
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "owner",
              "optional": false,
              "typeAnnotation": null,
              "start": 142,
              "end": 147
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MyList",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 149,
                  "end": 155
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "MyList",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 156,
                        "end": 162
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 163,
                              "end": 164
                            },
                            "typeArguments": null,
                            "start": 163,
                            "end": 164
                          }
                        ],
                        "start": 162,
                        "end": 165
                      },
                      "start": 156,
                      "end": 165
                    }
                  ],
                  "start": 155,
                  "end": 166
                },
                "start": 149,
                "end": 166
              },
              "start": 147,
              "end": 166
            },
            "accessibility": null,
            "static": false,
            "start": 142,
            "end": 167
          }
        ],
        "start": 102,
        "end": 169
      },
      "declare": false,
      "start": 82,
      "end": 169
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "l",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "List",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 178,
                  "end": 182
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 183,
                      "end": 189
                    }
                  ],
                  "start": 182,
                  "end": 190
                },
                "start": 178,
                "end": 190
              },
              "start": 176,
              "end": 190
            },
            "start": 175,
            "end": 190
          },
          "init": null,
          "definite": false,
          "start": 175,
          "end": 190
        }
      ],
      "declare": false,
      "start": 171,
      "end": 191
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MyList",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 199,
                  "end": 205
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 206,
                      "end": 212
                    }
                  ],
                  "start": 205,
                  "end": 213
                },
                "start": 199,
                "end": 213
              },
              "start": 197,
              "end": 213
            },
            "start": 196,
            "end": 213
          },
          "init": null,
          "definite": false,
          "start": 196,
          "end": 213
        }
      ],
      "declare": false,
      "start": 192,
      "end": 214
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "l",
          "optional": false,
          "typeAnnotation": null,
          "start": 216,
          "end": 217
        },
        "operator": "==",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "m",
          "optional": false,
          "typeAnnotation": null,
          "start": 221,
          "end": 222
        },
        "start": 216,
        "end": 222
      },
      "directive": null,
      "start": 216,
      "end": 223
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "l2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "List",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 249,
                  "end": 253
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 254,
                      "end": 260
                    }
                  ],
                  "start": 253,
                  "end": 261
                },
                "start": 249,
                "end": 261
              },
              "start": 247,
              "end": 261
            },
            "start": 245,
            "end": 261
          },
          "init": null,
          "definite": false,
          "start": 245,
          "end": 261
        }
      ],
      "declare": false,
      "start": 241,
      "end": 262
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "l",
          "optional": false,
          "typeAnnotation": null,
          "start": 264,
          "end": 265
        },
        "operator": "==",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "l2",
          "optional": false,
          "typeAnnotation": null,
          "start": 269,
          "end": 271
        },
        "start": 264,
        "end": 271
      },
      "directive": null,
      "start": 264,
      "end": 272
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "l",
          "optional": false,
          "typeAnnotation": null,
          "start": 291,
          "end": 292
        },
        "operator": "==",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "l",
          "optional": false,
          "typeAnnotation": null,
          "start": 296,
          "end": 297
        },
        "start": 291,
        "end": 297
      },
      "directive": null,
      "start": 291,
      "end": 298
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 318
}
```
