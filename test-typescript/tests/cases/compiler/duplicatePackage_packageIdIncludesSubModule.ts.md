__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 60,
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "start": 0,
      "end": 59,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 15,
        "end": 59,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 25,
          "end": 59,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 31,
              "end": 57,
              "accessibility": "protected",
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 41,
                "end": 47,
                "decorators": [],
                "name": "source",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 47,
                "end": 56,
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 49,
                  "end": 56
                }
              },
              "value": null
            }
          ]
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 21,
          "end": 24,
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
  "start": 27,
  "end": 51,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 27,
      "end": 50,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 34,
        "end": 50,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 40,
            "end": 49,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 40,
              "end": 49,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 41,
                "end": 49,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 43,
                  "end": 49
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
  "end": 55,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 26,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 16,
        "end": 25,
        "raw": "\"foo/Foo\"",
        "value": "foo/Foo",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 7,
          "end": 10,
          "local": {
            "type": "Identifier",
            "start": 7,
            "end": 10,
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 27,
      "end": 55,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 45,
        "end": 54,
        "raw": "\"foo/Bar\"",
        "value": "foo/Bar",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 36,
          "end": 37,
          "imported": {
            "type": "Identifier",
            "start": 36,
            "end": 37,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 36,
            "end": 37,
            "decorators": [],
            "name": "x",
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
