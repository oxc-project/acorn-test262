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
            "name": "fn",
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
                        "name": "K",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 19,
                        "end": 20
                      },
                      "constraint": {
                        "type": "TSStringKeyword",
                        "start": 29,
                        "end": 35
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 19,
                      "end": 35
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "V",
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
                  "start": 18,
                  "end": 39
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "object",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSMappedType",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Key",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 51,
                          "end": 54
                        },
                        "constraint": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "K",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 58,
                            "end": 59
                          },
                          "typeArguments": null,
                          "start": 58,
                          "end": 59
                        },
                        "nameType": null,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "V",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 62,
                            "end": 63
                          },
                          "typeArguments": null,
                          "start": 62,
                          "end": 63
                        },
                        "optional": false,
                        "readonly": null,
                        "start": 48,
                        "end": 65
                      },
                      "start": 46,
                      "end": 65
                    },
                    "start": 40,
                    "end": 65
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSObjectKeyword",
                    "start": 70,
                    "end": 76
                  },
                  "start": 67,
                  "end": 76
                },
                "start": 18,
                "end": 76
              },
              "start": 16,
              "end": 76
            },
            "start": 14,
            "end": 76
          },
          "init": null,
          "definite": false,
          "start": 14,
          "end": 76
        }
      ],
      "declare": true,
      "start": 0,
      "end": 77
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
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "index",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 105,
                            "end": 111
                          },
                          "start": 103,
                          "end": 111
                        },
                        "start": 98,
                        "end": 111
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 114,
                        "end": 120
                      },
                      "start": 112,
                      "end": 120
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 97,
                    "end": 120
                  }
                ],
                "start": 95,
                "end": 122
              },
              "start": 93,
              "end": 122
            },
            "start": 92,
            "end": 122
          },
          "init": null,
          "definite": false,
          "start": 92,
          "end": 122
        }
      ],
      "declare": true,
      "start": 78,
      "end": 123
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn",
          "optional": false,
          "typeAnnotation": null,
          "start": 124,
          "end": 126
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 127,
            "end": 128
          }
        ],
        "optional": false,
        "start": 124,
        "end": 129
      },
      "directive": null,
      "start": 124,
      "end": 130
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "enumValues",
        "optional": false,
        "typeAnnotation": null,
        "start": 171,
        "end": 181
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
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 182,
              "end": 183
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 192,
              "end": 198
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 182,
            "end": 198
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null,
              "start": 200,
              "end": 201
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 210,
              "end": 216
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 200,
            "end": 216
          }
        ],
        "start": 181,
        "end": 217
      },
      "params": [
        {
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
                "name": "Record",
                "optional": false,
                "typeAnnotation": null,
                "start": 221,
                "end": 227
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
                      "start": 228,
                      "end": 229
                    },
                    "typeArguments": null,
                    "start": 228,
                    "end": 229
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "V",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 231,
                      "end": 232
                    },
                    "typeArguments": null,
                    "start": 231,
                    "end": 232
                  }
                ],
                "start": 227,
                "end": 233
              },
              "start": 221,
              "end": 233
            },
            "start": 219,
            "end": 233
          },
          "start": 218,
          "end": 233
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSArrayType",
          "elementType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null,
              "start": 236,
              "end": 237
            },
            "typeArguments": null,
            "start": 236,
            "end": 237
          },
          "start": 236,
          "end": 239
        },
        "start": 234,
        "end": 239
      },
      "body": null,
      "expression": false,
      "start": 154,
      "end": 240
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null,
        "start": 247,
        "end": 248
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 251,
              "end": 252
            },
            "initializer": {
              "type": "Literal",
              "value": "foo",
              "raw": "'foo'",
              "start": 255,
              "end": 260
            },
            "computed": false,
            "start": 251,
            "end": 260
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 262,
              "end": 263
            },
            "initializer": {
              "type": "Literal",
              "value": "bar",
              "raw": "'bar'",
              "start": 266,
              "end": 271
            },
            "computed": false,
            "start": 262,
            "end": 271
          }
        ],
        "start": 249,
        "end": 273
      },
      "const": false,
      "declare": false,
      "start": 242,
      "end": 273
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
            "name": "x",
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
                    "name": "E",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 282,
                    "end": 283
                  },
                  "typeArguments": null,
                  "start": 282,
                  "end": 283
                },
                "start": 282,
                "end": 285
              },
              "start": 280,
              "end": 285
            },
            "start": 279,
            "end": 285
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "enumValues",
              "optional": false,
              "typeAnnotation": null,
              "start": 288,
              "end": 298
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null,
                "start": 299,
                "end": 300
              }
            ],
            "optional": false,
            "start": 288,
            "end": 301
          },
          "definite": false,
          "start": 279,
          "end": 301
        }
      ],
      "declare": false,
      "start": 275,
      "end": 302
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 302
}
```
