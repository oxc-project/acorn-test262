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
        "name": "m1",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 12
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m1",
              "optional": false,
              "typeAnnotation": null,
              "start": 25,
              "end": 27
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 28,
              "end": 35
            },
            "abstract": false,
            "declare": false,
            "start": 19,
            "end": 35
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 44,
                  "end": 45
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 52,
                    "end": 54
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "start": 48,
                  "end": 56
                },
                "definite": false,
                "start": 44,
                "end": 56
              }
            ],
            "declare": false,
            "start": 40,
            "end": 57
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "c1",
                "optional": false,
                "typeAnnotation": null,
                "start": 75,
                "end": 77
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 78,
                "end": 85
              },
              "abstract": false,
              "declare": false,
              "start": 69,
              "end": 85
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 62,
            "end": 85
          }
        ],
        "start": 13,
        "end": 87
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 87
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
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 92,
            "end": 95
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "m1",
                "optional": false,
                "typeAnnotation": null,
                "start": 102,
                "end": 104
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "c1",
                "optional": false,
                "typeAnnotation": null,
                "start": 105,
                "end": 107
              },
              "optional": false,
              "computed": false,
              "start": 102,
              "end": 107
            },
            "typeArguments": null,
            "arguments": [],
            "start": 98,
            "end": 109
          },
          "definite": false,
          "start": 92,
          "end": 109
        }
      ],
      "declare": false,
      "start": 88,
      "end": 110
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 110
}
```
