__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 53,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 52,
      "attributes": [],
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 7,
        "end": 52,
        "body": {
          "type": "TSModuleBlock",
          "start": 23,
          "end": 52,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 27,
              "end": 50,
              "attributes": [],
              "declaration": {
                "type": "ClassDeclaration",
                "start": 34,
                "end": 50,
                "abstract": false,
                "body": {
                  "type": "ClassBody",
                  "start": 48,
                  "end": 50,
                  "body": []
                },
                "declare": false,
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "start": 40,
                  "end": 47,
                  "decorators": [],
                  "name": "Vector2",
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
          "start": 17,
          "end": 22,
          "decorators": [],
          "name": "THREE",
          "optional": false,
          "typeAnnotation": null
        },
        "kind": "namespace"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 120,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 34,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 24,
        "end": 33,
        "raw": "'./three'",
        "value": "./three"
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 7,
          "end": 18,
          "local": {
            "type": "Identifier",
            "start": 12,
            "end": 18,
            "decorators": [],
            "name": "_three",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "TSNamespaceExportDeclaration",
      "start": 36,
      "end": 62,
      "id": {
        "type": "Identifier",
        "start": 56,
        "end": 61,
        "decorators": [],
        "name": "THREE",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 64,
      "end": 119,
      "body": {
        "type": "TSModuleBlock",
        "start": 79,
        "end": 119,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 83,
            "end": 117,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 90,
              "end": 117,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 96,
                  "end": 116,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 96,
                    "end": 116,
                    "decorators": [],
                    "name": "THREE",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 101,
                      "end": 116,
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "start": 103,
                        "end": 116,
                        "exprName": {
                          "type": "Identifier",
                          "start": 110,
                          "end": 116,
                          "decorators": [],
                          "name": "_three",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  "init": null
                }
              ],
              "declare": false,
              "kind": "const"
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": true,
      "global": true,
      "id": {
        "type": "Identifier",
        "start": 72,
        "end": 78,
        "decorators": [],
        "name": "global",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "global"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 15,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 15,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 15,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 7,
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Identifier",
            "start": 10,
            "end": 15,
            "decorators": [],
            "name": "THREE",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
