__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 158,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 58,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 34,
        "name": "someOtherFunction",
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
          "start": 35,
          "end": 41,
          "name": "i",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 36,
            "end": 41,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 38,
              "end": 41
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 42,
        "end": 57,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 44,
          "end": 57,
          "typeName": {
            "type": "Identifier",
            "start": 44,
            "end": 51,
            "name": "Promise",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 51,
            "end": 57,
            "params": [
              {
                "type": "TSVoidKeyword",
                "start": 52,
                "end": 56
              }
            ]
          }
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 59,
      "end": 106,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 65,
          "end": 106,
          "id": {
            "type": "Identifier",
            "start": 65,
            "end": 66,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 69,
            "end": 106,
            "id": null,
            "expression": true,
            "generator": false,
            "async": true,
            "params": [
              {
                "type": "Identifier",
                "start": 75,
                "end": 76,
                "name": "i",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "AwaitExpression",
              "start": 80,
              "end": 106,
              "argument": {
                "type": "CallExpression",
                "start": 86,
                "end": 106,
                "callee": {
                  "type": "Identifier",
                  "start": 86,
                  "end": 103,
                  "name": "someOtherFunction",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 104,
                    "end": 105,
                    "name": "i",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "optional": false,
                "typeArguments": null
              }
            },
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 107,
      "end": 158,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 113,
          "end": 157,
          "id": {
            "type": "Identifier",
            "start": 113,
            "end": 115,
            "name": "x1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 118,
            "end": 157,
            "id": null,
            "expression": true,
            "generator": false,
            "async": true,
            "params": [
              {
                "type": "Identifier",
                "start": 125,
                "end": 126,
                "name": "i",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "AwaitExpression",
              "start": 131,
              "end": 157,
              "argument": {
                "type": "CallExpression",
                "start": 137,
                "end": 157,
                "callee": {
                  "type": "Identifier",
                  "start": 137,
                  "end": 154,
                  "name": "someOtherFunction",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 155,
                    "end": 156,
                    "name": "i",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "optional": false,
                "typeArguments": null
              }
            },
            "typeParameters": null,
            "returnType": null
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
