__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 115,
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "start": 0,
      "end": 33,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 15,
        "end": 33,
        "id": {
          "type": "Identifier",
          "start": 24,
          "end": 27,
          "name": "Foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": false,
        "async": false,
        "params": [],
        "body": {
          "type": "BlockStatement",
          "start": 30,
          "end": 33,
          "body": []
        },
        "declare": false,
        "typeParameters": null,
        "returnType": null
      },
      "exportKind": "value"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 35,
      "end": 70,
      "id": {
        "type": "Identifier",
        "start": 45,
        "end": 48,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 49,
        "end": 70,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 55,
            "end": 68,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 62,
              "end": 68,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 66,
                  "end": 67,
                  "id": {
                    "type": "Identifier",
                    "start": 66,
                    "end": 67,
                    "name": "x",
                    "typeAnnotation": null,
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
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          }
        ]
      },
      "kind": "namespace",
      "declare": false,
      "global": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 72,
      "end": 89,
      "id": {
        "type": "Identifier",
        "start": 82,
        "end": 85,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 86,
        "end": 89,
        "body": []
      },
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 91,
      "end": 115,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 98,
        "end": 115,
        "id": {
          "type": "Identifier",
          "start": 108,
          "end": 111,
          "name": "Foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "extends": [],
        "typeParameters": null,
        "body": {
          "type": "TSInterfaceBody",
          "start": 112,
          "end": 115,
          "body": []
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
