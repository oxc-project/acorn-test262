__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyExtract",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
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
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 18,
              "end": 19
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 18,
            "end": 19
          }
        ],
        "start": 14,
        "end": 20
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 23,
            "end": 24
          },
          "typeArguments": null,
          "start": 23,
          "end": 24
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "U",
            "optional": false,
            "typeAnnotation": null,
            "start": 33,
            "end": 34
          },
          "typeArguments": null,
          "start": 33,
          "end": 34
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 37,
            "end": 38
          },
          "typeArguments": null,
          "start": 37,
          "end": 38
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 41,
          "end": 46
        },
        "start": 23,
        "end": 46
      },
      "declare": false,
      "start": 0,
      "end": 46
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 57,
        "end": 60
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "start": 61,
              "end": 62
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 61,
            "end": 62
          }
        ],
        "start": 60,
        "end": 63
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
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
                "start": 67,
                "end": 68
              },
              "typeArguments": null,
              "start": 67,
              "end": 68
            },
            "start": 65,
            "end": 68
          },
          "start": 64,
          "end": 68
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Extract",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 83,
                        "end": 90
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSArrayType",
                            "elementType": {
                              "type": "TSAnyKeyword",
                              "start": 91,
                              "end": 94
                            },
                            "start": 91,
                            "end": 96
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 98,
                              "end": 99
                            },
                            "typeArguments": null,
                            "start": 98,
                            "end": 99
                          }
                        ],
                        "start": 90,
                        "end": 100
                      },
                      "start": 83,
                      "end": 100
                    },
                    "start": 81,
                    "end": 100
                  },
                  "start": 80,
                  "end": 100
                },
                "init": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 103,
                    "end": 104
                  },
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 108,
                    "end": 111
                  },
                  "start": 103,
                  "end": 111
                },
                "definite": false,
                "start": 80,
                "end": 111
              }
            ],
            "declare": false,
            "start": 74,
            "end": 112
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 115,
                "end": 116
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 119,
                "end": 120
              },
              "start": 115,
              "end": 120
            },
            "directive": null,
            "start": 115,
            "end": 121
          },
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConditionalType",
                      "checkType": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSAnyKeyword",
                          "start": 141,
                          "end": 144
                        },
                        "start": 141,
                        "end": 146
                      },
                      "extendsType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 155,
                          "end": 156
                        },
                        "typeArguments": null,
                        "start": 155,
                        "end": 156
                      },
                      "trueType": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSAnyKeyword",
                          "start": 159,
                          "end": 162
                        },
                        "start": 159,
                        "end": 164
                      },
                      "falseType": {
                        "type": "TSNeverKeyword",
                        "start": 167,
                        "end": 172
                      },
                      "start": 141,
                      "end": 172
                    },
                    "start": 138,
                    "end": 173
                  },
                  "start": 137,
                  "end": 173
                },
                "init": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 176,
                    "end": 177
                  },
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 181,
                    "end": 184
                  },
                  "start": 176,
                  "end": 184
                },
                "definite": false,
                "start": 137,
                "end": 184
              }
            ],
            "declare": false,
            "start": 131,
            "end": 185
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 188,
                "end": 189
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 192,
                "end": 193
              },
              "start": 188,
              "end": 193
            },
            "directive": null,
            "start": 188,
            "end": 194
          },
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "d",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "MyExtract",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 207,
                        "end": 216
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSArrayType",
                            "elementType": {
                              "type": "TSAnyKeyword",
                              "start": 217,
                              "end": 220
                            },
                            "start": 217,
                            "end": 222
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 224,
                              "end": 225
                            },
                            "typeArguments": null,
                            "start": 224,
                            "end": 225
                          }
                        ],
                        "start": 216,
                        "end": 226
                      },
                      "start": 207,
                      "end": 226
                    },
                    "start": 205,
                    "end": 226
                  },
                  "start": 204,
                  "end": 226
                },
                "init": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 229,
                    "end": 230
                  },
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 234,
                    "end": 237
                  },
                  "start": 229,
                  "end": 237
                },
                "definite": false,
                "start": 204,
                "end": 237
              }
            ],
            "declare": false,
            "start": 198,
            "end": 238
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 241,
                "end": 242
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 245,
                "end": 246
              },
              "start": 241,
              "end": 246
            },
            "directive": null,
            "start": 241,
            "end": 247
          },
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "CustomType",
              "optional": false,
              "typeAnnotation": null,
              "start": 262,
              "end": 272
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSConditionalType",
              "checkType": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSAnyKeyword",
                  "start": 275,
                  "end": 278
                },
                "start": 275,
                "end": 280
              },
              "extendsType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 289,
                  "end": 290
                },
                "typeArguments": null,
                "start": 289,
                "end": 290
              },
              "trueType": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSAnyKeyword",
                  "start": 293,
                  "end": 296
                },
                "start": 293,
                "end": 298
              },
              "falseType": {
                "type": "TSNeverKeyword",
                "start": 301,
                "end": 306
              },
              "start": 275,
              "end": 306
            },
            "declare": false,
            "start": 257,
            "end": 307
          },
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "e",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "CustomType",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 319,
                        "end": 329
                      },
                      "typeArguments": null,
                      "start": 319,
                      "end": 329
                    },
                    "start": 317,
                    "end": 329
                  },
                  "start": 316,
                  "end": 329
                },
                "init": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 332,
                    "end": 333
                  },
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 337,
                    "end": 340
                  },
                  "start": 332,
                  "end": 340
                },
                "definite": false,
                "start": 316,
                "end": 340
              }
            ],
            "declare": false,
            "start": 310,
            "end": 341
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 344,
                "end": 345
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 348,
                "end": 349
              },
              "start": 344,
              "end": 349
            },
            "directive": null,
            "start": 344,
            "end": 350
          }
        ],
        "start": 70,
        "end": 352
      },
      "expression": false,
      "start": 48,
      "end": 352
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 352
}
```
