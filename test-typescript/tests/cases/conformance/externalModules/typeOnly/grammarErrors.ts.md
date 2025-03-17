__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 62,
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "start": 0,
      "end": 25,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 15,
        "end": 25,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 23,
          "end": 25,
          "body": []
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 21,
          "end": 22,
          "decorators": [],
          "name": "A",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": null,
        "superTypeArguments": null,
        "typeParameters": null
      },
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 26,
      "end": 43,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 33,
        "end": 43,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 41,
          "end": 43,
          "body": []
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 39,
          "end": 40,
          "decorators": [],
          "name": "B",
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
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 44,
      "end": 61,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 51,
        "end": 61,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 59,
          "end": 61,
          "body": []
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 57,
          "end": 58,
          "decorators": [],
          "name": "C",
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
  "end": 36,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 35,
      "attributes": [],
      "importKind": "type",
      "source": {
        "type": "Literal",
        "start": 29,
        "end": 34,
        "raw": "'./a'",
        "value": "./a"
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 12,
          "end": 13,
          "local": {
            "type": "Identifier",
            "start": 12,
            "end": 13,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          }
        },
        {
          "type": "ImportSpecifier",
          "start": 17,
          "end": 18,
          "imported": {
            "type": "Identifier",
            "start": 17,
            "end": 18,
            "decorators": [],
            "name": "B",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 17,
            "end": 18,
            "decorators": [],
            "name": "B",
            "optional": false,
            "typeAnnotation": null
          }
        },
        {
          "type": "ImportSpecifier",
          "start": 20,
          "end": 21,
          "imported": {
            "type": "Identifier",
            "start": 20,
            "end": 21,
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 20,
            "end": 21,
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
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
  "end": 65,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 38,
      "body": {
        "type": "TSModuleBlock",
        "start": 13,
        "end": 38,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 17,
            "end": 36,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 24,
              "end": 36,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 34,
                "end": 36,
                "body": []
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 30,
                "end": 33,
                "decorators": [],
                "name": "Foo",
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
        "start": 10,
        "end": 12,
        "decorators": [],
        "name": "ns",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "namespace"
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 39,
      "end": 64,
      "id": {
        "type": "Identifier",
        "start": 51,
        "end": 54,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "importKind": "type",
      "moduleReference": {
        "type": "TSQualifiedName",
        "start": 57,
        "end": 63,
        "left": {
          "type": "Identifier",
          "start": 57,
          "end": 59,
          "decorators": [],
          "name": "ns",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 60,
          "end": 63,
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null
        }
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
