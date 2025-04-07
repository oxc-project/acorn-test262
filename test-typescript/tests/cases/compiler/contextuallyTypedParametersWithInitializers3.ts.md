__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 350,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 40,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 20,
        "decorators": [],
        "name": "CanvasDirection",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 23,
        "end": 39,
        "types": [
          {
            "type": "TSLiteralType",
            "start": 23,
            "end": 30,
            "literal": {
              "type": "Literal",
              "start": 23,
              "end": 30,
              "raw": "\"RIGHT\"",
              "value": "RIGHT"
            }
          },
          {
            "type": "TSLiteralType",
            "start": 33,
            "end": 39,
            "literal": {
              "type": "Literal",
              "start": 33,
              "end": 39,
              "raw": "\"LEFT\"",
              "value": "LEFT"
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 42,
      "end": 122,
      "body": {
        "type": "TSInterfaceBody",
        "start": 65,
        "end": 122,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 69,
            "end": 120,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 69,
              "end": 81,
              "decorators": [],
              "name": "setDirection",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 81,
              "end": 119,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 83,
                "end": 119,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 84,
                    "end": 110,
                    "decorators": [],
                    "name": "direction",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 93,
                      "end": 110,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 95,
                        "end": 110,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 95,
                          "end": 110,
                          "decorators": [],
                          "name": "CanvasDirection",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 112,
                  "end": 119,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 115,
                    "end": 119
                  }
                },
                "typeParameters": null
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 52,
        "end": 64,
        "decorators": [],
        "name": "GraphActions",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 124,
      "end": 175,
      "attributes": [],
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 131,
        "end": 175,
        "async": false,
        "body": null,
        "declare": true,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 148,
          "end": 154,
          "decorators": [],
          "name": "create",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [
          {
            "type": "Identifier",
            "start": 158,
            "end": 167,
            "decorators": [],
            "name": "config",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 164,
              "end": 167,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 166,
                "end": 167,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 166,
                  "end": 167,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 168,
          "end": 174,
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 170,
            "end": 174
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 154,
          "end": 157,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 155,
              "end": 156,
              "const": false,
              "constraint": null,
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 155,
                "end": 156,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "out": false
            }
          ]
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "TSDeclareFunction",
      "start": 177,
      "end": 243,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 194,
        "end": 208,
        "decorators": [],
        "name": "takesDirection",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 209,
          "end": 235,
          "decorators": [],
          "name": "direction",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 218,
            "end": 235,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 220,
              "end": 235,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 220,
                "end": 235,
                "decorators": [],
                "name": "CanvasDirection",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 236,
        "end": 242,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 238,
          "end": 242
        }
      },
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 245,
      "end": 350,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 245,
        "end": 349,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 266,
            "end": 348,
            "properties": [
              {
                "type": "Property",
                "start": 270,
                "end": 345,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 270,
                  "end": 282,
                  "decorators": [],
                  "name": "setDirection",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 284,
                  "end": 345,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 309,
                    "end": 345,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 315,
                        "end": 341,
                        "directive": null,
                        "expression": {
                          "type": "CallExpression",
                          "start": 315,
                          "end": 340,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "start": 330,
                              "end": 339,
                              "decorators": [],
                              "name": "direction",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          ],
                          "callee": {
                            "type": "Identifier",
                            "start": 315,
                            "end": 329,
                            "decorators": [],
                            "name": "takesDirection",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "typeArguments": null
                        }
                      }
                    ]
                  },
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "AssignmentPattern",
                      "start": 285,
                      "end": 304,
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "start": 285,
                        "end": 294,
                        "decorators": [],
                        "name": "direction",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "right": {
                        "type": "Literal",
                        "start": 297,
                        "end": 304,
                        "raw": "\"RIGHT\"",
                        "value": "RIGHT"
                      },
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "typeParameters": null
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 245,
          "end": 251,
          "decorators": [],
          "name": "create",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 251,
          "end": 265,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 252,
              "end": 264,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 252,
                "end": 264,
                "decorators": [],
                "name": "GraphActions",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        }
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
