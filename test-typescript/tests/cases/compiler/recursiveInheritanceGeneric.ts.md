__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 52,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 50,
      "body": {
        "type": "TSInterfaceBody",
        "start": 30,
        "end": 50,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 37,
            "end": 48,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 37,
              "end": 40,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 42,
              "end": 47,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 43,
                "end": 47
              }
            },
            "static": false,
            "typeParameters": null
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 24,
          "end": 29,
          "expression": {
            "type": "Identifier",
            "start": 24,
            "end": 26,
            "decorators": [],
            "name": "I5",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 26,
            "end": 29,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 27,
                "end": 28,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 27,
                  "end": 28,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 12,
        "decorators": [],
        "name": "I5",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 12,
        "end": 15,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 13,
            "end": 14,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 13,
              "end": 14,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
