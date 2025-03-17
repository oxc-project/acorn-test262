__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 159,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 34,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 9,
        "name": "M1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 10,
        "end": 34,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 13,
            "end": 32,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 20,
              "end": 32,
              "id": {
                "type": "Identifier",
                "start": 26,
                "end": 27,
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 28,
                "end": 32,
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
      "type": "TSModuleDeclaration",
      "start": 35,
      "end": 158,
      "id": {
        "type": "Identifier",
        "start": 42,
        "end": 44,
        "name": "M2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 45,
        "end": 158,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 48,
            "end": 59,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 52,
                "end": 58,
                "id": {
                  "type": "Identifier",
                  "start": 52,
                  "end": 54,
                  "name": "M1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 57,
                  "end": 58,
                  "value": 0,
                  "raw": "0"
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "ClassDeclaration",
            "start": 131,
            "end": 156,
            "id": {
              "type": "Identifier",
              "start": 137,
              "end": 138,
              "name": "B",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": {
              "type": "MemberExpression",
              "start": 147,
              "end": 151,
              "object": {
                "type": "Identifier",
                "start": 147,
                "end": 149,
                "name": "M1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 150,
                "end": 151,
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "body": {
              "type": "ClassBody",
              "start": 152,
              "end": 156,
              "body": []
            },
            "decorators": [],
            "typeParameters": null,
            "implements": [],
            "abstract": false,
            "declare": false,
            "superTypeArguments": null
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
