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
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 214,
        "end": 218,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 219,
        "end": 237,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 225,
            "end": 235,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 225,
              "end": 226,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
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
            "value": null,
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
    },
    {
      "type": "ClassDeclaration",
      "start": 348,
      "end": 415,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 354,
        "end": 361,
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "typeAnnotation": null
      },
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
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 372,
              "end": 378,
              "typeName": {
                "type": "Identifier",
                "start": 372,
                "end": 378,
                "decorators": [],
                "name": "String",
                "optional": false,
                "typeAnnotation": null
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
      "superClass": {
        "type": "Identifier",
        "start": 388,
        "end": 392,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 393,
        "end": 415,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 408,
            "end": 413,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 408,
              "end": 409,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
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
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
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
