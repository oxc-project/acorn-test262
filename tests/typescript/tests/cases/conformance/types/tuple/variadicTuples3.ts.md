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
        "name": "test1",
        "optional": false,
        "typeAnnotation": null,
        "start": 66,
        "end": 71
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
              "start": 72,
              "end": 73
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 82,
                "end": 85
              },
              "start": 82,
              "end": 87
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 72,
            "end": 87
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 89,
              "end": 90
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 99,
                "end": 102
              },
              "start": 99,
              "end": 104
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 89,
            "end": 104
          }
        ],
        "start": 71,
        "end": 105
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSRestType",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 113,
                  "end": 114
                },
                "typeArguments": null,
                "start": 113,
                "end": 114
              },
              "start": 110,
              "end": 114
            },
            {
              "type": "TSRestType",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 119,
                  "end": 120
                },
                "typeArguments": null,
                "start": 119,
                "end": 120
              },
              "start": 116,
              "end": 120
            }
          ],
          "start": 109,
          "end": 121
        },
        "start": 107,
        "end": 121
      },
      "body": {
        "type": "BlockStatement",
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 133,
                        "end": 136
                      },
                      "start": 133,
                      "end": 138
                    },
                    "start": 131,
                    "end": 138
                  },
                  "start": 130,
                  "end": 138
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [],
                  "start": 141,
                  "end": 143
                },
                "definite": false,
                "start": 130,
                "end": 143
              }
            ],
            "declare": false,
            "start": 126,
            "end": 144
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 154,
              "end": 155
            },
            "start": 147,
            "end": 156
          }
        ],
        "start": 122,
        "end": 158
      },
      "expression": false,
      "start": 57,
      "end": 158
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test2",
        "optional": false,
        "typeAnnotation": null,
        "start": 169,
        "end": 174
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
              "start": 175,
              "end": 176
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 185,
                "end": 188
              },
              "start": 185,
              "end": 190
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 175,
            "end": 190
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 192,
              "end": 193
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 202,
                "end": 205
              },
              "start": 202,
              "end": 207
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 192,
            "end": 207
          }
        ],
        "start": 174,
        "end": 208
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSRestType",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 216,
                  "end": 217
                },
                "typeArguments": null,
                "start": 216,
                "end": 217
              },
              "start": 213,
              "end": 217
            },
            {
              "type": "TSRestType",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 222,
                  "end": 223
                },
                "typeArguments": null,
                "start": 222,
                "end": 223
              },
              "start": 219,
              "end": 223
            }
          ],
          "start": 212,
          "end": 224
        },
        "start": 210,
        "end": 224
      },
      "body": {
        "type": "BlockStatement",
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTupleType",
                      "elementTypes": [
                        {
                          "type": "TSAnyKeyword",
                          "start": 237,
                          "end": 240
                        },
                        {
                          "type": "TSAnyKeyword",
                          "start": 242,
                          "end": 245
                        }
                      ],
                      "start": 236,
                      "end": 246
                    },
                    "start": 234,
                    "end": 246
                  },
                  "start": 233,
                  "end": 246
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 250,
                      "end": 254
                    },
                    {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 256,
                      "end": 260
                    }
                  ],
                  "start": 249,
                  "end": 261
                },
                "definite": false,
                "start": 233,
                "end": 261
              }
            ],
            "declare": false,
            "start": 229,
            "end": 262
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 272,
              "end": 273
            },
            "start": 265,
            "end": 274
          }
        ],
        "start": 225,
        "end": 276
      },
      "expression": false,
      "start": 160,
      "end": 276
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test3",
        "optional": false,
        "typeAnnotation": null,
        "start": 287,
        "end": 292
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
              "start": 293,
              "end": 294
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 303,
                "end": 306
              },
              "start": 303,
              "end": 308
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 293,
            "end": 308
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 310,
              "end": 311
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 320,
                "end": 323
              },
              "start": 320,
              "end": 325
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 310,
            "end": 325
          }
        ],
        "start": 292,
        "end": 326
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSRestType",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 334,
                  "end": 335
                },
                "typeArguments": null,
                "start": 334,
                "end": 335
              },
              "start": 331,
              "end": 335
            },
            {
              "type": "TSRestType",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 340,
                  "end": 341
                },
                "typeArguments": null,
                "start": 340,
                "end": 341
              },
              "start": 337,
              "end": 341
            }
          ],
          "start": 330,
          "end": 342
        },
        "start": 328,
        "end": 342
      },
      "body": {
        "type": "BlockStatement",
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTupleType",
                      "elementTypes": [
                        {
                          "type": "TSAnyKeyword",
                          "start": 355,
                          "end": 358
                        },
                        {
                          "type": "TSAnyKeyword",
                          "start": 360,
                          "end": 363
                        },
                        {
                          "type": "TSAnyKeyword",
                          "start": 365,
                          "end": 368
                        }
                      ],
                      "start": 354,
                      "end": 369
                    },
                    "start": 352,
                    "end": 369
                  },
                  "start": 351,
                  "end": 369
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 373,
                      "end": 377
                    },
                    {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 379,
                      "end": 383
                    },
                    {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 385,
                      "end": 389
                    }
                  ],
                  "start": 372,
                  "end": 390
                },
                "definite": false,
                "start": 351,
                "end": 390
              }
            ],
            "declare": false,
            "start": 347,
            "end": 391
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 401,
              "end": 402
            },
            "start": 394,
            "end": 403
          }
        ],
        "start": 343,
        "end": 405
      },
      "expression": false,
      "start": 278,
      "end": 405
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 57,
  "end": 405
}
```
