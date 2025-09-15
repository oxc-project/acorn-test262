__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 18,
        "end": 21
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 39,
              "end": 42
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [],
              "start": 43,
              "end": 51
            },
            "declare": false,
            "start": 29,
            "end": 51
          }
        ],
        "start": 22,
        "end": 53
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 53
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 64,
                    "end": 67
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Bar",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 68,
                    "end": 71
                  },
                  "start": 64,
                  "end": 71
                },
                "typeArguments": null,
                "start": 64,
                "end": 71
              },
              "start": 62,
              "end": 71
            },
            "start": 59,
            "end": 71
          },
          "init": null,
          "definite": false,
          "start": 59,
          "end": 71
        }
      ],
      "declare": false,
      "start": 55,
      "end": 72
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 73
}
```
