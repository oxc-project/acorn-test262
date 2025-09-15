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
        "start": 10,
        "end": 15
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
                    "start": 33,
                    "end": 34
                  },
                  "init": {
                    "type": "Literal",
                    "value": 100,
                    "raw": "100",
                    "start": 37,
                    "end": 40
                  },
                  "definite": false,
                  "start": 33,
                  "end": 40
                }
              ],
              "declare": false,
              "start": 29,
              "end": 41
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 22,
            "end": 41
          }
        ],
        "start": 16,
        "end": 43
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 43
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
        "start": 51,
        "end": 55
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
          "start": 64,
          "end": 69
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 70,
          "end": 71
        },
        "optional": false,
        "computed": false,
        "start": 64,
        "end": 71
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 72,
        "end": 75
      },
      "abstract": false,
      "declare": false,
      "start": 45,
      "end": 75
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 75
}
```
