__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 197,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 22,
      "end": 197,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 70,
        "end": 197,
        "body": [
          {
            "type": "SwitchStatement",
            "start": 74,
            "end": 195,
            "cases": [
              {
                "type": "SwitchCase",
                "start": 93,
                "end": 140,
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 109,
                    "end": 127,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 109,
                      "end": 126,
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 109,
                        "end": 124,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 109,
                          "end": 112,
                          "decorators": [],
                          "name": "key",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 113,
                          "end": 124,
                          "decorators": [],
                          "name": "toLowerCase",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  },
                  {
                    "type": "BreakStatement",
                    "start": 134,
                    "end": 140,
                    "label": null
                  }
                ],
                "test": {
                  "type": "Literal",
                  "start": 98,
                  "end": 101,
                  "raw": "'a'",
                  "value": "a",
                  "regex": null,
                  "bigint": null
                }
              },
              {
                "type": "SwitchCase",
                "start": 145,
                "end": 191,
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 160,
                    "end": 178,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 160,
                      "end": 177,
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 160,
                        "end": 175,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 160,
                          "end": 163,
                          "decorators": [],
                          "name": "key",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 164,
                          "end": 175,
                          "decorators": [],
                          "name": "toLowerCase",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  },
                  {
                    "type": "BreakStatement",
                    "start": 185,
                    "end": 191,
                    "label": null
                  }
                ],
                "test": null
              }
            ],
            "discriminant": {
              "type": "Identifier",
              "start": 82,
              "end": 85,
              "decorators": [],
              "name": "key",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 31,
        "end": 40,
        "decorators": [],
        "name": "function1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 62,
          "end": 68,
          "decorators": [],
          "name": "key",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 65,
            "end": 68,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 67,
              "end": 68,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 67,
                "end": 68,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 40,
        "end": 61,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 41,
            "end": 60,
            "const": false,
            "constraint": {
              "type": "TSUnionType",
              "start": 51,
              "end": 60,
              "types": [
                {
                  "type": "TSLiteralType",
                  "start": 51,
                  "end": 54,
                  "literal": {
                    "type": "Literal",
                    "start": 51,
                    "end": 54,
                    "raw": "'a'",
                    "value": "a",
                    "regex": null,
                    "bigint": null
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 57,
                  "end": 60,
                  "literal": {
                    "type": "Literal",
                    "start": 57,
                    "end": 60,
                    "raw": "'b'",
                    "value": "b",
                    "regex": null,
                    "bigint": null
                  }
                }
              ]
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 41,
              "end": 42,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
