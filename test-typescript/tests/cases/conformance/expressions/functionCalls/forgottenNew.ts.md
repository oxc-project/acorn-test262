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
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 12,
        "name": "Tools",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 13,
        "end": 48,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 19,
            "end": 46,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 26,
              "end": 46,
              "id": {
                "type": "Identifier",
                "start": 32,
                "end": 42,
                "name": "NullLogger",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 43,
                "end": 46,
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
    {
      "type": "VariableDeclaration",
      "start": 50,
      "end": 82,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 54,
          "end": 81,
          "id": {
            "type": "Identifier",
            "start": 54,
            "end": 60,
            "name": "logger",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 63,
            "end": 81,
            "callee": {
              "type": "MemberExpression",
              "start": 63,
              "end": 79,
              "object": {
                "type": "Identifier",
                "start": 63,
                "end": 68,
                "name": "Tools",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 69,
                "end": 79,
                "name": "NullLogger",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [],
            "optional": false,
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
