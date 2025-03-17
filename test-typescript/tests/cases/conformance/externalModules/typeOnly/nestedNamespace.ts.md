__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 47,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 46,
      "attributes": [],
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 7,
        "end": 46,
        "body": {
          "type": "TSModuleBlock",
          "start": 23,
          "end": 46,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 27,
              "end": 44,
              "attributes": [],
              "declaration": {
                "type": "ClassDeclaration",
                "start": 34,
                "end": 44,
                "abstract": false,
                "body": {
                  "type": "ClassBody",
                  "start": 42,
                  "end": 44,
                  "body": []
                },
                "declare": false,
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "start": 40,
                  "end": 41,
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
          "name": "types",
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
  "end": 64,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 30,
      "attributes": [],
      "importKind": "type",
      "source": {
        "type": "Literal",
        "start": 24,
        "end": 29,
        "raw": "'./a'",
        "value": "./a"
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 12,
          "end": 18,
          "local": {
            "type": "Identifier",
            "start": 17,
            "end": 18,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 31,
      "end": 63,
      "body": {
        "type": "TSInterfaceBody",
        "start": 61,
        "end": 63,
        "body": []
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 51,
          "end": 60,
          "expression": {
            "type": "MemberExpression",
            "start": 51,
            "end": 60,
            "computed": false,
            "object": {
              "type": "MemberExpression",
              "start": 51,
              "end": 58,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 51,
                "end": 52,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 53,
                "end": 58,
                "decorators": [],
                "name": "types",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 59,
              "end": 60,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "typeArguments": null
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 41,
        "end": 42,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
