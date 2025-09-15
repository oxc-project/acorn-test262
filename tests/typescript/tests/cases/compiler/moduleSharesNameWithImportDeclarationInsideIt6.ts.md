__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "TSQualifiedName",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "Z",
          "optional": false,
          "typeAnnotation": null,
          "start": 10,
          "end": 11
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "M",
          "optional": false,
          "typeAnnotation": null,
          "start": 12,
          "end": 13
        },
        "start": 10,
        "end": 13
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
                "name": "bar",
                "optional": false,
                "typeAnnotation": null,
                "start": 36,
                "end": 39
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": "",
                      "raw": "\"\"",
                      "start": 59,
                      "end": 61
                    },
                    "start": 52,
                    "end": 62
                  }
                ],
                "start": 42,
                "end": 68
              },
              "expression": false,
              "start": 27,
              "end": 68
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 20,
            "end": 68
          }
        ],
        "start": 14,
        "end": 70
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 70
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "TSQualifiedName",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "A",
          "optional": false,
          "typeAnnotation": null,
          "start": 81,
          "end": 82
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "M",
          "optional": false,
          "typeAnnotation": null,
          "start": 83,
          "end": 84
        },
        "start": 81,
        "end": 84
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null,
              "start": 98,
              "end": 99
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "Z",
                "optional": false,
                "typeAnnotation": null,
                "start": 102,
                "end": 103
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "M",
                "optional": false,
                "typeAnnotation": null,
                "start": 104,
                "end": 105
              },
              "start": 102,
              "end": 105
            },
            "importKind": "value",
            "start": 91,
            "end": 106
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null,
                "start": 127,
                "end": 130
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 133,
                "end": 140
              },
              "expression": false,
              "start": 118,
              "end": 140
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 111,
            "end": 140
          }
        ],
        "start": 85,
        "end": 142
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 71,
      "end": 142
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 142
}
```
