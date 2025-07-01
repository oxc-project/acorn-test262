__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
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
            "name": "dec",
            "optional": false,
            "typeAnnotation": null,
            "start": 62,
            "end": 65
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 72,
                    "end": 78
                  },
                  "start": 70,
                  "end": 78
                },
                "start": 69,
                "end": 78
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 83,
                    "end": 89
                  },
                  "start": 81,
                  "end": 89
                },
                "start": 80,
                "end": 89
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "z",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 94,
                    "end": 100
                  },
                  "start": 92,
                  "end": 100
                },
                "start": 91,
                "end": 100
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 105,
                    "end": 111
                  },
                  "start": 103,
                  "end": 111
                },
                "start": 102,
                "end": 111
              }
            ],
            "returnType": null,
            "body": {
              "type": "ArrowFunctionExpression",
              "expression": false,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "_",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 120,
                      "end": 123
                    },
                    "start": 118,
                    "end": 123
                  },
                  "start": 117,
                  "end": 123
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ctx",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "DecoratorContext",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 130,
                        "end": 146
                      },
                      "typeArguments": null,
                      "start": 130,
                      "end": 146
                    },
                    "start": 128,
                    "end": 146
                  },
                  "start": 125,
                  "end": 146
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 149,
                  "end": 152
                },
                "start": 147,
                "end": 152
              },
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 156,
                "end": 159
              },
              "id": null,
              "generator": false,
              "start": 116,
              "end": 159
            },
            "id": null,
            "generator": false,
            "start": 68,
            "end": 159
          },
          "definite": false,
          "start": 62,
          "end": 159
        }
      ],
      "declare": false,
      "start": 56,
      "end": 160
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
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 167,
            "end": 170
          },
          "init": {
            "type": "ClassExpression",
            "decorators": [],
            "id": null,
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [
                {
                  "type": "PropertyDefinition",
                  "decorators": [
                    {
                      "type": "Decorator",
                      "expression": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "dec",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 186,
                          "end": 189
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 190,
                            "end": 191
                          },
                          {
                            "type": "Literal",
                            "value": 3,
                            "raw": "3",
                            "start": 193,
                            "end": 194
                          },
                          {
                            "type": "Literal",
                            "value": 3,
                            "raw": "3",
                            "start": 196,
                            "end": 197
                          },
                          {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 199,
                            "end": 200
                          }
                        ],
                        "optional": false,
                        "start": 186,
                        "end": 201
                      },
                      "start": 185,
                      "end": 201
                    }
                  ],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "field",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 202,
                    "end": 207
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUndefinedKeyword",
                      "start": 209,
                      "end": 218
                    },
                    "start": 207,
                    "end": 218
                  },
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null,
                  "start": 185,
                  "end": 218
                },
                {
                  "type": "PropertyDefinition",
                  "decorators": [
                    {
                      "type": "Decorator",
                      "expression": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "dec",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 224,
                          "end": 227
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": 2,
                            "raw": "2",
                            "start": 228,
                            "end": 229
                          },
                          {
                            "type": "Literal",
                            "value": 2,
                            "raw": "2",
                            "start": 231,
                            "end": 232
                          },
                          {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 234,
                            "end": 235
                          },
                          {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 237,
                            "end": 238
                          }
                        ],
                        "optional": false,
                        "start": 224,
                        "end": 239
                      },
                      "start": 223,
                      "end": 239
                    }
                  ],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "field",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 247,
                    "end": 252
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUndefinedKeyword",
                      "start": 254,
                      "end": 263
                    },
                    "start": 252,
                    "end": 263
                  },
                  "value": null,
                  "computed": false,
                  "static": true,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null,
                  "start": 223,
                  "end": 263
                },
                {
                  "type": "AccessorProperty",
                  "decorators": [
                    {
                      "type": "Decorator",
                      "expression": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "dec",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 269,
                          "end": 272
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": 3,
                            "raw": "3",
                            "start": 273,
                            "end": 274
                          },
                          {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 276,
                            "end": 277
                          },
                          {
                            "type": "Literal",
                            "value": 4,
                            "raw": "4",
                            "start": 279,
                            "end": 280
                          },
                          {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 282,
                            "end": 283
                          }
                        ],
                        "optional": false,
                        "start": 269,
                        "end": 284
                      },
                      "start": 268,
                      "end": 284
                    }
                  ],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "accessor",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 294,
                    "end": 302
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUndefinedKeyword",
                      "start": 304,
                      "end": 313
                    },
                    "start": 302,
                    "end": 313
                  },
                  "value": null,
                  "computed": false,
                  "static": false,
                  "override": false,
                  "definite": false,
                  "accessibility": null,
                  "declare": false,
                  "optional": false,
                  "readonly": false,
                  "start": 268,
                  "end": 313
                },
                {
                  "type": "AccessorProperty",
                  "decorators": [
                    {
                      "type": "Decorator",
                      "expression": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "dec",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 319,
                          "end": 322
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": 4,
                            "raw": "4",
                            "start": 323,
                            "end": 324
                          },
                          {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 326,
                            "end": 327
                          },
                          {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 329,
                            "end": 330
                          },
                          {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 332,
                            "end": 333
                          }
                        ],
                        "optional": false,
                        "start": 319,
                        "end": 334
                      },
                      "start": 318,
                      "end": 334
                    }
                  ],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "accessor",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 351,
                    "end": 359
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUndefinedKeyword",
                      "start": 361,
                      "end": 370
                    },
                    "start": 359,
                    "end": 370
                  },
                  "value": null,
                  "computed": false,
                  "static": true,
                  "override": false,
                  "definite": false,
                  "accessibility": null,
                  "declare": false,
                  "optional": false,
                  "readonly": false,
                  "start": 318,
                  "end": 370
                }
              ],
              "start": 179,
              "end": 675
            },
            "abstract": false,
            "declare": false,
            "start": 173,
            "end": 675
          },
          "definite": false,
          "start": 167,
          "end": 675
        }
      ],
      "declare": false,
      "start": 161,
      "end": 675
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 56,
  "end": 675
}
```
