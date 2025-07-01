__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "F",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 10
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 11,
              "end": 12
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 11,
            "end": 12
          }
        ],
        "start": 10,
        "end": 13
      },
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "expr",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 30,
                        "end": 31
                      },
                      "typeArguments": null,
                      "start": 30,
                      "end": 31
                    },
                    "start": 28,
                    "end": 31
                  },
                  "start": 24,
                  "end": 31
                },
                "init": null,
                "definite": false,
                "start": 24,
                "end": 31
              }
            ],
            "declare": false,
            "start": 20,
            "end": 32
          },
          {
            "type": "ForInStatement",
            "left": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 44,
                    "end": 45
                  },
                  "init": null,
                  "definite": false,
                  "start": 44,
                  "end": 45
                }
              ],
              "declare": false,
              "start": 40,
              "end": 45
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "expr",
              "optional": false,
              "typeAnnotation": null,
              "start": 49,
              "end": 53
            },
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 55,
              "end": 60
            },
            "start": 35,
            "end": 60
          }
        ],
        "start": 16,
        "end": 62
      },
      "expression": false,
      "start": 0,
      "end": 62
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 62
}
```
