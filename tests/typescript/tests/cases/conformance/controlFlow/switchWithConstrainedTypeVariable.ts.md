__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "function1",
        "optional": false,
        "typeAnnotation": null,
        "start": 31,
        "end": 40
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "start": 41,
              "end": 42
            },
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "a",
                    "raw": "'a'",
                    "start": 51,
                    "end": 54
                  },
                  "start": 51,
                  "end": 54
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "b",
                    "raw": "'b'",
                    "start": 57,
                    "end": 60
                  },
                  "start": 57,
                  "end": 60
                }
              ],
              "start": 51,
              "end": 60
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 41,
            "end": 60
          }
        ],
        "start": 40,
        "end": 61
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "key",
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
                "start": 67,
                "end": 68
              },
              "typeArguments": null,
              "start": 67,
              "end": 68
            },
            "start": 65,
            "end": 68
          },
          "start": 62,
          "end": 68
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "Identifier",
              "decorators": [],
              "name": "key",
              "optional": false,
              "typeAnnotation": null,
              "start": 82,
              "end": 85
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "a",
                  "raw": "'a'",
                  "start": 98,
                  "end": 101
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "key",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 109,
                          "end": 112
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "toLowerCase",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 113,
                          "end": 124
                        },
                        "optional": false,
                        "computed": false,
                        "start": 109,
                        "end": 124
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 109,
                      "end": 126
                    },
                    "directive": null,
                    "start": 109,
                    "end": 127
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 134,
                    "end": 140
                  }
                ],
                "start": 93,
                "end": 140
              },
              {
                "type": "SwitchCase",
                "test": null,
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "key",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 160,
                          "end": 163
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "toLowerCase",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 164,
                          "end": 175
                        },
                        "optional": false,
                        "computed": false,
                        "start": 160,
                        "end": 175
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 160,
                      "end": 177
                    },
                    "directive": null,
                    "start": 160,
                    "end": 178
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 185,
                    "end": 191
                  }
                ],
                "start": 145,
                "end": 191
              }
            ],
            "start": 74,
            "end": 195
          }
        ],
        "start": 70,
        "end": 197
      },
      "expression": false,
      "start": 22,
      "end": 197
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 22,
  "end": 197
}
```
