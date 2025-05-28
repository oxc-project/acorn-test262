__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 74,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 74,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 9,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
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
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 20,
                  "end": 28,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 22,
                    "end": 28
                  }
                }
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
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 44,
              "end": 46,
              "name": "a"
            },
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
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 61,
            "end": 72,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 61,
              "end": 63,
              "name": "b"
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 66,
              "end": 71,
              "value": false,
              "raw": "false"
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
