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
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 7,
        "end": 52,
        "id": {
          "type": "Identifier",
          "start": 17,
          "end": 22,
          "name": "THREE",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "body": {
          "type": "TSModuleBlock",
          "start": 23,
          "end": 52,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 27,
              "end": 50,
              "declaration": {
                "type": "ClassDeclaration",
                "start": 34,
                "end": 50,
                "id": {
                  "type": "Identifier",
                  "start": 40,
                  "end": 47,
                  "name": "Vector2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "superClass": null,
                "body": {
                  "type": "ClassBody",
                  "start": 48,
                  "end": 50,
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
        "kind": "namespace",
        "declare": false,
        "global": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
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
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 7,
          "end": 18,
          "local": {
            "type": "Identifier",
            "start": 12,
            "end": 18,
            "name": "_three",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 24,
        "end": 33,
        "value": "./three",
        "raw": "'./three'"
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "TSNamespaceExportDeclaration",
      "start": 36,
      "end": 62,
      "id": {
        "type": "Identifier",
        "start": 56,
        "end": 61,
        "name": "THREE",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 64,
      "end": 119,
      "id": {
        "type": "Identifier",
        "start": 72,
        "end": 78,
        "name": "global",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 79,
        "end": 119,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 83,
            "end": 117,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 90,
              "end": 117,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 96,
                  "end": 116,
                  "id": {
                    "type": "Identifier",
                    "start": 96,
                    "end": 116,
                    "name": "THREE",
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
                          "name": "_three",
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
                  "init": null,
                  "definite": false
                }
              ],
              "kind": "const",
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          }
        ]
      },
      "kind": "global",
      "declare": true,
      "global": true
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
  "end": 16,
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
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 7,
            "name": "m",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 10,
            "end": 15,
            "name": "THREE",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
