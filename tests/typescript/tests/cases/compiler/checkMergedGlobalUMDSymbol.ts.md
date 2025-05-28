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
          "decorators": [],
          "name": "THREE",
          "optional": false,
          "typeAnnotation": null
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
                "typeParameters": null,
                "superClass": null,
                "superTypeArguments": null,
                "implements": [],
                "body": {
                  "type": "ClassBody",
                  "start": 48,
                  "end": 50,
                  "body": []
                },
                "abstract": false,
                "declare": false
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": []
            }
          ]
        },
        "kind": "namespace",
        "declare": false,
        "global": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
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
            "decorators": [],
            "name": "_three",
            "optional": false,
            "typeAnnotation": null
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
      "phase": null,
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
      "id": {
        "type": "Identifier",
        "start": 72,
        "end": 78,
        "decorators": [],
        "name": "global",
        "optional": false,
        "typeAnnotation": null
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
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 96,
                  "end": 116,
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
                  "init": null,
                  "definite": false
                }
              ],
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
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
  "end": 15,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 15,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 15,
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
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
