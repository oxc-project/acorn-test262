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
        "name": "CanvasDirection",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
        "name": "GraphActions",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
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
              "name": "setDirection",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                    "name": "direction",
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
                          "name": "CanvasDirection",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "decorators": [],
                    "optional": false
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
          "name": "create",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": false,
        "async": false,
        "params": [
          {
            "type": "Identifier",
            "start": 158,
            "end": 167,
            "name": "config",
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
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          }
        ],
        "body": null,
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
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 168,
          "end": 174,
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 170,
            "end": 174
          }
        }
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "TSDeclareFunction",
      "start": 177,
      "end": 243,
      "id": {
        "type": "Identifier",
        "start": 194,
        "end": 208,
        "name": "takesDirection",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 209,
          "end": 235,
          "name": "direction",
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
                "name": "CanvasDirection",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 236,
        "end": 242,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 238,
          "end": 242
        }
      }
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
          "name": "create",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 270,
                  "end": 282,
                  "name": "setDirection",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 284,
                  "end": 345,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "AssignmentPattern",
                      "start": 285,
                      "end": 304,
                      "left": {
                        "type": "Identifier",
                        "start": 285,
                        "end": 294,
                        "name": "direction",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 297,
                        "end": 304,
                        "value": "RIGHT",
                        "raw": "\"RIGHT\""
                      },
                      "decorators": [],
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
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
                            "name": "takesDirection",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "arguments": [
                            {
                              "type": "Identifier",
                              "start": 330,
                              "end": 339,
                              "name": "direction",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          ],
                          "optional": false,
                          "typeArguments": null
                        },
                        "directive": null
                      }
                    ]
                  },
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "init",
                "optional": false
              }
            ]
          }
        ],
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
              "typeName": {
                "type": "Identifier",
                "start": 252,
                "end": 264,
                "name": "GraphActions",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          ]
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
