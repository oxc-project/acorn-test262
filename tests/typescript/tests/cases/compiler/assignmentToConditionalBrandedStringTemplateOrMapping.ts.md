__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
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
                        "start": 9,
                        "end": 10
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 9,
                      "end": 10
                    }
                  ],
                  "start": 8,
                  "end": 11
                },
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
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
                        "start": 17,
                        "end": 18
                      },
                      "typeArguments": null,
                      "start": 17,
                      "end": 18
                    },
                    "extendsType": {
                      "type": "TSTemplateLiteralType",
                      "quasis": [
                        {
                          "type": "TemplateElement",
                          "value": {
                            "raw": "",
                            "cooked": ""
                          },
                          "tail": false,
                          "start": 27,
                          "end": 30
                        },
                        {
                          "type": "TemplateElement",
                          "value": {
                            "raw": "",
                            "cooked": ""
                          },
                          "tail": true,
                          "start": 44,
                          "end": 46
                        }
                      ],
                      "types": [
                        {
                          "type": "TSIntersectionType",
                          "types": [
                            {
                              "type": "TSLiteralType",
                              "literal": {
                                "type": "Literal",
                                "value": "a",
                                "raw": "'a'",
                                "start": 30,
                                "end": 33
                              },
                              "start": 30,
                              "end": 33
                            },
                            {
                              "type": "TSTypeLiteral",
                              "members": [
                                {
                                  "type": "TSPropertySignature",
                                  "computed": false,
                                  "optional": false,
                                  "readonly": false,
                                  "key": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "a",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 38,
                                    "end": 39
                                  },
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSLiteralType",
                                      "literal": {
                                        "type": "Literal",
                                        "value": 1,
                                        "raw": "1",
                                        "start": 41,
                                        "end": 42
                                      },
                                      "start": 41,
                                      "end": 42
                                    },
                                    "start": 39,
                                    "end": 42
                                  },
                                  "accessibility": null,
                                  "static": false,
                                  "start": 38,
                                  "end": 42
                                }
                              ],
                              "start": 36,
                              "end": 44
                            }
                          ],
                          "start": 30,
                          "end": 44
                        }
                      ],
                      "start": 27,
                      "end": 46
                    },
                    "trueType": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 49,
                        "end": 50
                      },
                      "start": 49,
                      "end": 50
                    },
                    "falseType": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 53,
                        "end": 54
                      },
                      "start": 53,
                      "end": 54
                    },
                    "start": 17,
                    "end": 54
                  },
                  "start": 14,
                  "end": 54
                },
                "start": 8,
                "end": 54
              },
              "start": 5,
              "end": 55
            },
            "start": 4,
            "end": 55
          },
          "init": {
            "type": "TSNonNullExpression",
            "expression": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 58,
              "end": 62
            },
            "start": 58,
            "end": 63
          },
          "definite": false,
          "start": 4,
          "end": 63
        }
      ],
      "declare": false,
      "start": 0,
      "end": 64
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
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
                "type": "TSFunctionType",
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
                        "start": 74,
                        "end": 75
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 74,
                      "end": 75
                    }
                  ],
                  "start": 73,
                  "end": 76
                },
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
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
                        "start": 82,
                        "end": 83
                      },
                      "typeArguments": null,
                      "start": 82,
                      "end": 83
                    },
                    "extendsType": {
                      "type": "TSTemplateLiteralType",
                      "quasis": [
                        {
                          "type": "TemplateElement",
                          "value": {
                            "raw": "",
                            "cooked": ""
                          },
                          "tail": false,
                          "start": 92,
                          "end": 95
                        },
                        {
                          "type": "TemplateElement",
                          "value": {
                            "raw": "",
                            "cooked": ""
                          },
                          "tail": true,
                          "start": 109,
                          "end": 111
                        }
                      ],
                      "types": [
                        {
                          "type": "TSIntersectionType",
                          "types": [
                            {
                              "type": "TSLiteralType",
                              "literal": {
                                "type": "Literal",
                                "value": "a",
                                "raw": "'a'",
                                "start": 95,
                                "end": 98
                              },
                              "start": 95,
                              "end": 98
                            },
                            {
                              "type": "TSTypeLiteral",
                              "members": [
                                {
                                  "type": "TSPropertySignature",
                                  "computed": false,
                                  "optional": false,
                                  "readonly": false,
                                  "key": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "a",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 103,
                                    "end": 104
                                  },
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSLiteralType",
                                      "literal": {
                                        "type": "Literal",
                                        "value": 1,
                                        "raw": "1",
                                        "start": 106,
                                        "end": 107
                                      },
                                      "start": 106,
                                      "end": 107
                                    },
                                    "start": 104,
                                    "end": 107
                                  },
                                  "accessibility": null,
                                  "static": false,
                                  "start": 103,
                                  "end": 107
                                }
                              ],
                              "start": 101,
                              "end": 109
                            }
                          ],
                          "start": 95,
                          "end": 109
                        }
                      ],
                      "start": 92,
                      "end": 111
                    },
                    "trueType": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 114,
                        "end": 115
                      },
                      "start": 114,
                      "end": 115
                    },
                    "falseType": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 118,
                        "end": 119
                      },
                      "start": 118,
                      "end": 119
                    },
                    "start": 82,
                    "end": 119
                  },
                  "start": 79,
                  "end": 119
                },
                "start": 73,
                "end": 119
              },
              "start": 70,
              "end": 120
            },
            "start": 69,
            "end": 120
          },
          "init": {
            "type": "TSNonNullExpression",
            "expression": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 123,
              "end": 127
            },
            "start": 123,
            "end": 128
          },
          "definite": false,
          "start": 69,
          "end": 128
        }
      ],
      "declare": false,
      "start": 65,
      "end": 129
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
          "start": 131,
          "end": 132
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 135,
          "end": 136
        },
        "start": 131,
        "end": 136
      },
      "directive": null,
      "start": 131,
      "end": 137
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
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
                "type": "TSFunctionType",
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
                        "start": 148,
                        "end": 149
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 148,
                      "end": 149
                    }
                  ],
                  "start": 147,
                  "end": 150
                },
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
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
                        "start": 156,
                        "end": 157
                      },
                      "typeArguments": null,
                      "start": 156,
                      "end": 157
                    },
                    "extendsType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Uppercase",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 166,
                        "end": 175
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSIntersectionType",
                            "types": [
                              {
                                "type": "TSLiteralType",
                                "literal": {
                                  "type": "Literal",
                                  "value": "a",
                                  "raw": "'a'",
                                  "start": 176,
                                  "end": 179
                                },
                                "start": 176,
                                "end": 179
                              },
                              {
                                "type": "TSTypeLiteral",
                                "members": [
                                  {
                                    "type": "TSPropertySignature",
                                    "computed": false,
                                    "optional": false,
                                    "readonly": false,
                                    "key": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "a",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 184,
                                      "end": 185
                                    },
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSLiteralType",
                                        "literal": {
                                          "type": "Literal",
                                          "value": 1,
                                          "raw": "1",
                                          "start": 187,
                                          "end": 188
                                        },
                                        "start": 187,
                                        "end": 188
                                      },
                                      "start": 185,
                                      "end": 188
                                    },
                                    "accessibility": null,
                                    "static": false,
                                    "start": 184,
                                    "end": 188
                                  }
                                ],
                                "start": 182,
                                "end": 190
                              }
                            ],
                            "start": 176,
                            "end": 190
                          }
                        ],
                        "start": 175,
                        "end": 191
                      },
                      "start": 166,
                      "end": 191
                    },
                    "trueType": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 194,
                        "end": 195
                      },
                      "start": 194,
                      "end": 195
                    },
                    "falseType": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 198,
                        "end": 199
                      },
                      "start": 198,
                      "end": 199
                    },
                    "start": 156,
                    "end": 199
                  },
                  "start": 153,
                  "end": 199
                },
                "start": 147,
                "end": 199
              },
              "start": 144,
              "end": 200
            },
            "start": 143,
            "end": 200
          },
          "init": {
            "type": "TSNonNullExpression",
            "expression": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 203,
              "end": 207
            },
            "start": 203,
            "end": 208
          },
          "definite": false,
          "start": 143,
          "end": 208
        }
      ],
      "declare": false,
      "start": 139,
      "end": 209
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
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
                "type": "TSFunctionType",
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
                        "start": 219,
                        "end": 220
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 219,
                      "end": 220
                    }
                  ],
                  "start": 218,
                  "end": 221
                },
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
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
                        "start": 227,
                        "end": 228
                      },
                      "typeArguments": null,
                      "start": 227,
                      "end": 228
                    },
                    "extendsType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Uppercase",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 237,
                        "end": 246
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSIntersectionType",
                            "types": [
                              {
                                "type": "TSLiteralType",
                                "literal": {
                                  "type": "Literal",
                                  "value": "a",
                                  "raw": "'a'",
                                  "start": 247,
                                  "end": 250
                                },
                                "start": 247,
                                "end": 250
                              },
                              {
                                "type": "TSTypeLiteral",
                                "members": [
                                  {
                                    "type": "TSPropertySignature",
                                    "computed": false,
                                    "optional": false,
                                    "readonly": false,
                                    "key": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "a",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 255,
                                      "end": 256
                                    },
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSLiteralType",
                                        "literal": {
                                          "type": "Literal",
                                          "value": 1,
                                          "raw": "1",
                                          "start": 258,
                                          "end": 259
                                        },
                                        "start": 258,
                                        "end": 259
                                      },
                                      "start": 256,
                                      "end": 259
                                    },
                                    "accessibility": null,
                                    "static": false,
                                    "start": 255,
                                    "end": 259
                                  }
                                ],
                                "start": 253,
                                "end": 261
                              }
                            ],
                            "start": 247,
                            "end": 261
                          }
                        ],
                        "start": 246,
                        "end": 262
                      },
                      "start": 237,
                      "end": 262
                    },
                    "trueType": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 265,
                        "end": 266
                      },
                      "start": 265,
                      "end": 266
                    },
                    "falseType": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 269,
                        "end": 270
                      },
                      "start": 269,
                      "end": 270
                    },
                    "start": 227,
                    "end": 270
                  },
                  "start": 224,
                  "end": 270
                },
                "start": 218,
                "end": 270
              },
              "start": 215,
              "end": 271
            },
            "start": 214,
            "end": 271
          },
          "init": {
            "type": "TSNonNullExpression",
            "expression": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 274,
              "end": 278
            },
            "start": 274,
            "end": 279
          },
          "definite": false,
          "start": 214,
          "end": 279
        }
      ],
      "declare": false,
      "start": 210,
      "end": 280
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 282,
          "end": 283
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": null,
          "start": 286,
          "end": 287
        },
        "start": 282,
        "end": 287
      },
      "directive": null,
      "start": 282,
      "end": 288
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 288
}
```
