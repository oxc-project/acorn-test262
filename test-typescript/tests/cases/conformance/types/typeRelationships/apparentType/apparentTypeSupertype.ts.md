__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 208,
  "end": 415,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 208,
      "end": 237,
      "id": {
        "type": "Identifier",
        "start": 214,
        "end": 218,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 219,
        "end": 237,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 225,
            "end": 235,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 225,
              "end": 226,
              "name": "x",
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
              "start": 226,
              "end": 234,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 228,
                "end": 234
              }
            },
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
    },
    {
      "type": "ClassDeclaration",
      "start": 348,
      "end": 415,
      "id": {
        "type": "Identifier",
        "start": 354,
        "end": 361,
        "name": "Derived",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 388,
        "end": 392,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 393,
        "end": 415,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 408,
            "end": 413,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 408,
              "end": 409,
              "name": "x",
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
              "start": 409,
              "end": 412,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 411,
                "end": 412,
                "typeName": {
                  "type": "Identifier",
                  "start": 411,
                  "end": 412,
                  "name": "U",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 361,
        "end": 379,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 362,
            "end": 378,
            "name": {
              "type": "Identifier",
              "start": 362,
              "end": 363,
              "name": "U",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 372,
              "end": 378,
              "typeName": {
                "type": "Identifier",
                "start": 372,
                "end": 378,
                "name": "String",
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
          }
        ]
      },
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
