__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 107,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 70,
      "body": {
        "type": "TSModuleBlock",
        "start": 18,
        "end": 70,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 22,
            "end": 43,
            "attributes": [],
            "declaration": {
              "type": "TSTypeAliasDeclaration",
              "start": 29,
              "end": 43,
              "declare": false,
              "id": {
                "type": "Identifier",
                "start": 34,
                "end": 37,
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 40,
                "end": 42,
                "members": []
              },
              "typeParameters": null
            },
            "exportKind": "type",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 46,
            "end": 68,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 53,
              "end": 68,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 59,
                  "end": 67,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 59,
                    "end": 62,
                    "decorators": [],
                    "name": "Bar",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "ObjectExpression",
                    "start": 65,
                    "end": 67,
                    "properties": []
                  }
                }
              ],
              "declare": false,
              "kind": "const"
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
        "start": 10,
        "end": 17,
        "decorators": [],
        "name": "globals",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "namespace"
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 71,
      "end": 106,
      "id": {
        "type": "Identifier",
        "start": 78,
        "end": 81,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSQualifiedName",
        "start": 84,
        "end": 105,
        "left": {
          "type": "TSQualifiedName",
          "start": 84,
          "end": 100,
          "left": {
            "type": "Identifier",
            "start": 84,
            "end": 91,
            "decorators": [],
            "name": "globals",
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "Identifier",
            "start": 92,
            "end": 100,
            "decorators": [],
            "name": "toString",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Identifier",
          "start": 101,
          "end": 105,
          "decorators": [],
          "name": "Blah",
          "optional": false,
          "typeAnnotation": null
        }
      }
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
  "end": 16,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 15,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 14,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 9,
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 12,
            "end": 14,
            "properties": []
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
