A.ts
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
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 34,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 11,
            "end": 32,
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 18,
              "end": 32,
              "body": {
                "type": "TSInterfaceBody",
                "start": 30,
                "end": 32,
                "body": []
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "start": 28,
                "end": 29,
                "decorators": [],
                "name": "I",
                "optional": false
              }
            },
            "exportKind": "type",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "decorators": [],
        "name": "A",
        "optional": false
      },
      "kind": "module"
    }
  ],
  "sourceType": "module"
}
```
B.ts
```json
{
  "type": "Program",
  "start": 45,
  "end": 117,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 45,
      "end": 59,
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
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 52,
        "end": 53,
        "decorators": [],
        "name": "A",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 60,
      "end": 115,
      "body": {
        "type": "TSModuleBlock",
        "start": 69,
        "end": 115,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 72,
            "end": 113,
            "attributes": [],
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 79,
              "end": 113,
              "async": false,
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
                      "raw": "null",
                      "value": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": {
                "type": "Identifier",
                "start": 88,
                "end": 89,
                "decorators": [],
                "name": "f",
                "optional": false
              },
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
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 95,
                      "end": 96,
                      "decorators": [],
                      "name": "I",
                      "optional": false
                    }
                  }
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 67,
        "end": 68,
        "decorators": [],
        "name": "B",
        "optional": false
      },
      "kind": "module"
    }
  ],
  "sourceType": "module"
}
```
