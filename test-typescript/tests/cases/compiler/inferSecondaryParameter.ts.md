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
        "name": "Ib",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
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
              "name": "m",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                "name": "test",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 67,
                  "end": 75,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 69,
                    "end": 75
                  }
                },
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 77,
                "end": 89,
                "name": "fn",
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
                      "name": "Function",
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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 99,
          "end": 155,
          "id": {
            "type": "Identifier",
            "start": 99,
            "end": 104,
            "name": "b",
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
                  "name": "Ib",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 109,
                  "end": 110,
                  "name": "m",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 112,
                  "end": 153,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 122,
                      "end": 134,
                      "name": "test",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 126,
                        "end": 134,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 128,
                          "end": 134
                        }
                      },
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 136,
                      "end": 148,
                      "name": "fn",
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
                            "name": "Function",
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
                  "body": {
                    "type": "BlockStatement",
                    "start": 150,
                    "end": 153,
                    "body": []
                  },
                  "declare": false,
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
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
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 160,
            "end": 161,
            "name": "m",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
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
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 180,
                "end": 183,
                "name": "bug",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "BlockStatement",
              "start": 185,
              "end": 213,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 191,
                  "end": 211,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 195,
                      "end": 210,
                      "id": {
                        "type": "Identifier",
                        "start": 195,
                        "end": 204,
                        "name": "a",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 196,
                          "end": 204,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 198,
                            "end": 204
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "Identifier",
                        "start": 207,
                        "end": 210,
                        "name": "bug",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "definite": false
                    }
                  ],
                  "kind": "var",
                  "declare": false
                }
              ]
            },
            "declare": false,
            "typeParameters": null,
            "returnType": null
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
