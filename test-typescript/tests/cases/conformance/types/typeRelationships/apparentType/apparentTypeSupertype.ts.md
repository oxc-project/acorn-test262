apparentTypeSupertype.ts
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
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 219,
        "end": 237,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 225,
            "end": 235,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 225,
              "end": 226,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
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
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 214,
        "end": 218,
        "decorators": [],
        "name": "Base",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 348,
      "end": 415,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 393,
        "end": 415,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 408,
            "end": 413,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 408,
              "end": 409,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
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
                  "optional": false
                }
              }
            },
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 354,
        "end": 361,
        "decorators": [],
        "name": "Derived",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 388,
        "end": 392,
        "decorators": [],
        "name": "Base",
        "optional": false
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
            "const": false,
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
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 362,
              "end": 363,
              "decorators": [],
              "name": "U",
              "optional": false
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "script"
}
```
