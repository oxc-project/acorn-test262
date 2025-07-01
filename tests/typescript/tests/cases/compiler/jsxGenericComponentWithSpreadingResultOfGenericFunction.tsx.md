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
        "name": "omit",
        "optional": false,
        "typeAnnotation": null,
        "start": 79,
        "end": 83
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
              "start": 84,
              "end": 85
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 84,
            "end": 85
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 87,
              "end": 88
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 97,
              "end": 103
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 87,
            "end": 103
          }
        ],
        "start": 83,
        "end": 104
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "names",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 121,
                    "end": 122
                  },
                  "typeArguments": null,
                  "start": 121,
                  "end": 122
                },
                "start": 121,
                "end": 124
              },
              "start": 112,
              "end": 124
            },
            "start": 110,
            "end": 124
          },
          "start": 105,
          "end": 124
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
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
                "start": 131,
                "end": 132
              },
              "typeArguments": null,
              "start": 131,
              "end": 132
            },
            "start": 129,
            "end": 132
          },
          "start": 126,
          "end": 132
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Omit",
            "optional": false,
            "typeAnnotation": null,
            "start": 135,
            "end": 139
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
                  "start": 140,
                  "end": 141
                },
                "typeArguments": null,
                "start": 140,
                "end": 141
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 143,
                  "end": 144
                },
                "typeArguments": null,
                "start": 143,
                "end": 144
              }
            ],
            "start": 139,
            "end": 145
          },
          "start": 135,
          "end": 145
        },
        "start": 133,
        "end": 145
      },
      "body": null,
      "expression": false,
      "start": 62,
      "end": 146
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "omit",
        "optional": false,
        "typeAnnotation": null,
        "start": 164,
        "end": 168
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
              "start": 169,
              "end": 170
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 179,
              "end": 185
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 169,
            "end": 185
          }
        ],
        "start": 168,
        "end": 186
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "names",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 203,
                    "end": 204
                  },
                  "typeArguments": null,
                  "start": 203,
                  "end": 204
                },
                "start": 203,
                "end": 206
              },
              "start": 194,
              "end": 206
            },
            "start": 192,
            "end": 206
          },
          "start": 187,
          "end": 206
        }
      ],
      "returnType": {
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
                  "start": 210,
                  "end": 211
                },
                "constraint": null,
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 210,
                "end": 211
              }
            ],
            "start": 209,
            "end": 212
          },
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "obj",
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
                    "start": 218,
                    "end": 219
                  },
                  "typeArguments": null,
                  "start": 218,
                  "end": 219
                },
                "start": 216,
                "end": 219
              },
              "start": 213,
              "end": 219
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Omit",
                "optional": false,
                "typeAnnotation": null,
                "start": 224,
                "end": 228
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
                      "start": 229,
                      "end": 230
                    },
                    "typeArguments": null,
                    "start": 229,
                    "end": 230
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 232,
                      "end": 233
                    },
                    "typeArguments": null,
                    "start": 232,
                    "end": 233
                  }
                ],
                "start": 228,
                "end": 234
              },
              "start": 224,
              "end": 234
            },
            "start": 221,
            "end": 234
          },
          "start": 209,
          "end": 234
        },
        "start": 207,
        "end": 234
      },
      "body": null,
      "expression": false,
      "start": 147,
      "end": 235
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
            "name": "otherProps",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
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
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 265,
                      "end": 268
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 270,
                        "end": 276
                      },
                      "start": 268,
                      "end": 276
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 265,
                    "end": 277
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "qwe",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 278,
                      "end": 281
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 283,
                        "end": 290
                      },
                      "start": 281,
                      "end": 290
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 278,
                    "end": 290
                  }
                ],
                "start": 263,
                "end": 292
              },
              "start": 261,
              "end": 292
            },
            "start": 251,
            "end": 292
          },
          "init": null,
          "definite": false,
          "start": 251,
          "end": 292
        }
      ],
      "declare": true,
      "start": 237,
      "end": 292
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "GenericComponent",
        "optional": false,
        "typeAnnotation": null,
        "start": 311,
        "end": 327
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
              "start": 328,
              "end": 329
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 328,
            "end": 329
          }
        ],
        "start": 327,
        "end": 330
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "props",
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
                "start": 338,
                "end": 339
              },
              "typeArguments": null,
              "start": 338,
              "end": 339
            },
            "start": 336,
            "end": 339
          },
          "start": 331,
          "end": 339
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNullKeyword",
          "start": 342,
          "end": 346
        },
        "start": 340,
        "end": 346
      },
      "body": null,
      "expression": false,
      "start": 294,
      "end": 346
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "GenericComponent",
            "start": 349,
            "end": 365
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXSpreadAttribute",
              "argument": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "omit",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 370,
                  "end": 374
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "value": "bar",
                        "raw": "'bar'",
                        "start": 376,
                        "end": 381
                      }
                    ],
                    "start": 375,
                    "end": 382
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "otherProps",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 384,
                    "end": 394
                  }
                ],
                "optional": false,
                "start": 370,
                "end": 395
              },
              "start": 366,
              "end": 396
            }
          ],
          "selfClosing": true,
          "start": 348,
          "end": 399
        },
        "children": [],
        "closingElement": null,
        "start": 348,
        "end": 399
      },
      "directive": null,
      "start": 348,
      "end": 400
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 62,
  "end": 414
}
```
