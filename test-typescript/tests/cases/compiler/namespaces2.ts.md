__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 96,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 67,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 67,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 15,
            "end": 65,
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 22,
              "end": 65,
              "id": {
                "type": "Identifier",
                "start": 29,
                "end": 30,
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "body": {
                "type": "TSModuleBlock",
                "start": 31,
                "end": 65,
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 41,
                    "end": 59,
                    "declaration": {
                      "type": "ClassDeclaration",
                      "start": 48,
                      "end": 59,
                      "id": {
                        "type": "Identifier",
                        "start": 54,
                        "end": 55,
                        "name": "C",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "superClass": null,
                      "body": {
                        "type": "ClassBody",
                        "start": 56,
                        "end": 59,
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
      "start": 69,
      "end": 96,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 73,
          "end": 95,
          "id": {
            "type": "Identifier",
            "start": 73,
            "end": 81,
            "name": "c",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 74,
              "end": 81,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 76,
                "end": 81,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 76,
                  "end": 81,
                  "left": {
                    "type": "TSQualifiedName",
                    "start": 76,
                    "end": 79,
                    "left": {
                      "type": "Identifier",
                      "start": 76,
                      "end": 77,
                      "name": "A",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 78,
                      "end": 79,
                      "name": "B",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 80,
                    "end": 81,
                    "name": "C",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 84,
            "end": 95,
            "callee": {
              "type": "MemberExpression",
              "start": 88,
              "end": 93,
              "object": {
                "type": "MemberExpression",
                "start": 88,
                "end": 91,
                "object": {
                  "type": "Identifier",
                  "start": 88,
                  "end": 89,
                  "name": "A",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 90,
                  "end": 91,
                  "name": "B",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 92,
                "end": 93,
                "name": "C",
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
