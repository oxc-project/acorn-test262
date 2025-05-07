__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 158,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 34,
      "body": {
        "type": "TSModuleBlock",
        "start": 10,
        "end": 34,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 13,
            "end": 32,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 20,
              "end": 32,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 28,
                "end": 32,
                "body": []
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 26,
                "end": 27,
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
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 9,
        "decorators": [],
        "name": "M1",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 35,
      "end": 158,
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 52,
                  "end": 54,
                  "decorators": [],
                  "name": "M1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Literal",
                  "start": 57,
                  "end": 58,
                  "raw": "0",
                  "value": 0,
                  "regex": null,
                  "bigint": null
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "ClassDeclaration",
            "start": 131,
            "end": 156,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 152,
              "end": 156,
              "body": []
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 137,
              "end": 138,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            },
            "implements": [],
            "superClass": {
              "type": "MemberExpression",
              "start": 147,
              "end": 151,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 147,
                "end": 149,
                "decorators": [],
                "name": "M1",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 150,
                "end": 151,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "superTypeArguments": null,
            "typeParameters": null
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 42,
        "end": 44,
        "decorators": [],
        "name": "M2",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
