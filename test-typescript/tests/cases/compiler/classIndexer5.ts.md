__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 75,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 74,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 9,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 10,
        "end": 74,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 16,
            "end": 38,
            "parameters": [
              {
                "type": "Identifier",
                "start": 17,
                "end": 28,
                "name": "key",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 20,
                  "end": 28,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 22,
                    "end": 28
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 29,
              "end": 37,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 31,
                "end": 37
              }
            },
            "readonly": false,
            "static": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 44,
            "end": 56,
            "static": false,
            "computed": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 44,
              "end": 46,
              "name": "a"
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
              "start": 46,
              "end": 55,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 48,
                "end": 55
              }
            },
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 61,
            "end": 72,
            "static": false,
            "computed": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 61,
              "end": 63,
              "name": "b"
            },
            "value": {
              "type": "Literal",
              "start": 66,
              "end": 71,
              "value": false,
              "raw": "false"
            },
            "decorators": [],
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
