__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 94,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 56,
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
        "end": 56,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 16,
            "end": 27,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 20,
                "end": 26,
                "id": {
                  "type": "Identifier",
                  "start": 20,
                  "end": 21,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 24,
                  "end": 26,
                  "value": 10,
                  "raw": "10"
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 32,
            "end": 54,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 39,
              "end": 54,
              "id": {
                "type": "Identifier",
                "start": 45,
                "end": 46,
                "name": "c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 47,
                "end": 54,
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
      "start": 57,
      "end": 94,
      "id": {
        "type": "Identifier",
        "start": 64,
        "end": 66,
        "name": "m1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 67,
        "end": 94,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 73,
            "end": 92,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 77,
                "end": 91,
                "id": {
                  "type": "Identifier",
                  "start": 77,
                  "end": 78,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "NewExpression",
                  "start": 81,
                  "end": 91,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 85,
                    "end": 89,
                    "object": {
                      "type": "Identifier",
                      "start": 85,
                      "end": 87,
                      "name": "m1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 88,
                      "end": 89,
                      "name": "c",
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
