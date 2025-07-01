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
        "name": "NodeJS",
        "optional": false,
        "typeAnnotation": null,
        "start": 18,
        "end": 24
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "ReadableStream",
              "optional": false,
              "typeAnnotation": null,
              "start": 39,
              "end": 53
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [],
              "start": 54,
              "end": 56
            },
            "declare": false,
            "start": 29,
            "end": 56
          }
        ],
        "start": 25,
        "end": 58
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 58
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 59
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [],
  "sourceType": "module",
  "hashbang": null,
  "start": 38,
  "end": 38
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "drainStream",
          "optional": false,
          "typeAnnotation": null,
          "start": 69,
          "end": 80
        },
        "generator": false,
        "async": true,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "stream",
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
                    "name": "NodeJS",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 89,
                    "end": 95
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ReadableStream",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 96,
                    "end": 110
                  },
                  "start": 89,
                  "end": 110
                },
                "typeArguments": null,
                "start": 89,
                "end": 110
              },
              "start": 87,
              "end": 110
            },
            "start": 81,
            "end": 110
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Promise",
              "optional": false,
              "typeAnnotation": null,
              "start": 113,
              "end": 120
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSVoidKeyword",
                  "start": 121,
                  "end": 125
                }
              ],
              "start": 120,
              "end": 126
            },
            "start": 113,
            "end": 126
          },
          "start": 111,
          "end": 126
        },
        "body": {
          "type": "BlockStatement",
          "body": [],
          "start": 127,
          "end": 130
        },
        "expression": false,
        "start": 54,
        "end": 130
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 47,
      "end": 130
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 47,
  "end": 130
}
```
