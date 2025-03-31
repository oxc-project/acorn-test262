__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 60,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 36,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 10,
        "name": "f",
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
          "start": 11,
          "end": 31,
          "name": "p",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 12,
            "end": 31,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 14,
              "end": 31,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 14,
                "end": 17,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 15,
                    "end": 16,
                    "name": {
                      "type": "Identifier",
                      "start": 15,
                      "end": 16,
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
              "params": [
                {
                  "type": "Identifier",
                  "start": 18,
                  "end": 22,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 19,
                    "end": 22,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 21,
                      "end": 22,
                      "typeName": {
                        "type": "Identifier",
                        "start": 21,
                        "end": 22,
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
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 24,
                "end": 31,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 27,
                  "end": 31
                }
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 33,
        "end": 36,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "EmptyStatement",
      "start": 36,
      "end": 37
    },
    {
      "type": "ExpressionStatement",
      "start": 38,
      "end": 60,
      "expression": {
        "type": "CallExpression",
        "start": 38,
        "end": 59,
        "callee": {
          "type": "Identifier",
          "start": 38,
          "end": 39,
          "name": "f",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 40,
            "end": 58,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 40,
                "end": 41,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "CallExpression",
              "start": 45,
              "end": 58,
              "callee": {
                "type": "Identifier",
                "start": 45,
                "end": 46,
                "name": "f",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "start": 47,
                  "end": 57,
                  "id": null,
                  "expression": true,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 47,
                      "end": 48,
                      "name": "y",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "AssignmentExpression",
                    "start": 52,
                    "end": 57,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 52,
                      "end": 53,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 56,
                      "end": 57,
                      "name": "y",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "typeParameters": null,
                  "returnType": null
                }
              ],
              "optional": false,
              "typeArguments": null
            },
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
