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
        "name": "isBig",
        "optional": false,
        "typeAnnotation": null,
        "start": 17,
        "end": 22
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 26,
              "end": 29
            },
            "start": 24,
            "end": 29
          },
          "start": 23,
          "end": 29
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 32,
            "end": 33
          },
          "asserts": false,
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
                    "name": "big",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 39,
                    "end": 42
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": true,
                        "raw": "true",
                        "start": 44,
                        "end": 48
                      },
                      "start": 44,
                      "end": 48
                    },
                    "start": 42,
                    "end": 48
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 39,
                  "end": 48
                }
              ],
              "start": 37,
              "end": 50
            },
            "start": 37,
            "end": 50
          },
          "start": 32,
          "end": 50
        },
        "start": 30,
        "end": 50
      },
      "body": null,
      "expression": false,
      "start": 0,
      "end": 51
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "bigger",
        "optional": false,
        "typeAnnotation": null,
        "start": 61,
        "end": 67
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "this",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "members": [],
              "start": 74,
              "end": 76
            },
            "start": 72,
            "end": 76
          },
          "start": 68,
          "end": 76
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "isBig",
                "optional": false,
                "typeAnnotation": null,
                "start": 88,
                "end": 93
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ThisExpression",
                  "start": 94,
                  "end": 98
                }
              ],
              "optional": false,
              "start": 88,
              "end": 99
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "ThisExpression",
                      "start": 111,
                      "end": 115
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "big",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 116,
                      "end": 119
                    },
                    "optional": false,
                    "computed": false,
                    "start": 111,
                    "end": 119
                  },
                  "directive": null,
                  "start": 111,
                  "end": 120
                }
              ],
              "start": 101,
              "end": 154
            },
            "alternate": null,
            "start": 84,
            "end": 154
          }
        ],
        "start": 78,
        "end": 156
      },
      "expression": false,
      "start": 52,
      "end": 156
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 167,
        "end": 170
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "this",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 177,
                  "end": 183
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 186,
                  "end": 192
                }
              ],
              "start": 177,
              "end": 192
            },
            "start": 175,
            "end": 192
          },
          "start": 171,
          "end": 192
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "UnaryExpression",
                "operator": "typeof",
                "argument": {
                  "type": "ThisExpression",
                  "start": 211,
                  "end": 215
                },
                "prefix": true,
                "start": 204,
                "end": 215
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "string",
                "raw": "\"string\"",
                "start": 220,
                "end": 228
              },
              "start": 204,
              "end": 228
            },
            "consequent": {
              "type": "BlockStatement",
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
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 249,
                            "end": 255
                          },
                          "start": 247,
                          "end": 255
                        },
                        "start": 246,
                        "end": 255
                      },
                      "init": {
                        "type": "ThisExpression",
                        "start": 258,
                        "end": 262
                      },
                      "definite": false,
                      "start": 246,
                      "end": 262
                    }
                  ],
                  "declare": false,
                  "start": 240,
                  "end": 263
                }
              ],
              "start": 230,
              "end": 269
            },
            "alternate": null,
            "start": 200,
            "end": 269
          }
        ],
        "start": 194,
        "end": 271
      },
      "expression": false,
      "start": 158,
      "end": 271
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 271
}
```
