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
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 21,
        "decorators": [],
        "name": "call",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 63,
          "end": 69,
          "decorators": [],
          "name": "fn",
          "optional": false,
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
                "decorators": [],
                "name": "Fn",
                "optional": false
              }
            }
          }
        },
        {
          "type": "RestElement",
          "start": 75,
          "end": 98,
          "argument": {
            "type": "Identifier",
            "start": 78,
            "end": 82,
            "decorators": [],
            "name": "args",
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
                      "decorators": [],
                      "name": "Fn",
                      "optional": false
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 84,
                "end": 94,
                "decorators": [],
                "name": "Parameters",
                "optional": false
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 100,
        "end": 105,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 102,
          "end": 105
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 21,
        "end": 57,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 22,
            "end": 56,
            "const": false,
            "constraint": {
              "type": "TSFunctionType",
              "start": 33,
              "end": 56,
              "params": [
                {
                  "type": "RestElement",
                  "start": 34,
                  "end": 48,
                  "argument": {
                    "type": "Identifier",
                    "start": 37,
                    "end": 41,
                    "decorators": [],
                    "name": "args",
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
                  }
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
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 22,
              "end": 24,
              "decorators": [],
              "name": "Fn",
              "optional": false
            },
            "out": false
          }
        ]
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
        "arguments": [
          {
            "type": "FunctionExpression",
            "start": 113,
            "end": 135,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 132,
              "end": 135,
              "body": []
            },
            "declare": false,
            "expression": false,
            "generator": true,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 124,
                "end": 130,
                "decorators": [],
                "name": "a",
                "optional": false,
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
                      "raw": "'a'",
                      "value": "a"
                    }
                  }
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 108,
          "end": 112,
          "decorators": [],
          "name": "call",
          "optional": false
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
