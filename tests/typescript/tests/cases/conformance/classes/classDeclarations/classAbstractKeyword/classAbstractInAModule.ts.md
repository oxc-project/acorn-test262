__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 94,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 75,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 75,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 15,
            "end": 41,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 22,
              "end": 41,
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
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "start": 39,
                "end": 41,
                "body": []
              },
              "abstract": true,
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 46,
            "end": 73,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 53,
              "end": 73,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 59,
                "end": 60,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "superClass": {
                "type": "Identifier",
                "start": 69,
                "end": 70,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              },
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "start": 71,
                "end": 73,
                "body": []
              },
              "abstract": false,
              "declare": false
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
    },
    {
      "type": "ExpressionStatement",
      "start": 77,
      "end": 85,
      "expression": {
        "type": "NewExpression",
        "start": 77,
        "end": 84,
        "callee": {
          "type": "MemberExpression",
          "start": 81,
          "end": 84,
          "object": {
            "type": "Identifier",
            "start": 81,
            "end": 82,
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 83,
            "end": 84,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": []
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 86,
      "end": 94,
      "expression": {
        "type": "NewExpression",
        "start": 86,
        "end": 93,
        "callee": {
          "type": "MemberExpression",
          "start": 90,
          "end": 93,
          "object": {
            "type": "Identifier",
            "start": 90,
            "end": 91,
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 92,
            "end": 93,
            "decorators": [],
            "name": "B",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": []
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
