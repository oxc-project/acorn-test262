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
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 33,
        "end": 36,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 10,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 11,
          "end": 31,
          "decorators": [],
          "name": "p",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 12,
            "end": 31,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 14,
              "end": 31,
              "params": [
                {
                  "type": "Identifier",
                  "start": 18,
                  "end": 22,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 19,
                    "end": 22,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 21,
                      "end": 22,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 21,
                        "end": 22,
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
                "start": 24,
                "end": 31,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 27,
                  "end": 31
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 14,
                "end": 17,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 15,
                    "end": 16,
                    "const": false,
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 15,
                      "end": 16,
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
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
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
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 38,
        "end": 59,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 40,
            "end": 58,
            "async": false,
            "body": {
              "type": "CallExpression",
              "start": 45,
              "end": 58,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "start": 47,
                  "end": 57,
                  "async": false,
                  "body": {
                    "type": "AssignmentExpression",
                    "start": 52,
                    "end": 57,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 52,
                      "end": 53,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 56,
                      "end": 57,
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 47,
                      "end": 48,
                      "decorators": [],
                      "name": "y",
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
                "start": 45,
                "end": 46,
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 40,
                "end": 41,
                "decorators": [],
                "name": "x",
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
          "start": 38,
          "end": 39,
          "decorators": [],
          "name": "f",
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
