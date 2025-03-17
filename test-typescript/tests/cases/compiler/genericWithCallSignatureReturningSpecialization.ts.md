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
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 11,
        "end": 14,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 12,
            "end": 13,
            "name": {
              "type": "Identifier",
              "start": 12,
              "end": 13,
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
      "body": {
        "type": "TSInterfaceBody",
        "start": 15,
        "end": 60,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 21,
            "end": 36,
            "key": {
              "type": "Identifier",
              "start": 21,
              "end": 22,
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 24,
              "end": 35,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 26,
                "end": 35,
                "typeName": {
                  "type": "Identifier",
                  "start": 26,
                  "end": 27,
                  "name": "B",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                }
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSCallSignatureDeclaration",
            "start": 41,
            "end": 58,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 42,
                "end": 50,
                "name": "value",
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
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 65,
            "end": 78,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 66,
              "end": 78,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 68,
                "end": 78,
                "typeName": {
                  "type": "Identifier",
                  "start": 68,
                  "end": 69,
                  "name": "B",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 80,
      "end": 88,
      "expression": {
        "type": "CallExpression",
        "start": 80,
        "end": 87,
        "callee": {
          "type": "Identifier",
          "start": 80,
          "end": 81,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 82,
            "end": 86,
            "value": true,
            "raw": "true"
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
