__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "React",
            "optional": false,
            "typeAnnotation": null,
            "start": 51,
            "end": 56
          },
          "start": 51,
          "end": 56
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "ReactElement",
            "optional": false,
            "typeAnnotation": null,
            "start": 60,
            "end": 72
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "ReactElement",
            "optional": false,
            "typeAnnotation": null,
            "start": 60,
            "end": 72
          },
          "importKind": "value",
          "start": 60,
          "end": 72
        }
      ],
      "source": {
        "type": "Literal",
        "value": "react",
        "raw": "\"react\"",
        "start": 80,
        "end": 87
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 44,
      "end": 88
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NotHappy",
        "optional": false,
        "typeAnnotation": null,
        "start": 107,
        "end": 115
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "props",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
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
                        "name": "fixed",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 126,
                        "end": 131
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSBooleanKeyword",
                          "start": 134,
                          "end": 141
                        },
                        "start": 132,
                        "end": 141
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 126,
                      "end": 141
                    }
                  ],
                  "start": 124,
                  "end": 143
                },
                {
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
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 148,
                        "end": 153
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 156,
                          "end": 162
                        },
                        "start": 154,
                        "end": 162
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 148,
                      "end": 162
                    }
                  ],
                  "start": 146,
                  "end": 164
                }
              ],
              "start": 124,
              "end": 164
            },
            "start": 121,
            "end": 165
          },
          "start": 116,
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
            "name": "ReactElement",
            "optional": false,
            "typeAnnotation": null,
            "start": 168,
            "end": 180
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSAnyKeyword",
                "start": 181,
                "end": 184
              }
            ],
            "start": 180,
            "end": 185
          },
          "start": 168,
          "end": 185
        },
        "start": 166,
        "end": 185
      },
      "body": null,
      "expression": false,
      "start": 90,
      "end": 186
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Happy",
        "optional": false,
        "typeAnnotation": null,
        "start": 204,
        "end": 209
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "props",
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
                    "name": "fixed",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 219,
                    "end": 224
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 227,
                      "end": 234
                    },
                    "start": 225,
                    "end": 234
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 219,
                  "end": 235
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 236,
                    "end": 241
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 244,
                      "end": 250
                    },
                    "start": 242,
                    "end": 250
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 236,
                  "end": 250
                }
              ],
              "start": 217,
              "end": 252
            },
            "start": 215,
            "end": 252
          },
          "start": 210,
          "end": 252
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "ReactElement",
            "optional": false,
            "typeAnnotation": null,
            "start": 255,
            "end": 267
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSAnyKeyword",
                "start": 268,
                "end": 271
              }
            ],
            "start": 267,
            "end": 272
          },
          "start": 255,
          "end": 272
        },
        "start": 253,
        "end": 272
      },
      "body": null,
      "expression": false,
      "start": 187,
      "end": 273
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
            "name": "RootNotHappy",
            "optional": false,
            "typeAnnotation": null,
            "start": 281,
            "end": 293
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "JSXElement",
              "openingElement": {
                "type": "JSXOpeningElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "NotHappy",
                  "start": 304,
                  "end": 312
                },
                "typeArguments": null,
                "attributes": [
                  {
                    "type": "JSXAttribute",
                    "name": {
                      "type": "JSXIdentifier",
                      "name": "data-testid",
                      "start": 313,
                      "end": 324
                    },
                    "value": {
                      "type": "Literal",
                      "value": "my-test-id",
                      "raw": "\"my-test-id\"",
                      "start": 325,
                      "end": 337
                    },
                    "start": 313,
                    "end": 337
                  }
                ],
                "selfClosing": true,
                "start": 303,
                "end": 340
              },
              "children": [],
              "closingElement": null,
              "start": 303,
              "end": 340
            },
            "id": null,
            "generator": false,
            "start": 296,
            "end": 341
          },
          "definite": false,
          "start": 281,
          "end": 341
        }
      ],
      "declare": false,
      "start": 275,
      "end": 342
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
            "name": "RootHappy",
            "optional": false,
            "typeAnnotation": null,
            "start": 349,
            "end": 358
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "JSXElement",
              "openingElement": {
                "type": "JSXOpeningElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "Happy",
                  "start": 369,
                  "end": 374
                },
                "typeArguments": null,
                "attributes": [
                  {
                    "type": "JSXAttribute",
                    "name": {
                      "type": "JSXIdentifier",
                      "name": "data-testid",
                      "start": 375,
                      "end": 386
                    },
                    "value": {
                      "type": "Literal",
                      "value": "my-test-id",
                      "raw": "\"my-test-id\"",
                      "start": 387,
                      "end": 399
                    },
                    "start": 375,
                    "end": 399
                  }
                ],
                "selfClosing": true,
                "start": 368,
                "end": 402
              },
              "children": [],
              "closingElement": null,
              "start": 368,
              "end": 402
            },
            "id": null,
            "generator": false,
            "start": 361,
            "end": 403
          },
          "definite": false,
          "start": 349,
          "end": 403
        }
      ],
      "declare": false,
      "start": 343,
      "end": 404
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 44,
  "end": 404
}
```
