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
        "start": 7,
        "end": 12
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
                "start": 32,
                "end": 42
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 43,
                "end": 46
              },
              "abstract": false,
              "declare": false,
              "start": 26,
              "end": 46
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 19,
            "end": 46
          }
        ],
        "start": 13,
        "end": 48
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 48
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
            "start": 54,
            "end": 60
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
                "start": 63,
                "end": 68
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "NullLogger",
                "optional": false,
                "typeAnnotation": null,
                "start": 69,
                "end": 79
              },
              "optional": false,
              "computed": false,
              "start": 63,
              "end": 79
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 63,
            "end": 81
          },
          "definite": false,
          "start": 54,
          "end": 81
        }
      ],
      "declare": false,
      "start": 50,
      "end": 82
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 82
}
```
