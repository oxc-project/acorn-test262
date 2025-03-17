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
        "id": {
          "type": "Identifier",
          "start": 21,
          "end": 24,
          "name": "Foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 25,
          "end": 59,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 31,
              "end": 57,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 41,
                "end": 47,
                "name": "source",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": null,
              "decorators": [],
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
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
              "accessibility": "protected"
            }
          ]
        },
        "decorators": [],
        "typeParameters": null,
        "implements": [],
        "abstract": false,
        "declare": false,
        "superTypeArguments": null
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
      "declaration": {
        "type": "VariableDeclaration",
        "start": 34,
        "end": 50,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 40,
            "end": 49,
            "id": {
              "type": "Identifier",
              "start": 40,
              "end": 49,
              "name": "x",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 41,
                "end": 49,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 43,
                  "end": 49
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
  "end": 56,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 26,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 7,
          "end": 10,
          "local": {
            "type": "Identifier",
            "start": 7,
            "end": 10,
            "name": "Foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 16,
        "end": 25,
        "value": "foo/Foo",
        "raw": "\"foo/Foo\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 27,
      "end": 55,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 36,
          "end": 37,
          "imported": {
            "type": "Identifier",
            "start": 36,
            "end": 37,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 36,
            "end": 37,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 45,
        "end": 54,
        "value": "foo/Bar",
        "raw": "\"foo/Bar\""
      },
      "attributes": [],
      "importKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
