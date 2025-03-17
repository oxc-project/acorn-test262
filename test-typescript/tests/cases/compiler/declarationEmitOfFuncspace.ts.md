__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 10,
  "end": 115,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 10,
      "end": 60,
      "id": {
        "type": "Identifier",
        "start": 19,
        "end": 31,
        "name": "ExpandoMerge",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 32,
          "end": 41,
          "name": "n",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 33,
            "end": 41,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 35,
              "end": 41
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 43,
        "end": 60,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 49,
            "end": 58,
            "argument": {
              "type": "Identifier",
              "start": 56,
              "end": 57,
              "name": "n",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSModuleDeclaration",
      "start": 61,
      "end": 114,
      "id": {
        "type": "Identifier",
        "start": 71,
        "end": 83,
        "name": "ExpandoMerge",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 84,
        "end": 114,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 90,
            "end": 112,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 97,
              "end": 112,
              "id": {
                "type": "Identifier",
                "start": 107,
                "end": 108,
                "name": "I",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [],
              "typeParameters": null,
              "body": {
                "type": "TSInterfaceBody",
                "start": 109,
                "end": 112,
                "body": []
              },
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "type"
          }
        ]
      },
      "kind": "namespace",
      "declare": false,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
