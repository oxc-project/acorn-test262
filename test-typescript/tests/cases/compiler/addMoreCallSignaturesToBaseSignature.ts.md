__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 122,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 33,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 13,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 14,
        "end": 33,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 20,
            "end": 31,
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 22,
              "end": 30,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 24,
                "end": 30
              }
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 35,
      "end": 91,
      "id": {
        "type": "Identifier",
        "start": 45,
        "end": 48,
        "name": "Bar",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 57,
          "end": 60,
          "expression": {
            "type": "Identifier",
            "start": 57,
            "end": 60,
            "name": "Foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 61,
        "end": 91,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 67,
            "end": 89,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 68,
                "end": 79,
                "name": "key",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 71,
                  "end": 79,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 73,
                    "end": 79
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 80,
              "end": 88,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 82,
                "end": 88
              }
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 93,
      "end": 104,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 97,
          "end": 103,
          "id": {
            "type": "Identifier",
            "start": 97,
            "end": 103,
            "name": "a",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 98,
              "end": 103,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 100,
                "end": 103,
                "typeName": {
                  "type": "Identifier",
                  "start": 100,
                  "end": 103,
                  "name": "Bar",
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
      "start": 105,
      "end": 121,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 109,
          "end": 120,
          "id": {
            "type": "Identifier",
            "start": 109,
            "end": 114,
            "name": "kitty",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 117,
            "end": 120,
            "callee": {
              "type": "Identifier",
              "start": 117,
              "end": 118,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
