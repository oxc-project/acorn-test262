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
        "decorators": [],
        "name": "decorate",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 18,
          "end": 29,
          "decorators": [],
          "name": "target",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 24,
            "end": 29,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 26,
              "end": 29
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 31,
        "end": 34,
        "body": []
      },
      "expression": false
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 46,
      "end": 80,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 61,
        "end": 80,
        "decorators": [
          {
            "type": "Decorator",
            "start": 36,
            "end": 45,
            "expression": {
              "type": "Identifier",
              "start": 37,
              "end": 45,
              "decorators": [],
              "name": "decorate",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ],
        "id": {
          "type": "Identifier",
          "start": 67,
          "end": 76,
          "decorators": [],
          "name": "Decorated",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 77,
          "end": 80,
          "body": []
        },
        "abstract": false,
        "declare": false
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
            "decorators": [],
            "name": "Decorated",
            "optional": false,
            "typeAnnotation": null
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
      "phase": null,
      "attributes": [],
      "importKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
