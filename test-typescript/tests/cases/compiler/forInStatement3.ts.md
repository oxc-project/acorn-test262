__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 62,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 62,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 10,
        "name": "F",
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
        "start": 16,
        "end": 62,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 20,
            "end": 32,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 24,
                "end": 31,
                "id": {
                  "type": "Identifier",
                  "start": 24,
                  "end": 31,
                  "name": "expr",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 28,
                    "end": 31,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 30,
                      "end": 31,
                      "typeName": {
                        "type": "Identifier",
                        "start": 30,
                        "end": 31,
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
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "ForInStatement",
            "start": 35,
            "end": 60,
            "left": {
              "type": "VariableDeclaration",
              "start": 40,
              "end": 45,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 44,
                  "end": 45,
                  "id": {
                    "type": "Identifier",
                    "start": 44,
                    "end": 45,
                    "name": "a",
                    "typeAnnotation": null,
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
            "right": {
              "type": "Identifier",
              "start": 49,
              "end": 53,
              "name": "expr",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "BlockStatement",
              "start": 55,
              "end": 60,
              "body": []
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 10,
        "end": 13,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 11,
            "end": 12,
            "name": {
              "type": "Identifier",
              "start": 11,
              "end": 12,
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
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
