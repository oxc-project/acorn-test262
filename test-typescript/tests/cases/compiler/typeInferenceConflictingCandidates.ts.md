__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 72,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 53,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 18,
        "decorators": [],
        "name": "g",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 22,
          "end": 26,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 23,
            "end": 26,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 25,
              "end": 26,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 25,
                "end": 26,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 28,
          "end": 32,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 29,
            "end": 32,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 31,
              "end": 32,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 31,
                "end": 32,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 34,
          "end": 48,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 35,
            "end": 48,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 37,
              "end": 48,
              "params": [
                {
                  "type": "Identifier",
                  "start": 38,
                  "end": 42,
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 39,
                    "end": 42,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 41,
                      "end": 42,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 41,
                        "end": 42,
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
                "start": 44,
                "end": 48,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 47,
                  "end": 48,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 47,
                    "end": 48,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "typeParameters": null
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 49,
        "end": 52,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 51,
          "end": 52,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 51,
            "end": 52,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 18,
        "end": 21,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 19,
            "end": 20,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 19,
              "end": 20,
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
    {
      "type": "ExpressionStatement",
      "start": 55,
      "end": 72,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 55,
        "end": 71,
        "arguments": [
          {
            "type": "Literal",
            "start": 57,
            "end": 59,
            "raw": "\"\"",
            "value": "",
            "regex": null,
            "bigint": null
          },
          {
            "type": "Literal",
            "start": 61,
            "end": 62,
            "raw": "3",
            "value": 3,
            "regex": null,
            "bigint": null
          },
          {
            "type": "ArrowFunctionExpression",
            "start": 64,
            "end": 70,
            "async": false,
            "body": {
              "type": "Identifier",
              "start": 69,
              "end": 70,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 64,
                "end": 65,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "typeParameters": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 55,
          "end": 56,
          "decorators": [],
          "name": "g",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
