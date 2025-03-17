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
      "end": 45,
      "id": {
        "type": "TSQualifiedName",
        "start": 7,
        "end": 10,
        "left": {
          "type": "Identifier",
          "start": 7,
          "end": 8,
          "name": "A",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 9,
          "end": 10,
          "name": "C",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 11,
        "end": 45,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 17,
            "end": 43,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 24,
              "end": 43,
              "id": {
                "type": "Identifier",
                "start": 34,
                "end": 35,
                "name": "Z",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [],
              "typeParameters": null,
              "body": {
                "type": "TSInterfaceBody",
                "start": 36,
                "end": 43,
                "body": []
              },
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "type"
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 47,
      "end": 107,
      "id": {
        "type": "TSQualifiedName",
        "start": 54,
        "end": 59,
        "left": {
          "type": "TSQualifiedName",
          "start": 54,
          "end": 57,
          "left": {
            "type": "Identifier",
            "start": 54,
            "end": 55,
            "name": "A",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 56,
            "end": 57,
            "name": "B",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "right": {
          "type": "Identifier",
          "start": 58,
          "end": 59,
          "name": "C",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 60,
        "end": 107,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 66,
            "end": 105,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 73,
              "end": 105,
              "id": {
                "type": "Identifier",
                "start": 79,
                "end": 80,
                "name": "W",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 98,
                "end": 105,
                "body": []
              },
              "decorators": [],
              "typeParameters": null,
              "implements": [
                {
                  "type": "TSClassImplements",
                  "start": 92,
                  "end": 97,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 92,
                    "end": 97,
                    "object": {
                      "type": "MemberExpression",
                      "start": 92,
                      "end": 95,
                      "object": {
                        "type": "Identifier",
                        "start": 92,
                        "end": 93,
                        "name": "A",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 94,
                        "end": 95,
                        "name": "C",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 96,
                      "end": 97,
                      "name": "Z",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "typeArguments": null
                }
              ],
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
