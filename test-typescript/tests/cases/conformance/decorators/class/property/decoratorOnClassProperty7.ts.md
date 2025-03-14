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
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 20,
        "decorators": [],
        "name": "dec",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 21,
          "end": 37,
          "decorators": [],
          "name": "target",
          "optional": false,
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
                "decorators": [],
                "name": "Function",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 39,
          "end": 67,
          "decorators": [],
          "name": "propertyKey",
          "optional": false,
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
          }
        },
        {
          "type": "Identifier",
          "start": 69,
          "end": 87,
          "decorators": [],
          "name": "paramIndex",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 79,
            "end": 87,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 81,
              "end": 87
            }
          }
        }
      ],
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
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 105,
        "end": 123,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 111,
            "end": 121,
            "computed": false,
            "declare": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 111,
                "end": 115,
                "expression": {
                  "type": "Identifier",
                  "start": 112,
                  "end": 115,
                  "decorators": [],
                  "name": "dec",
                  "optional": false
                }
              }
            ],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 116,
              "end": 120,
              "decorators": [],
              "name": "prop",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 103,
        "end": 104,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
