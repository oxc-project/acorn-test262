__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 89,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 59,
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 59,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 15,
            "end": 41,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 22,
              "end": 41,
              "abstract": true,
              "body": {
                "type": "ClassBody",
                "start": 39,
                "end": 41,
                "body": []
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 37,
                "end": 38,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              },
              "implements": [],
              "superClass": null,
              "superTypeArguments": null,
              "typeParameters": null
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExpressionStatement",
            "start": 51,
            "end": 57,
            "directive": null,
            "expression": {
              "type": "NewExpression",
              "start": 51,
              "end": 56,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 55,
                "end": 56,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
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
        "name": "M",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 61,
      "end": 78,
      "id": {
        "type": "Identifier",
        "start": 68,
        "end": 71,
        "decorators": [],
        "name": "myA",
        "optional": false,
        "typeAnnotation": null
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSQualifiedName",
        "start": 74,
        "end": 77,
        "left": {
          "type": "Identifier",
          "start": 74,
          "end": 75,
          "decorators": [],
          "name": "M",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 76,
          "end": 77,
          "decorators": [],
          "name": "A",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 80,
      "end": 88,
      "directive": null,
      "expression": {
        "type": "NewExpression",
        "start": 80,
        "end": 87,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 84,
          "end": 87,
          "decorators": [],
          "name": "myA",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
