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
        "name": "Func",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 9
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
              "start": 10,
              "end": 11
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 10,
            "end": 11
          }
        ],
        "start": 9,
        "end": 12
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "typeParameters": null,
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 21,
              "end": 22
            },
            "typeArguments": null,
            "start": 21,
            "end": 22
          },
          "start": 18,
          "end": 22
        },
        "start": 15,
        "end": 22
      },
      "declare": false,
      "start": 0,
      "end": 23
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Mapped",
        "optional": false,
        "typeAnnotation": null,
        "start": 30,
        "end": 36
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
              "start": 37,
              "end": 38
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 37,
            "end": 38
          }
        ],
        "start": 36,
        "end": 39
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null,
          "start": 45,
          "end": 46
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
              "start": 56,
              "end": 57
            },
            "typeArguments": null,
            "start": 56,
            "end": 57
          },
          "start": 50,
          "end": 57
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Func",
            "optional": false,
            "typeAnnotation": null,
            "start": 60,
            "end": 64
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 65,
                    "end": 66
                  },
                  "typeArguments": null,
                  "start": 65,
                  "end": 66
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
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
                "end": 69
              }
            ],
            "start": 64,
            "end": 70
          },
          "start": 60,
          "end": 70
        },
        "optional": false,
        "readonly": null,
        "start": 42,
        "end": 72
      },
      "declare": false,
      "start": 25,
      "end": 73
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "reproduce",
        "optional": false,
        "typeAnnotation": null,
        "start": 92,
        "end": 101
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "options",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 111,
              "end": 117
            },
            "start": 109,
            "end": 117
          },
          "start": 102,
          "end": 117
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 120,
          "end": 124
        },
        "start": 118,
        "end": 124
      },
      "body": null,
      "expression": false,
      "start": 75,
      "end": 125
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "reproduce",
        "optional": false,
        "typeAnnotation": null,
        "start": 143,
        "end": 152
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 153,
              "end": 154
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 153,
            "end": 154
          }
        ],
        "start": 152,
        "end": 155
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "options",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Mapped",
                "optional": false,
                "typeAnnotation": null,
                "start": 165,
                "end": 171
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
                      "start": 172,
                      "end": 173
                    },
                    "typeArguments": null,
                    "start": 172,
                    "end": 173
                  }
                ],
                "start": 171,
                "end": 174
              },
              "start": 165,
              "end": 174
            },
            "start": 163,
            "end": 174
          },
          "start": 156,
          "end": 174
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 177,
            "end": 178
          },
          "typeArguments": null,
          "start": 177,
          "end": 178
        },
        "start": 175,
        "end": 178
      },
      "body": null,
      "expression": false,
      "start": 126,
      "end": 178
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "reproduce",
          "optional": false,
          "typeAnnotation": null,
          "start": 180,
          "end": 189
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 194,
                  "end": 198
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Literal",
                          "value": 123,
                          "raw": "123",
                          "start": 217,
                          "end": 220
                        },
                        "start": 210,
                        "end": 220
                      }
                    ],
                    "start": 208,
                    "end": 222
                  },
                  "id": null,
                  "generator": false,
                  "start": 202,
                  "end": 222
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 194,
                "end": 222
              }
            ],
            "start": 190,
            "end": 224
          }
        ],
        "optional": false,
        "start": 180,
        "end": 225
      },
      "directive": null,
      "start": 180,
      "end": 226
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "reproduce",
          "optional": false,
          "typeAnnotation": null,
          "start": 228,
          "end": 237
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 242,
                  "end": 246
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Literal",
                          "value": 123,
                          "raw": "123",
                          "start": 258,
                          "end": 261
                        },
                        "start": 251,
                        "end": 261
                      }
                    ],
                    "start": 249,
                    "end": 263
                  },
                  "expression": false,
                  "start": 246,
                  "end": 263
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 242,
                "end": 263
              }
            ],
            "start": 238,
            "end": 265
          }
        ],
        "optional": false,
        "start": 228,
        "end": 266
      },
      "directive": null,
      "start": 228,
      "end": 267
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "reproduce",
          "optional": false,
          "typeAnnotation": null,
          "start": 269,
          "end": 278
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 283,
                  "end": 287
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Literal",
                          "value": 123,
                          "raw": "123",
                          "start": 310,
                          "end": 313
                        },
                        "start": 303,
                        "end": 313
                      }
                    ],
                    "start": 301,
                    "end": 315
                  },
                  "expression": false,
                  "start": 289,
                  "end": 315
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 283,
                "end": 315
              }
            ],
            "start": 279,
            "end": 317
          }
        ],
        "optional": false,
        "start": 269,
        "end": 318
      },
      "directive": null,
      "start": 269,
      "end": 319
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 319
}
```
