__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 119,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 46,
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 7,
        "end": 46,
        "id": {
          "type": "Identifier",
          "start": 14,
          "end": 15,
          "name": "m",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "body": {
          "type": "TSModuleBlock",
          "start": 16,
          "end": 46,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 22,
              "end": 44,
              "declaration": {
                "type": "ClassDeclaration",
                "start": 29,
                "end": 44,
                "id": {
                  "type": "Identifier",
                  "start": 35,
                  "end": 36,
                  "name": "c",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "superClass": null,
                "body": {
                  "type": "ClassBody",
                  "start": 37,
                  "end": 44,
                  "body": []
                },
                "decorators": [],
                "typeParameters": null,
                "implements": [],
                "abstract": false,
                "declare": false,
                "superTypeArguments": null
              },
              "specifiers": [],
              "source": null,
              "attributes": [],
              "exportKind": "value"
            }
          ]
        },
        "kind": "module",
        "declare": false,
        "global": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 47,
      "end": 62,
      "id": {
        "type": "Identifier",
        "start": 54,
        "end": 55,
        "name": "a",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSQualifiedName",
        "start": 58,
        "end": 61,
        "left": {
          "type": "Identifier",
          "start": 58,
          "end": 59,
          "name": "m",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 60,
          "end": 61,
          "name": "c",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 63,
      "end": 85,
      "declaration": {
        "type": "TSImportEqualsDeclaration",
        "start": 70,
        "end": 85,
        "id": {
          "type": "Identifier",
          "start": 77,
          "end": 78,
          "name": "b",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "moduleReference": {
          "type": "TSQualifiedName",
          "start": 81,
          "end": 84,
          "left": {
            "type": "Identifier",
            "start": 81,
            "end": 82,
            "name": "m",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 83,
            "end": 84,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "importKind": "value"
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 86,
      "end": 102,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 90,
          "end": 101,
          "id": {
            "type": "Identifier",
            "start": 90,
            "end": 91,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 94,
            "end": 101,
            "callee": {
              "type": "Identifier",
              "start": 98,
              "end": 99,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 103,
      "end": 119,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 107,
          "end": 118,
          "id": {
            "type": "Identifier",
            "start": 107,
            "end": 108,
            "name": "y",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 111,
            "end": 118,
            "callee": {
              "type": "Identifier",
              "start": 115,
              "end": 116,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
