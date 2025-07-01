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
        "name": "CanvasDirection",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 20
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "RIGHT",
              "raw": "\"RIGHT\"",
              "start": 23,
              "end": 30
            },
            "start": 23,
            "end": 30
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "LEFT",
              "raw": "\"LEFT\"",
              "start": 33,
              "end": 39
            },
            "start": 33,
            "end": 39
          }
        ],
        "start": 23,
        "end": 39
      },
      "declare": false,
      "start": 0,
      "end": 40
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "GraphActions",
        "optional": false,
        "typeAnnotation": null,
        "start": 52,
        "end": 64
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
              "name": "setDirection",
              "optional": false,
              "typeAnnotation": null,
              "start": 69,
              "end": 81
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "direction",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "CanvasDirection",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 95,
                          "end": 110
                        },
                        "typeArguments": null,
                        "start": 95,
                        "end": 110
                      },
                      "start": 93,
                      "end": 110
                    },
                    "start": 84,
                    "end": 110
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 115,
                    "end": 119
                  },
                  "start": 112,
                  "end": 119
                },
                "start": 83,
                "end": 119
              },
              "start": 81,
              "end": 119
            },
            "accessibility": null,
            "static": false,
            "start": 69,
            "end": 120
          }
        ],
        "start": 65,
        "end": 122
      },
      "declare": false,
      "start": 42,
      "end": 122
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSDeclareFunction",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "create",
          "optional": false,
          "typeAnnotation": null,
          "start": 148,
          "end": 154
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
                "start": 155,
                "end": 156
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 155,
              "end": 156
            }
          ],
          "start": 154,
          "end": 157
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "config",
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
                  "start": 166,
                  "end": 167
                },
                "typeArguments": null,
                "start": 166,
                "end": 167
              },
              "start": 164,
              "end": 167
            },
            "start": 158,
            "end": 167
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 170,
            "end": 174
          },
          "start": 168,
          "end": 174
        },
        "body": null,
        "expression": false,
        "start": 131,
        "end": 175
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 124,
      "end": 175
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "takesDirection",
        "optional": false,
        "typeAnnotation": null,
        "start": 194,
        "end": 208
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "direction",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "CanvasDirection",
                "optional": false,
                "typeAnnotation": null,
                "start": 220,
                "end": 235
              },
              "typeArguments": null,
              "start": 220,
              "end": 235
            },
            "start": 218,
            "end": 235
          },
          "start": 209,
          "end": 235
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 238,
          "end": 242
        },
        "start": 236,
        "end": 242
      },
      "body": null,
      "expression": false,
      "start": 177,
      "end": 243
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "create",
          "optional": false,
          "typeAnnotation": null,
          "start": 245,
          "end": 251
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "GraphActions",
                "optional": false,
                "typeAnnotation": null,
                "start": 252,
                "end": 264
              },
              "typeArguments": null,
              "start": 252,
              "end": 264
            }
          ],
          "start": 251,
          "end": 265
        },
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
                  "name": "setDirection",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 270,
                  "end": 282
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "AssignmentPattern",
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "direction",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 285,
                        "end": 294
                      },
                      "right": {
                        "type": "Literal",
                        "value": "RIGHT",
                        "raw": "\"RIGHT\"",
                        "start": 297,
                        "end": 304
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 285,
                      "end": 304
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "takesDirection",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 315,
                            "end": 329
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "direction",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 330,
                              "end": 339
                            }
                          ],
                          "optional": false,
                          "start": 315,
                          "end": 340
                        },
                        "directive": null,
                        "start": 315,
                        "end": 341
                      }
                    ],
                    "start": 309,
                    "end": 345
                  },
                  "id": null,
                  "generator": false,
                  "start": 284,
                  "end": 345
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 270,
                "end": 345
              }
            ],
            "start": 266,
            "end": 348
          }
        ],
        "optional": false,
        "start": 245,
        "end": 349
      },
      "directive": null,
      "start": 245,
      "end": 350
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 350
}
```
