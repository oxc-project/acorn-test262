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
        "name": "Alpha",
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
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 30,
                    "end": 31
                  },
                  "init": {
                    "type": "Literal",
                    "value": 100,
                    "raw": "100",
                    "start": 34,
                    "end": 37
                  },
                  "definite": false,
                  "start": 30,
                  "end": 37
                }
              ],
              "declare": false,
              "start": 26,
              "end": 38
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 19,
            "end": 38
          }
        ],
        "start": 13,
        "end": 40
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 40
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Beta",
        "optional": false,
        "typeAnnotation": null,
        "start": 48,
        "end": 52
      },
      "typeParameters": null,
      "superClass": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "Alpha",
          "optional": false,
          "typeAnnotation": null,
          "start": 61,
          "end": 66
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 67,
          "end": 68
        },
        "optional": false,
        "computed": false,
        "start": 61,
        "end": 68
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 69,
        "end": 72
      },
      "abstract": false,
      "declare": false,
      "start": 42,
      "end": 72
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 72
}
```
