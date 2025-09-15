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
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSModuleDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 35,
                "end": 36
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
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 60,
                        "end": 61
                      },
                      "typeParameters": null,
                      "superClass": null,
                      "superTypeArguments": null,
                      "implements": [],
                      "body": {
                        "type": "ClassBody",
                        "body": [],
                        "start": 62,
                        "end": 65
                      },
                      "abstract": false,
                      "declare": false,
                      "start": 54,
                      "end": 65
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 47,
                    "end": 65
                  }
                ],
                "start": 37,
                "end": 71
              },
              "kind": "namespace",
              "declare": false,
              "global": false,
              "start": 25,
              "end": 71
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 18,
            "end": 71
          }
        ],
        "start": 12,
        "end": 73
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 73
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
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "TSQualifiedName",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 82,
                      "end": 83
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 84,
                      "end": 85
                    },
                    "start": 82,
                    "end": 85
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 86,
                    "end": 87
                  },
                  "start": 82,
                  "end": 87
                },
                "typeArguments": null,
                "start": 82,
                "end": 87
              },
              "start": 80,
              "end": 87
            },
            "start": 79,
            "end": 87
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 94,
                  "end": 95
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 96,
                  "end": 97
                },
                "optional": false,
                "computed": false,
                "start": 94,
                "end": 97
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 98,
                "end": 99
              },
              "optional": false,
              "computed": false,
              "start": 94,
              "end": 99
            },
            "typeArguments": null,
            "arguments": [],
            "start": 90,
            "end": 101
          },
          "definite": false,
          "start": 79,
          "end": 101
        }
      ],
      "declare": false,
      "start": 75,
      "end": 102
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 102
}
```
