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
                  "start": 23,
                  "end": 24
                },
                "init": {
                  "type": "Literal",
                  "value": 10,
                  "raw": "10",
                  "start": 27,
                  "end": 29
                },
                "definite": false,
                "start": 23,
                "end": 29
              }
            ],
            "declare": false,
            "start": 19,
            "end": 30
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 48,
                "end": 49
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 50,
                "end": 57
              },
              "abstract": false,
              "declare": false,
              "start": 42,
              "end": 57
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 35,
            "end": 57
          }
        ],
        "start": 13,
        "end": 59
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 59
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m1",
        "optional": false,
        "typeAnnotation": null,
        "start": 70,
        "end": 72
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
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 83,
                  "end": 84
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
                      "start": 91,
                      "end": 93
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 94,
                      "end": 95
                    },
                    "optional": false,
                    "computed": false,
                    "start": 91,
                    "end": 95
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "start": 87,
                  "end": 97
                },
                "definite": false,
                "start": 83,
                "end": 97
              }
            ],
            "declare": false,
            "start": 79,
            "end": 98
          }
        ],
        "start": 73,
        "end": 100
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 60,
      "end": 100
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 100
}
```
