__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Tools",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 15
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "NullLogger",
                "optional": false,
                "typeAnnotation": null,
                "start": 35,
                "end": 45
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 46,
                "end": 49
              },
              "abstract": false,
              "declare": false,
              "start": 29,
              "end": 49
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 22,
            "end": 49
          }
        ],
        "start": 16,
        "end": 51
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 51
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "logger",
            "optional": false,
            "typeAnnotation": null,
            "start": 57,
            "end": 63
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Tools",
                "optional": false,
                "typeAnnotation": null,
                "start": 66,
                "end": 71
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "NullLogger",
                "optional": false,
                "typeAnnotation": null,
                "start": 72,
                "end": 82
              },
              "optional": false,
              "computed": false,
              "start": 66,
              "end": 82
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 66,
            "end": 84
          },
          "definite": false,
          "start": 57,
          "end": 84
        }
      ],
      "declare": false,
      "start": 53,
      "end": 85
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 85
}
```
