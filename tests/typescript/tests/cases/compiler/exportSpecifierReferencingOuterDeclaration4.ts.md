__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 46,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 45,
      "id": {
        "type": "Identifier",
        "start": 15,
        "end": 16,
        "decorators": [],
        "name": "X",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 17,
        "end": 45,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 19,
            "end": 43,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 26,
              "end": 43,
              "id": {
                "type": "Identifier",
                "start": 36,
                "end": 39,
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "start": 40,
                "end": 43,
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
  "start": 0,
  "end": 144,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 45,
      "id": {
        "type": "Identifier",
        "start": 15,
        "end": 16,
        "decorators": [],
        "name": "X",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 17,
        "end": 45,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 19,
            "end": 43,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 26,
              "end": 43,
              "id": {
                "type": "Identifier",
                "start": 36,
                "end": 39,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "start": 40,
                "end": 43,
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
      "declare": true,
      "global": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 46,
      "end": 59,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 55,
          "end": 56,
          "local": {
            "type": "Identifier",
            "start": 55,
            "end": 56,
            "decorators": [],
            "name": "X",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 55,
            "end": 56,
            "decorators": [],
            "name": "X",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value"
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 60,
      "end": 97,
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 67,
        "end": 97,
        "id": {
          "type": "Identifier",
          "start": 84,
          "end": 87,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": true,
        "typeParameters": null,
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 89,
          "end": 96,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 91,
            "end": 96,
            "typeName": {
              "type": "TSQualifiedName",
              "start": 91,
              "end": 96,
              "left": {
                "type": "Identifier",
                "start": 91,
                "end": 92,
                "decorators": [],
                "name": "X",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 93,
                "end": 96,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "typeArguments": null
          }
        },
        "body": null,
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 98,
      "end": 135,
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 105,
        "end": 135,
        "id": {
          "type": "Identifier",
          "start": 122,
          "end": 125,
          "decorators": [],
          "name": "bar",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": true,
        "typeParameters": null,
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 127,
          "end": 134,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 129,
            "end": 134,
            "typeName": {
              "type": "TSQualifiedName",
              "start": 129,
              "end": 134,
              "left": {
                "type": "Identifier",
                "start": 129,
                "end": 130,
                "decorators": [],
                "name": "X",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 131,
                "end": 134,
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "typeArguments": null
          }
        },
        "body": null,
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
