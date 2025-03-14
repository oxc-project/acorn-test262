__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 102,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 60,
      "body": {
        "type": "TSInterfaceBody",
        "start": 15,
        "end": 60,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 21,
            "end": 36,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 21,
              "end": 22,
              "decorators": [],
              "name": "f",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 24,
              "end": 35,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 26,
                "end": 35,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 27,
                  "end": 35,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 28,
                      "end": 34
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 26,
                  "end": 27,
                  "decorators": [],
                  "name": "B",
                  "optional": false
                }
              }
            },
            "static": false
          },
          {
            "type": "TSCallSignatureDeclaration",
            "start": 41,
            "end": 58,
            "params": [
              {
                "type": "Identifier",
                "start": 42,
                "end": 50,
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 47,
                  "end": 50,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 49,
                    "end": 50,
                    "typeName": {
                      "type": "Identifier",
                      "start": 49,
                      "end": 50,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 51,
              "end": 57,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 53,
                "end": 57
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "decorators": [],
        "name": "B",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 11,
        "end": 14,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 12,
            "end": 13,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 12,
              "end": 13,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 61,
      "end": 79,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 65,
          "end": 78,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 65,
            "end": 78,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 66,
              "end": 78,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 68,
                "end": 78,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 69,
                  "end": 78,
                  "params": [
                    {
                      "type": "TSBooleanKeyword",
                      "start": 70,
                      "end": 77
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 68,
                  "end": 69,
                  "decorators": [],
                  "name": "B",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 80,
      "end": 88,
      "expression": {
        "type": "CallExpression",
        "start": 80,
        "end": 87,
        "arguments": [
          {
            "type": "Literal",
            "start": 82,
            "end": 86,
            "raw": "true",
            "value": true
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 80,
          "end": 81,
          "decorators": [],
          "name": "x",
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
