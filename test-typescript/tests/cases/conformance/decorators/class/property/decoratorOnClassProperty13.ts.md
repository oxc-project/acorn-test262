__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 124,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 87,
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
          "end": 32,
          "name": "target",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 27,
            "end": 32,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 29,
              "end": 32
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 34,
          "end": 53,
          "name": "propertyKey",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 45,
            "end": 53,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 47,
              "end": 53
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 55,
          "end": 79,
          "name": "desc",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 59,
            "end": 79,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 61,
              "end": 79,
              "typeName": {
                "type": "Identifier",
                "start": 61,
                "end": 79,
                "name": "PropertyDescriptor",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
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
        "start": 80,
        "end": 86,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 82,
          "end": 86
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 89,
      "end": 124,
      "id": {
        "type": "Identifier",
        "start": 95,
        "end": 96,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 97,
        "end": 124,
        "body": [
          {
            "type": "AccessorProperty",
            "start": 103,
            "end": 122,
            "key": {
              "type": "Identifier",
              "start": 117,
              "end": 121,
              "name": "prop",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "computed": false,
            "static": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 103,
                "end": 107,
                "expression": {
                  "type": "Identifier",
                  "start": 104,
                  "end": 107,
                  "name": "dec",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            ],
            "definite": false,
            "typeAnnotation": null,
            "accessibility": null,
            "declare": false,
            "optional": false,
            "override": false,
            "readonly": false
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
