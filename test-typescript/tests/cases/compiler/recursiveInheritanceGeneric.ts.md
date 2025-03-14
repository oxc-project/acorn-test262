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
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 37,
              "end": 40,
              "decorators": [],
              "name": "foo",
              "optional": false
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
            "static": false
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
            "optional": false
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
                "typeName": {
                  "type": "Identifier",
                  "start": 27,
                  "end": 28,
                  "decorators": [],
                  "name": "T",
                  "optional": false
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
        "optional": false
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
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 13,
              "end": 14,
              "decorators": [],
              "name": "T",
              "optional": false
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
