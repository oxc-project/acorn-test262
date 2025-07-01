__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "match",
        "optional": false,
        "typeAnnotation": null,
        "start": 85,
        "end": 90
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
              "start": 91,
              "end": 92
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 91,
            "end": 92
          }
        ],
        "start": 90,
        "end": 93
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cb",
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
                  "name": "value",
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
                        "start": 106,
                        "end": 107
                      },
                      "typeArguments": null,
                      "start": 106,
                      "end": 107
                    },
                    "start": 104,
                    "end": 107
                  },
                  "start": 99,
                  "end": 107
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 112,
                  "end": 119
                },
                "start": 109,
                "end": 119
              },
              "start": 98,
              "end": 119
            },
            "start": 96,
            "end": 119
          },
          "start": 94,
          "end": 119
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
            "start": 122,
            "end": 123
          },
          "typeArguments": null,
          "start": 122,
          "end": 123
        },
        "start": 120,
        "end": 123
      },
      "body": null,
      "expression": false,
      "start": 68,
      "end": 124
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 143,
        "end": 146
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "pos",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 154,
                    "end": 155
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 158,
                      "end": 164
                    },
                    "start": 156,
                    "end": 164
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 154,
                  "end": 165
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 166,
                    "end": 167
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 170,
                      "end": 176
                    },
                    "start": 168,
                    "end": 176
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 166,
                  "end": 176
                }
              ],
              "start": 152,
              "end": 178
            },
            "start": 150,
            "end": 178
          },
          "start": 147,
          "end": 178
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "start": 181,
          "end": 188
        },
        "start": 179,
        "end": 188
      },
      "body": null,
      "expression": false,
      "start": 126,
      "end": 189
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 190,
          "end": 193
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
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 196,
                  "end": 197
                },
                "value": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "match",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 199,
                    "end": 204
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 205,
                          "end": 206
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 210,
                          "end": 211
                        },
                        "operator": ">",
                        "right": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 214,
                          "end": 215
                        },
                        "start": 210,
                        "end": 215
                      },
                      "id": null,
                      "generator": false,
                      "start": 205,
                      "end": 215
                    }
                  ],
                  "optional": false,
                  "start": 199,
                  "end": 216
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 196,
                "end": 216
              }
            ],
            "start": 194,
            "end": 218
          }
        ],
        "optional": false,
        "start": 190,
        "end": 219
      },
      "directive": null,
      "start": 190,
      "end": 219
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 238,
        "end": 242
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "point",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSOptionalType",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 251,
                    "end": 257
                  },
                  "start": 251,
                  "end": 258
                }
              ],
              "start": 250,
              "end": 259
            },
            "start": 248,
            "end": 259
          },
          "start": 243,
          "end": 259
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "start": 262,
          "end": 269
        },
        "start": 260,
        "end": 269
      },
      "body": null,
      "expression": false,
      "start": 221,
      "end": 270
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo2",
          "optional": false,
          "typeAnnotation": null,
          "start": 271,
          "end": 275
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "match",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 277,
                  "end": 282
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "ArrowFunctionExpression",
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 283,
                        "end": 284
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 288,
                        "end": 289
                      },
                      "operator": ">",
                      "right": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 292,
                        "end": 293
                      },
                      "start": 288,
                      "end": 293
                    },
                    "id": null,
                    "generator": false,
                    "start": 283,
                    "end": 293
                  }
                ],
                "optional": false,
                "start": 277,
                "end": 294
              }
            ],
            "start": 276,
            "end": 295
          }
        ],
        "optional": false,
        "start": 271,
        "end": 296
      },
      "directive": null,
      "start": 271,
      "end": 296
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 68,
  "end": 296
}
```
