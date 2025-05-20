__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 82,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 48,
      "body": {
        "type": "TSModuleBlock",
        "start": 13,
        "end": 48,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 19,
            "end": 46,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 26,
              "end": 46,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 43,
                "end": 46,
                "body": []
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 32,
                "end": 42,
                "decorators": [],
                "name": "NullLogger",
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
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 12,
        "decorators": [],
        "name": "Tools",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    },
    {
      "type": "VariableDeclaration",
      "start": 50,
      "end": 82,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 54,
          "end": 81,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 54,
            "end": 60,
            "decorators": [],
            "name": "logger",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 63,
            "end": 81,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 63,
              "end": 79,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 63,
                "end": 68,
                "decorators": [],
                "name": "Tools",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 69,
                "end": 79,
                "decorators": [],
                "name": "NullLogger",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
