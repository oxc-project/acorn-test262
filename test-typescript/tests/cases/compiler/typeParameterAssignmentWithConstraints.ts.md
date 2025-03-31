__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 102,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 102,
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
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 29,
        "end": 102,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 35,
            "end": 44,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 39,
                "end": 43,
                "id": {
                  "type": "Identifier",
                  "start": 39,
                  "end": 43,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 40,
                    "end": 43,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 42,
                      "end": 43,
                      "typeName": {
                        "type": "Identifier",
                        "start": 42,
                        "end": 43,
                        "name": "A",
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
                "init": null,
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 49,
            "end": 58,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 53,
                "end": 57,
                "id": {
                  "type": "Identifier",
                  "start": 53,
                  "end": 57,
                  "name": "b",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 54,
                    "end": 57,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 56,
                      "end": 57,
                      "typeName": {
                        "type": "Identifier",
                        "start": 56,
                        "end": 57,
                        "name": "B",
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
                "init": null,
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 63,
            "end": 69,
            "expression": {
              "type": "AssignmentExpression",
              "start": 63,
              "end": 68,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 63,
                "end": 64,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 67,
                "end": 68,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 10,
        "end": 26,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 11,
            "end": 12,
            "name": {
              "type": "Identifier",
              "start": 11,
              "end": 12,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 14,
            "end": 25,
            "name": {
              "type": "Identifier",
              "start": 14,
              "end": 15,
              "name": "B",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 24,
              "end": 25,
              "typeName": {
                "type": "Identifier",
                "start": 24,
                "end": 25,
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
