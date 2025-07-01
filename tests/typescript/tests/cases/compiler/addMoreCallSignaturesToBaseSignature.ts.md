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
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 13
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
                "type": "TSStringKeyword",
                "start": 24,
                "end": 30
              },
              "start": 22,
              "end": 30
            },
            "start": 20,
            "end": 31
          }
        ],
        "start": 14,
        "end": 33
      },
      "declare": false,
      "start": 0,
      "end": 33
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 45,
        "end": 48
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 57,
            "end": 60
          },
          "typeArguments": null,
          "start": 57,
          "end": 60
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 73,
                    "end": 79
                  },
                  "start": 71,
                  "end": 79
                },
                "start": 68,
                "end": 79
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 82,
                "end": 88
              },
              "start": 80,
              "end": 88
            },
            "start": 67,
            "end": 89
          }
        ],
        "start": 61,
        "end": 91
      },
      "declare": false,
      "start": 35,
      "end": 91
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
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Bar",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 100,
                  "end": 103
                },
                "typeArguments": null,
                "start": 100,
                "end": 103
              },
              "start": 98,
              "end": 103
            },
            "start": 97,
            "end": 103
          },
          "init": null,
          "definite": false,
          "start": 97,
          "end": 103
        }
      ],
      "declare": false,
      "start": 93,
      "end": 104
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
            "name": "kitty",
            "optional": false,
            "typeAnnotation": null,
            "start": 109,
            "end": 114
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 117,
              "end": 118
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 117,
            "end": 120
          },
          "definite": false,
          "start": 109,
          "end": 120
        }
      ],
      "declare": false,
      "start": 105,
      "end": 121
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 121
}
```
