__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 73,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 26,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 12,
        "decorators": [],
        "name": "I6",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 13,
        "end": 26,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 16,
            "end": 24,
            "typeParameters": null,
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
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 28,
      "end": 55,
      "id": {
        "type": "Identifier",
        "start": 38,
        "end": 40,
        "decorators": [],
        "name": "I7",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
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
      "body": {
        "type": "TSInterfaceBody",
        "start": 52,
        "end": 55,
        "body": []
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 57,
      "end": 67,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 61,
          "end": 66,
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
                "typeName": {
                  "type": "Identifier",
                  "start": 64,
                  "end": 66,
                  "decorators": [],
                  "name": "I7",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 68,
      "end": 73,
      "expression": {
        "type": "CallExpression",
        "start": 68,
        "end": 72,
        "callee": {
          "type": "Identifier",
          "start": 68,
          "end": 70,
          "decorators": [],
          "name": "v1",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
