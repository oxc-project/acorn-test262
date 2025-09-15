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
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null,
                "start": 31,
                "end": 32
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 33,
                "end": 35
              },
              "declare": false,
              "start": 21,
              "end": 35
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 14,
            "end": 35
          }
        ],
        "start": 12,
        "end": 37
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 37
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 38
}
```
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
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 55,
        "end": 56
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "EmptyStatement",
            "start": 59,
            "end": 60
          }
        ],
        "start": 57,
        "end": 62
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 45,
      "end": 62
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 73,
        "end": 74
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 94,
                "end": 95
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "TSQualifiedName",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 99,
                      "end": 100
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "I",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 101,
                      "end": 102
                    },
                    "start": 99,
                    "end": 102
                  },
                  "typeArguments": null,
                  "start": 99,
                  "end": 102
                },
                "start": 97,
                "end": 102
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 112,
                      "end": 116
                    },
                    "start": 105,
                    "end": 117
                  }
                ],
                "start": 103,
                "end": 119
              },
              "expression": false,
              "start": 85,
              "end": 119
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 78,
            "end": 119
          }
        ],
        "start": 75,
        "end": 121
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 63,
      "end": 121
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 45,
  "end": 122
}
```
