__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 104,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 39,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "name": "a",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 39,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 15,
            "end": 37,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 22,
              "end": 37,
              "id": {
                "type": "Identifier",
                "start": 28,
                "end": 29,
                "name": "c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 30,
                "end": 37,
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
      "start": 41,
      "end": 104,
      "id": {
        "type": "Identifier",
        "start": 48,
        "end": 49,
        "name": "c",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 50,
        "end": 104,
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "start": 56,
            "end": 71,
            "id": {
              "type": "Identifier",
              "start": 63,
              "end": 64,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "start": 67,
              "end": 70,
              "left": {
                "type": "Identifier",
                "start": 67,
                "end": 68,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 69,
                "end": 70,
                "name": "c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "importKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 76,
            "end": 102,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 83,
              "end": 102,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 87,
                  "end": 101,
                  "id": {
                    "type": "Identifier",
                    "start": 87,
                    "end": 91,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 88,
                      "end": 91,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 90,
                        "end": 91,
                        "typeName": {
                          "type": "Identifier",
                          "start": 90,
                          "end": 91,
                          "name": "b",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "NewExpression",
                    "start": 94,
                    "end": 101,
                    "callee": {
                      "type": "Identifier",
                      "start": 98,
                      "end": 99,
                      "name": "b",
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
