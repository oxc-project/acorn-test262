__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I6",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 12
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 19,
                "end": 23
              },
              "start": 18,
              "end": 23
            },
            "start": 16,
            "end": 24
          }
        ],
        "start": 13,
        "end": 26
      },
      "declare": false,
      "start": 0,
      "end": 26
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I7",
        "optional": false,
        "typeAnnotation": null,
        "start": 38,
        "end": 40
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "I6",
            "optional": false,
            "typeAnnotation": null,
            "start": 49,
            "end": 51
          },
          "typeArguments": null,
          "start": 49,
          "end": 51
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 52,
        "end": 55
      },
      "declare": false,
      "start": 28,
      "end": 55
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "v1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I7",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 64,
                  "end": 66
                },
                "typeArguments": null,
                "start": 64,
                "end": 66
              },
              "start": 63,
              "end": 66
            },
            "start": 61,
            "end": 66
          },
          "init": null,
          "definite": false,
          "start": 61,
          "end": 66
        }
      ],
      "declare": false,
      "start": 57,
      "end": 67
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "v1",
          "optional": false,
          "typeAnnotation": null,
          "start": 68,
          "end": 70
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 68,
        "end": 72
      },
      "directive": null,
      "start": 68,
      "end": 73
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 73
}
```
