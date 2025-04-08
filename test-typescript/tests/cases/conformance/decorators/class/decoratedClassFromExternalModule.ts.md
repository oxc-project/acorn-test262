__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 81,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 34,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 17,
        "name": "decorate",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 18,
          "end": 29,
          "name": "target",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 24,
            "end": 29,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 26,
              "end": 29
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 31,
        "end": 34,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 46,
      "end": 80,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 61,
        "end": 80,
        "id": {
          "type": "Identifier",
          "start": 67,
          "end": 76,
          "name": "Decorated",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 77,
          "end": 80,
          "body": []
        },
        "decorators": [
          {
            "type": "Decorator",
            "start": 36,
            "end": 45,
            "expression": {
              "type": "Identifier",
              "start": 37,
              "end": 45,
              "name": "decorate",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ],
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
  "start": 0,
  "end": 34,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 34,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 7,
          "end": 16,
          "local": {
            "type": "Identifier",
            "start": 7,
            "end": 16,
            "name": "Decorated",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 22,
        "end": 33,
        "value": "decorated",
        "raw": "'decorated'"
      },
      "attributes": [],
      "importKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
