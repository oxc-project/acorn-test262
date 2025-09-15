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
        "name": "M1",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
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
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 29,
                "end": 30
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 31,
                "end": 35
              },
              "abstract": false,
              "declare": false,
              "start": 23,
              "end": 35
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 16,
            "end": 35
          }
        ],
        "start": 13,
        "end": 37
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 37
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M2",
        "optional": false,
        "typeAnnotation": null,
        "start": 48,
        "end": 50
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "M1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 58,
                  "end": 60
                },
                "init": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 63,
                  "end": 64
                },
                "definite": false,
                "start": 58,
                "end": 64
              }
            ],
            "declare": false,
            "start": 54,
            "end": 65
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 143,
              "end": 144
            },
            "typeParameters": null,
            "superClass": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "M1",
                "optional": false,
                "typeAnnotation": null,
                "start": 153,
                "end": 155
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 156,
                "end": 157
              },
              "optional": false,
              "computed": false,
              "start": 153,
              "end": 157
            },
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 158,
              "end": 162
            },
            "abstract": false,
            "declare": false,
            "start": 137,
            "end": 162
          }
        ],
        "start": 51,
        "end": 164
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 38,
      "end": 164
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 164
}
```
