__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Ib",
        "optional": false,
        "typeAnnotation": null,
        "start": 56,
        "end": 58
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null,
              "start": 61,
              "end": 62
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "test",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 69,
                    "end": 75
                  },
                  "start": 67,
                  "end": 75
                },
                "start": 63,
                "end": 75
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "fn",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Function",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 81,
                      "end": 89
                    },
                    "typeArguments": null,
                    "start": 81,
                    "end": 89
                  },
                  "start": 79,
                  "end": 89
                },
                "start": 77,
                "end": 89
              }
            ],
            "returnType": null,
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 61,
            "end": 91
          }
        ],
        "start": 59,
        "end": 93
      },
      "declare": false,
      "start": 46,
      "end": 93
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Ib",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 102,
                  "end": 104
                },
                "typeArguments": null,
                "start": 102,
                "end": 104
              },
              "start": 100,
              "end": 104
            },
            "start": 99,
            "end": 104
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 109,
                  "end": 110
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "test",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 128,
                          "end": 134
                        },
                        "start": 126,
                        "end": 134
                      },
                      "start": 122,
                      "end": 134
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fn",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Function",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 140,
                            "end": 148
                          },
                          "typeArguments": null,
                          "start": 140,
                          "end": 148
                        },
                        "start": 138,
                        "end": 148
                      },
                      "start": 136,
                      "end": 148
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 150,
                    "end": 153
                  },
                  "expression": false,
                  "start": 112,
                  "end": 153
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 109,
                "end": 153
              }
            ],
            "start": 107,
            "end": 155
          },
          "definite": false,
          "start": 99,
          "end": 155
        }
      ],
      "declare": false,
      "start": 95,
      "end": 156
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 158,
            "end": 159
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null,
            "start": 160,
            "end": 161
          },
          "optional": false,
          "computed": false,
          "start": 158,
          "end": 161
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "test",
            "raw": "\"test\"",
            "start": 162,
            "end": 168
          },
          {
            "type": "FunctionExpression",
            "id": null,
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "bug",
                "optional": false,
                "typeAnnotation": null,
                "start": 180,
                "end": 183
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "VariableDeclaration",
                  "kind": "var",
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
                            "type": "TSNumberKeyword",
                            "start": 198,
                            "end": 204
                          },
                          "start": 196,
                          "end": 204
                        },
                        "start": 195,
                        "end": 204
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "bug",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 207,
                        "end": 210
                      },
                      "definite": false,
                      "start": 195,
                      "end": 210
                    }
                  ],
                  "declare": false,
                  "start": 191,
                  "end": 211
                }
              ],
              "start": 185,
              "end": 213
            },
            "expression": false,
            "start": 170,
            "end": 213
          }
        ],
        "optional": false,
        "start": 158,
        "end": 214
      },
      "directive": null,
      "start": 158,
      "end": 215
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 46,
  "end": 215
}
```
