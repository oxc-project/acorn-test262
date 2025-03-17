__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 107,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 84,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 9,
        "name": "m1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 10,
        "end": 84,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 16,
            "end": 32,
            "id": {
              "type": "Identifier",
              "start": 22,
              "end": 24,
              "name": "m1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 25,
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
          {
            "type": "VariableDeclaration",
            "start": 37,
            "end": 54,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 41,
                "end": 53,
                "id": {
                  "type": "Identifier",
                  "start": 41,
                  "end": 42,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "NewExpression",
                  "start": 45,
                  "end": 53,
                  "callee": {
                    "type": "Identifier",
                    "start": 49,
                    "end": 51,
                    "name": "m1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [],
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 59,
            "end": 82,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 66,
              "end": 82,
              "id": {
                "type": "Identifier",
                "start": 72,
                "end": 74,
                "name": "c1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 75,
                "end": 82,
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
      "start": 85,
      "end": 107,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 89,
          "end": 106,
          "id": {
            "type": "Identifier",
            "start": 89,
            "end": 92,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 95,
            "end": 106,
            "callee": {
              "type": "MemberExpression",
              "start": 99,
              "end": 104,
              "object": {
                "type": "Identifier",
                "start": 99,
                "end": 101,
                "name": "m1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 102,
                "end": 104,
                "name": "c1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [],
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
