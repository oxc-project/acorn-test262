__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 46,
  "end": 215,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 46,
      "end": 93,
      "id": {
        "type": "Identifier",
        "start": 56,
        "end": 58,
        "decorators": [],
        "name": "Ib",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 59,
        "end": 93,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 61,
            "end": 91,
            "key": {
              "type": "Identifier",
              "start": 61,
              "end": 62,
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 63,
                "end": 75,
                "decorators": [],
                "name": "test",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 67,
                  "end": 75,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 69,
                    "end": 75
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 77,
                "end": 89,
                "decorators": [],
                "name": "fn",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 79,
                  "end": 89,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 81,
                    "end": 89,
                    "typeName": {
                      "type": "Identifier",
                      "start": 81,
                      "end": 89,
                      "decorators": [],
                      "name": "Function",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              }
            ],
            "returnType": null,
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 95,
      "end": 156,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 99,
          "end": 155,
          "id": {
            "type": "Identifier",
            "start": 99,
            "end": 104,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 100,
              "end": 104,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 102,
                "end": 104,
                "typeName": {
                  "type": "Identifier",
                  "start": 102,
                  "end": 104,
                  "decorators": [],
                  "name": "Ib",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 107,
            "end": 155,
            "properties": [
              {
                "type": "Property",
                "start": 109,
                "end": 153,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 109,
                  "end": 110,
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 112,
                  "end": 153,
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 122,
                      "end": 134,
                      "decorators": [],
                      "name": "test",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 126,
                        "end": 134,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 128,
                          "end": 134
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "start": 136,
                      "end": 148,
                      "decorators": [],
                      "name": "fn",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 138,
                        "end": 148,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 140,
                          "end": 148,
                          "typeName": {
                            "type": "Identifier",
                            "start": 140,
                            "end": 148,
                            "decorators": [],
                            "name": "Function",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      }
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "start": 150,
                    "end": 153,
                    "body": []
                  },
                  "expression": false
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 158,
      "end": 215,
      "expression": {
        "type": "CallExpression",
        "start": 158,
        "end": 214,
        "callee": {
          "type": "MemberExpression",
          "start": 158,
          "end": 161,
          "object": {
            "type": "Identifier",
            "start": 158,
            "end": 159,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 160,
            "end": 161,
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 162,
            "end": 168,
            "value": "test",
            "raw": "\"test\""
          },
          {
            "type": "FunctionExpression",
            "start": 170,
            "end": 213,
            "id": null,
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 180,
                "end": 183,
                "decorators": [],
                "name": "bug",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 185,
              "end": 213,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 191,
                  "end": 211,
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 195,
                      "end": 210,
                      "id": {
                        "type": "Identifier",
                        "start": 195,
                        "end": 204,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 196,
                          "end": 204,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 198,
                            "end": 204
                          }
                        }
                      },
                      "init": {
                        "type": "Identifier",
                        "start": 207,
                        "end": 210,
                        "decorators": [],
                        "name": "bug",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                }
              ]
            },
            "expression": false
          }
        ],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
