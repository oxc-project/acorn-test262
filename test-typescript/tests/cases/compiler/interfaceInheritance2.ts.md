__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 74,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 26,
      "body": {
        "type": "TSInterfaceBody",
        "start": 13,
        "end": 26,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 16,
            "end": 24,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 18,
              "end": 23,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 19,
                "end": 23
              }
            },
            "typeParameters": null
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 12,
        "decorators": [],
        "name": "I6",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 28,
      "end": 55,
      "body": {
        "type": "TSInterfaceBody",
        "start": 52,
        "end": 55,
        "body": []
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 49,
          "end": 51,
          "expression": {
            "type": "Identifier",
            "start": 49,
            "end": 51,
            "decorators": [],
            "name": "I6",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 38,
        "end": 40,
        "decorators": [],
        "name": "I7",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 57,
      "end": 67,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 61,
          "end": 66,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 61,
            "end": 66,
            "decorators": [],
            "name": "v1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 63,
              "end": 66,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 64,
                "end": 66,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 64,
                  "end": 66,
                  "decorators": [],
                  "name": "I7",
                  "optional": false,
                  "typeAnnotation": null
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
      "start": 68,
      "end": 73,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 68,
        "end": 72,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 68,
          "end": 70,
          "decorators": [],
          "name": "v1",
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
