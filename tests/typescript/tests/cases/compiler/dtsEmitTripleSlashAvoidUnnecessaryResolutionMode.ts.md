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
      "body": {
        "type": "TSModuleBlock",
        "start": 25,
        "end": 58,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 29,
            "end": 56,
            "body": {
              "type": "TSInterfaceBody",
              "start": 54,
              "end": 56,
              "body": []
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 39,
              "end": 53,
              "decorators": [],
              "name": "ReadableStream",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 18,
        "end": 24,
        "decorators": [],
        "name": "NodeJS",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "namespace"
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
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 54,
        "end": 130,
        "async": true,
        "body": {
          "type": "BlockStatement",
          "start": 127,
          "end": 130,
          "body": []
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 69,
          "end": 80,
          "decorators": [],
          "name": "drainStream",
          "optional": false,
          "typeAnnotation": null
        },
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
                "typeArguments": null,
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
                }
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
            },
            "typeName": {
              "type": "Identifier",
              "start": 113,
              "end": 120,
              "decorators": [],
              "name": "Promise",
              "optional": false,
              "typeAnnotation": null
            }
          }
        },
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
