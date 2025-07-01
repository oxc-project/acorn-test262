__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fail",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 13
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "message",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 23,
              "end": 29
            },
            "start": 21,
            "end": 29
          },
          "start": 14,
          "end": 29
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNeverKeyword",
          "start": 33,
          "end": 38
        },
        "start": 31,
        "end": 38
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ThrowStatement",
            "argument": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "Error",
                "optional": false,
                "typeAnnotation": null,
                "start": 51,
                "end": 56
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "message",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 57,
                  "end": 64
                }
              ],
              "start": 47,
              "end": 65
            },
            "start": 41,
            "end": 66
          }
        ],
        "start": 39,
        "end": 68
      },
      "expression": false,
      "start": 0,
      "end": 68
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "withFew",
        "optional": false,
        "typeAnnotation": null,
        "start": 78,
        "end": 85
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 86,
              "end": 87
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 86,
            "end": 87
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "r",
              "optional": false,
              "typeAnnotation": null,
              "start": 89,
              "end": 90
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 89,
            "end": 90
          }
        ],
        "start": 85,
        "end": 91
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "values",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 100,
                  "end": 101
                },
                "typeArguments": null,
                "start": 100,
                "end": 101
              },
              "start": 100,
              "end": 103
            },
            "start": 98,
            "end": 103
          },
          "start": 92,
          "end": 103
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "haveFew",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "values",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 123,
                          "end": 124
                        },
                        "typeArguments": null,
                        "start": 123,
                        "end": 124
                      },
                      "start": 123,
                      "end": 126
                    },
                    "start": 121,
                    "end": 126
                  },
                  "start": 115,
                  "end": 126
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "r",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 131,
                    "end": 132
                  },
                  "typeArguments": null,
                  "start": 131,
                  "end": 132
                },
                "start": 128,
                "end": 132
              },
              "start": 114,
              "end": 132
            },
            "start": 112,
            "end": 132
          },
          "start": 105,
          "end": 132
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "haveNone",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "reason",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 153,
                      "end": 159
                    },
                    "start": 151,
                    "end": 159
                  },
                  "start": 145,
                  "end": 159
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "r",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 164,
                    "end": 165
                  },
                  "typeArguments": null,
                  "start": 164,
                  "end": 165
                },
                "start": 161,
                "end": 165
              },
              "start": 144,
              "end": 165
            },
            "start": 142,
            "end": 165
          },
          "start": 134,
          "end": 165
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "r",
            "optional": false,
            "typeAnnotation": null,
            "start": 168,
            "end": 169
          },
          "typeArguments": null,
          "start": 168,
          "end": 169
        },
        "start": 166,
        "end": 169
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ConditionalExpression",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "values",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 183,
                    "end": 189
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "length",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 190,
                    "end": 196
                  },
                  "optional": false,
                  "computed": false,
                  "start": 183,
                  "end": 196
                },
                "operator": ">",
                "right": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 199,
                  "end": 200
                },
                "start": 183,
                "end": 200
              },
              "consequent": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "haveFew",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 203,
                  "end": 210
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "values",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 211,
                    "end": 217
                  }
                ],
                "optional": false,
                "start": 203,
                "end": 218
              },
              "alternate": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "haveNone",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 221,
                  "end": 229
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "value": "No values.",
                    "raw": "'No values.'",
                    "start": 230,
                    "end": 242
                  }
                ],
                "optional": false,
                "start": 221,
                "end": 243
              },
              "start": 183,
              "end": 243
            },
            "start": 176,
            "end": 244
          }
        ],
        "start": 170,
        "end": 246
      },
      "expression": false,
      "start": 69,
      "end": 246
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "id",
        "optional": false,
        "typeAnnotation": null,
        "start": 256,
        "end": 258
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 259,
              "end": 260
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 259,
            "end": 260
          }
        ],
        "start": 258,
        "end": 261
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 269,
                "end": 270
              },
              "typeArguments": null,
              "start": 269,
              "end": 270
            },
            "start": 267,
            "end": 270
          },
          "start": 262,
          "end": 270
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 274,
            "end": 275
          },
          "typeArguments": null,
          "start": 274,
          "end": 275
        },
        "start": 272,
        "end": 275
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 285,
              "end": 290
            },
            "start": 278,
            "end": 291
          }
        ],
        "start": 276,
        "end": 293
      },
      "expression": false,
      "start": 247,
      "end": 293
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
            "name": "result",
            "optional": false,
            "typeAnnotation": null,
            "start": 300,
            "end": 306
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "withFew",
              "optional": false,
              "typeAnnotation": null,
              "start": 309,
              "end": 316
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 318,
                    "end": 319
                  },
                  {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 321,
                    "end": 322
                  },
                  {
                    "type": "Literal",
                    "value": 3,
                    "raw": "3",
                    "start": 324,
                    "end": 325
                  }
                ],
                "start": 317,
                "end": 326
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "id",
                "optional": false,
                "typeAnnotation": null,
                "start": 328,
                "end": 330
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "fail",
                "optional": false,
                "typeAnnotation": null,
                "start": 332,
                "end": 336
              }
            ],
            "optional": false,
            "start": 309,
            "end": 337
          },
          "definite": false,
          "start": 300,
          "end": 337
        }
      ],
      "declare": false,
      "start": 294,
      "end": 338
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 369
}
```
