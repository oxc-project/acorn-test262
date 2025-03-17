__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 134,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 55,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 18,
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
          "start": 22,
          "end": 50,
          "name": "predicate",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 31,
            "end": 50,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 33,
              "end": 50,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 34,
                  "end": 39,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 35,
                    "end": 39,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 37,
                      "end": 39,
                      "members": []
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 41,
                "end": 50,
                "typeAnnotation": {
                  "type": "TSTypePredicate",
                  "start": 44,
                  "end": 50,
                  "parameterName": {
                    "type": "Identifier",
                    "start": 44,
                    "end": 45,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "asserts": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 49,
                    "end": 50,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 49,
                      "end": 50,
                      "typeName": {
                        "type": "Identifier",
                        "start": 49,
                        "end": 50,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  }
                }
              }
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
        "start": 18,
        "end": 21,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 19,
            "end": 20,
            "name": {
              "type": "Identifier",
              "start": 19,
              "end": 20,
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
        "start": 51,
        "end": 54,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 53,
          "end": 54,
          "typeName": {
            "type": "Identifier",
            "start": 53,
            "end": 54,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 93,
      "end": 133,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 99,
          "end": 132,
          "id": {
            "type": "Identifier",
            "start": 99,
            "end": 102,
            "name": "res",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 105,
            "end": 132,
            "callee": {
              "type": "Identifier",
              "start": 105,
              "end": 106,
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 107,
                "end": 131,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 108,
                    "end": 109,
                    "name": "n",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "Literal",
                  "start": 127,
                  "end": 131,
                  "value": true,
                  "raw": "true"
                },
                "typeParameters": null,
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 110,
                  "end": 123,
                  "typeAnnotation": {
                    "type": "TSTypePredicate",
                    "start": 112,
                    "end": 123,
                    "parameterName": {
                      "type": "Identifier",
                      "start": 112,
                      "end": 113,
                      "name": "n",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "asserts": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 117,
                      "end": 123,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 117,
                        "end": 123
                      }
                    }
                  }
                }
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
