__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 59,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 58,
      "id": {
        "type": "Identifier",
        "start": 18,
        "end": 24,
        "decorators": [],
        "name": "NodeJS",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 25,
        "end": 58,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 29,
            "end": 56,
            "id": {
              "type": "Identifier",
              "start": 39,
              "end": 53,
              "decorators": [],
              "name": "ReadableStream",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "start": 54,
              "end": 56,
              "body": []
            },
            "declare": false
          }
        ]
      },
      "kind": "namespace",
      "declare": true,
      "global": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 38,
  "end": 38,
  "body": [],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 47,
  "end": 130,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 47,
      "end": 130,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 54,
        "end": 130,
        "id": {
          "type": "Identifier",
          "start": 69,
          "end": 80,
          "decorators": [],
          "name": "drainStream",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": true,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "start": 81,
            "end": 110,
            "decorators": [],
            "name": "stream",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 87,
              "end": 110,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 89,
                "end": 110,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 89,
                  "end": 110,
                  "left": {
                    "type": "Identifier",
                    "start": 89,
                    "end": 95,
                    "decorators": [],
                    "name": "NodeJS",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 96,
                    "end": 110,
                    "decorators": [],
                    "name": "ReadableStream",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "typeArguments": null
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 111,
          "end": 126,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 113,
            "end": 126,
            "typeName": {
              "type": "Identifier",
              "start": 113,
              "end": 120,
              "decorators": [],
              "name": "Promise",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 120,
              "end": 126,
              "params": [
                {
                  "type": "TSVoidKeyword",
                  "start": 121,
                  "end": 125
                }
              ]
            }
          }
        },
        "body": {
          "type": "BlockStatement",
          "start": 127,
          "end": 130,
          "body": []
        },
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
