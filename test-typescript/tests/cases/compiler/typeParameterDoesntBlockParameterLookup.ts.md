__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 56,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 56,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 18,
        "name": "f",
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
          "start": 41,
          "end": 49,
          "name": "Bar",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 44,
            "end": 49,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 46,
              "end": 49
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 18,
        "end": 40,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 19,
            "end": 34,
            "name": {
              "type": "Identifier",
              "start": 19,
              "end": 22,
              "name": "Foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 31,
              "end": 34,
              "typeName": {
                "type": "Identifier",
                "start": 31,
                "end": 34,
                "name": "Bar",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 36,
            "end": 39,
            "name": {
              "type": "Identifier",
              "start": 36,
              "end": 39,
              "name": "Bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 50,
        "end": 56,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 52,
          "end": 56
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
