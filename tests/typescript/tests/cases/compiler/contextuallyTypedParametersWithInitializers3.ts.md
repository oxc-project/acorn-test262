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
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 20,
        "decorators": [],
        "name": "CanvasDirection",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
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
              "value": "RIGHT",
              "raw": "\"RIGHT\""
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
              "value": "LEFT",
              "raw": "\"LEFT\""
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 42,
      "end": 122,
      "id": {
        "type": "Identifier",
        "start": 52,
        "end": 64,
        "decorators": [],
        "name": "GraphActions",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 65,
        "end": 122,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 69,
            "end": 120,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 69,
              "end": 81,
              "decorators": [],
              "name": "setDirection",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 81,
              "end": 119,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 83,
                "end": 119,
                "typeParameters": null,
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
                        "typeName": {
                          "type": "Identifier",
                          "start": 95,
                          "end": 110,
                          "decorators": [],
                          "name": "CanvasDirection",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
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
                }
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 124,
      "end": 175,
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 131,
        "end": 175,
        "id": {
          "type": "Identifier",
          "start": 148,
          "end": 154,
          "decorators": [],
          "name": "create",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": true,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 154,
          "end": 157,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 155,
              "end": 156,
              "name": {
                "type": "Identifier",
                "start": 155,
                "end": 156,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false
            }
          ]
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
                "typeName": {
                  "type": "Identifier",
                  "start": 166,
                  "end": 167,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
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
        "body": null,
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "TSDeclareFunction",
      "start": 177,
      "end": 243,
      "id": {
        "type": "Identifier",
        "start": 194,
        "end": 208,
        "decorators": [],
        "name": "takesDirection",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
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
              "typeName": {
                "type": "Identifier",
                "start": 220,
                "end": 235,
                "decorators": [],
                "name": "CanvasDirection",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
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
      "body": null,
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 245,
      "end": 350,
      "expression": {
        "type": "CallExpression",
        "start": 245,
        "end": 349,
        "callee": {
          "type": "Identifier",
          "start": 245,
          "end": 251,
          "decorators": [],
          "name": "create",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 251,
          "end": 265,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 252,
              "end": 264,
              "typeName": {
                "type": "Identifier",
                "start": 252,
                "end": 264,
                "decorators": [],
                "name": "GraphActions",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          ]
        },
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 270,
                  "end": 282,
                  "decorators": [],
                  "name": "setDirection",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 284,
                  "end": 345,
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
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
                      "right": {
                        "type": "Literal",
                        "start": 297,
                        "end": 304,
                        "value": "RIGHT",
                        "raw": "\"RIGHT\""
                      },
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "start": 309,
                    "end": 345,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 315,
                        "end": 341,
                        "expression": {
                          "type": "CallExpression",
                          "start": 315,
                          "end": 340,
                          "callee": {
                            "type": "Identifier",
                            "start": 315,
                            "end": 329,
                            "decorators": [],
                            "name": "takesDirection",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null,
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
                          "optional": false
                        },
                        "directive": null
                      }
                    ]
                  },
                  "id": null,
                  "generator": false
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          }
        ],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
