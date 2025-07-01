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
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 19,
        "end": 20
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
              "start": 21,
              "end": 22
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 31,
              "end": 37
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 21,
            "end": 37
          }
        ],
        "start": 20,
        "end": 38
      },
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t",
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
                        "start": 54,
                        "end": 55
                      },
                      "typeArguments": null,
                      "start": 54,
                      "end": 55
                    },
                    "start": 52,
                    "end": 55
                  },
                  "start": 51,
                  "end": 55
                },
                "init": null,
                "definite": false,
                "start": 51,
                "end": 55
              }
            ],
            "declare": false,
            "start": 47,
            "end": 56
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
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 65,
                  "end": 66
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 80,
                        "end": 81
                      },
                      "value": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 84,
                        "end": 85
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": true,
                      "optional": false,
                      "start": 79,
                      "end": 85
                    }
                  ],
                  "start": 69,
                  "end": 91
                },
                "definite": false,
                "start": 65,
                "end": 91
              }
            ],
            "declare": false,
            "start": 61,
            "end": 91
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null,
                "start": 103,
                "end": 104
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null,
                "start": 107,
                "end": 108
              },
              "start": 103,
              "end": 108
            },
            "start": 96,
            "end": 109
          }
        ],
        "start": 41,
        "end": 111
      },
      "expression": false,
      "start": 10,
      "end": 111
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 133,
        "end": 134
      },
      "typeParameters": null,
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 137,
              "end": 138
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 140,
                "end": 146
              },
              "start": 138,
              "end": 146
            },
            "accessibility": null,
            "static": false,
            "start": 137,
            "end": 146
          }
        ],
        "start": 135,
        "end": 148
      },
      "declare": false,
      "start": 123,
      "end": 148
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IdMap",
        "optional": false,
        "typeAnnotation": null,
        "start": 154,
        "end": 159
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
              "start": 160,
              "end": 161
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 160,
            "end": 161
          }
        ],
        "start": 159,
        "end": 162
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 168,
          "end": 169
        },
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 179,
              "end": 180
            },
            "typeArguments": null,
            "start": 179,
            "end": 180
          },
          "start": 173,
          "end": 180
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "objectType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 183,
              "end": 184
            },
            "typeArguments": null,
            "start": 183,
            "end": 184
          },
          "indexType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 185,
              "end": 186
            },
            "typeArguments": null,
            "start": 185,
            "end": 186
          },
          "start": 183,
          "end": 187
        },
        "optional": false,
        "readonly": null,
        "start": 165,
        "end": 189
      },
      "declare": false,
      "start": 149,
      "end": 190
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g",
        "optional": false,
        "typeAnnotation": null,
        "start": 200,
        "end": 201
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
              "start": 202,
              "end": 203
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null,
                "start": 212,
                "end": 213
              },
              "typeArguments": null,
              "start": 212,
              "end": 213
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 202,
            "end": 213
          }
        ],
        "start": 201,
        "end": 214
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "IdMap",
                "optional": false,
                "typeAnnotation": null,
                "start": 218,
                "end": 223
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
                      "start": 224,
                      "end": 225
                    },
                    "typeArguments": null,
                    "start": 224,
                    "end": 225
                  }
                ],
                "start": 223,
                "end": 226
              },
              "start": 218,
              "end": 226
            },
            "start": 216,
            "end": 226
          },
          "start": 215,
          "end": 226
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
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 243,
                      "end": 249
                    },
                    "start": 241,
                    "end": 249
                  },
                  "start": 240,
                  "end": 249
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "i",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 252,
                    "end": 253
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 254,
                    "end": 255
                  },
                  "optional": false,
                  "computed": false,
                  "start": 252,
                  "end": 255
                },
                "definite": false,
                "start": 240,
                "end": 255
              }
            ],
            "declare": false,
            "start": 234,
            "end": 256
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "i",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 268,
                  "end": 269
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 270,
                  "end": 271
                },
                "optional": false,
                "computed": false,
                "start": 268,
                "end": 271
              },
              "operator": "*",
              "right": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 274,
                "end": 275
              },
              "start": 268,
              "end": 275
            },
            "start": 261,
            "end": 276
          }
        ],
        "start": 228,
        "end": 278
      },
      "expression": false,
      "start": 191,
      "end": 278
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "h",
        "optional": false,
        "typeAnnotation": null,
        "start": 299,
        "end": 300
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
              "start": 301,
              "end": 302
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Record",
                "optional": false,
                "typeAnnotation": null,
                "start": 311,
                "end": 317
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 318,
                      "end": 319
                    },
                    "typeArguments": null,
                    "start": 318,
                    "end": 319
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 321,
                    "end": 327
                  }
                ],
                "start": 317,
                "end": 328
              },
              "start": 311,
              "end": 328
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 301,
            "end": 328
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 330,
              "end": 331
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 340,
              "end": 346
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 330,
            "end": 346
          }
        ],
        "start": 300,
        "end": 347
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "array",
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
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 355,
                  "end": 356
                },
                "typeArguments": null,
                "start": 355,
                "end": 356
              },
              "start": 355,
              "end": 358
            },
            "start": 353,
            "end": 358
          },
          "start": 348,
          "end": 358
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "prop",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 366,
                "end": 367
              },
              "typeArguments": null,
              "start": 366,
              "end": 367
            },
            "start": 364,
            "end": 367
          },
          "start": 360,
          "end": 367
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 370,
          "end": 376
        },
        "start": 368,
        "end": 376
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
                  "name": "result",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 387,
                  "end": 393
                },
                "init": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 396,
                  "end": 397
                },
                "definite": false,
                "start": 387,
                "end": 397
              }
            ],
            "declare": false,
            "start": 383,
            "end": 398
          },
          {
            "type": "ForOfStatement",
            "await": false,
            "left": {
              "type": "VariableDeclaration",
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 414,
                    "end": 415
                  },
                  "init": null,
                  "definite": false,
                  "start": 414,
                  "end": 415
                }
              ],
              "declare": false,
              "start": 408,
              "end": 415
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "array",
              "optional": false,
              "typeAnnotation": null,
              "start": 419,
              "end": 424
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "+=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "result",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 436,
                      "end": 442
                    },
                    "right": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 446,
                        "end": 447
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "prop",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 448,
                        "end": 452
                      },
                      "optional": false,
                      "computed": true,
                      "start": 446,
                      "end": 453
                    },
                    "start": 436,
                    "end": 453
                  },
                  "directive": null,
                  "start": 436,
                  "end": 454
                }
              ],
              "start": 426,
              "end": 460
            },
            "start": 403,
            "end": 460
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "result",
              "optional": false,
              "typeAnnotation": null,
              "start": 472,
              "end": 478
            },
            "start": 465,
            "end": 479
          }
        ],
        "start": 377,
        "end": 481
      },
      "expression": false,
      "start": 290,
      "end": 481
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 10,
  "end": 481
}
```
