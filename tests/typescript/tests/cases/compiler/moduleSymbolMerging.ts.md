__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 35,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 34,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 34,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 11,
            "end": 32,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 18,
              "end": 32,
              "id": {
                "type": "Identifier",
                "start": 28,
                "end": 29,
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "start": 30,
                "end": 32,
                "body": []
              },
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": []
          }
        ]
      },
      "kind": "module",
      "declare": false,
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
  "start": 45,
  "end": 116,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 45,
      "end": 59,
      "id": {
        "type": "Identifier",
        "start": 52,
        "end": 53,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 54,
        "end": 59,
        "body": [
          {
            "type": "EmptyStatement",
            "start": 56,
            "end": 57
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 60,
      "end": 115,
      "id": {
        "type": "Identifier",
        "start": 67,
        "end": 68,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 69,
        "end": 115,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 72,
            "end": 113,
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 79,
              "end": 113,
              "id": {
                "type": "Identifier",
                "start": 88,
                "end": 89,
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 91,
                "end": 96,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 93,
                  "end": 96,
                  "typeName": {
                    "type": "TSQualifiedName",
                    "start": 93,
                    "end": 96,
                    "left": {
                      "type": "Identifier",
                      "start": 93,
                      "end": 94,
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 95,
                      "end": 96,
                      "decorators": [],
                      "name": "I",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "typeArguments": null
                }
              },
              "body": {
                "type": "BlockStatement",
                "start": 97,
                "end": 113,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 99,
                    "end": 111,
                    "argument": {
                      "type": "Literal",
                      "start": 106,
                      "end": 110,
                      "value": null,
                      "raw": "null"
                    }
                  }
                ]
              },
              "expression": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
