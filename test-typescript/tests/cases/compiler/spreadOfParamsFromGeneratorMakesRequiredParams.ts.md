__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 169,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 106,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 21,
        "name": "call",
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
          "start": 63,
          "end": 69,
          "name": "fn",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 65,
            "end": 69,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 67,
              "end": 69,
              "typeName": {
                "type": "Identifier",
                "start": 67,
                "end": 69,
                "name": "Fn",
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
        {
          "type": "RestElement",
          "start": 75,
          "end": 98,
          "argument": {
            "type": "Identifier",
            "start": 78,
            "end": 82,
            "name": "args",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 82,
            "end": 98,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 84,
              "end": 98,
              "typeName": {
                "type": "Identifier",
                "start": 84,
                "end": 94,
                "name": "Parameters",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 94,
                "end": 98,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 95,
                    "end": 97,
                    "typeName": {
                      "type": "Identifier",
                      "start": 95,
                      "end": 97,
                      "name": "Fn",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          },
          "value": null
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 21,
        "end": 57,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 22,
            "end": 56,
            "name": {
              "type": "Identifier",
              "start": 22,
              "end": 24,
              "name": "Fn",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSFunctionType",
              "start": 33,
              "end": 56,
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "start": 34,
                  "end": 48,
                  "argument": {
                    "type": "Identifier",
                    "start": 37,
                    "end": 41,
                    "name": "args",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 41,
                    "end": 48,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 43,
                      "end": 48,
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 43,
                        "end": 46
                      }
                    }
                  },
                  "value": null
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 50,
                "end": 56,
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 53,
                  "end": 56
                }
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 100,
        "end": 105,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 102,
          "end": 105
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 108,
      "end": 137,
      "expression": {
        "type": "CallExpression",
        "start": 108,
        "end": 136,
        "callee": {
          "type": "Identifier",
          "start": 108,
          "end": 112,
          "name": "call",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "FunctionExpression",
            "start": 113,
            "end": 135,
            "id": null,
            "expression": false,
            "generator": true,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 124,
                "end": 130,
                "name": "a",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 125,
                  "end": 130,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 127,
                    "end": 130,
                    "literal": {
                      "type": "Literal",
                      "start": 127,
                      "end": 130,
                      "value": "a",
                      "raw": "'a'"
                    }
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "BlockStatement",
              "start": 132,
              "end": 135,
              "body": []
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
