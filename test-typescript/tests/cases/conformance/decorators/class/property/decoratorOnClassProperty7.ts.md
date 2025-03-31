__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 123,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 95,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 20,
        "name": "dec",
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
          "start": 21,
          "end": 37,
          "name": "target",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 27,
            "end": 37,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 29,
              "end": 37,
              "typeName": {
                "type": "Identifier",
                "start": 29,
                "end": 37,
                "name": "Function",
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
        {
          "type": "Identifier",
          "start": 39,
          "end": 67,
          "name": "propertyKey",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 50,
            "end": 67,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 52,
              "end": 67,
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 52,
                  "end": 58
                },
                {
                  "type": "TSSymbolKeyword",
                  "start": 61,
                  "end": 67
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 69,
          "end": 87,
          "name": "paramIndex",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 79,
            "end": 87,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 81,
              "end": 87
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 88,
        "end": 94,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 90,
          "end": 94
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 97,
      "end": 123,
      "id": {
        "type": "Identifier",
        "start": 103,
        "end": 104,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 105,
        "end": 123,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 111,
            "end": 121,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 116,
              "end": 120,
              "name": "prop",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [
              {
                "type": "Decorator",
                "start": 111,
                "end": 115,
                "expression": {
                  "type": "Identifier",
                  "start": 112,
                  "end": 115,
                  "name": "dec",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            ],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
