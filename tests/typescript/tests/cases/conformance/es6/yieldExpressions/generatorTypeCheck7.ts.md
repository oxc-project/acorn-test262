__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 105,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 75,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 19,
        "decorators": [],
        "name": "WeirdIter",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 28,
          "end": 52,
          "expression": {
            "type": "Identifier",
            "start": 28,
            "end": 44,
            "decorators": [],
            "name": "IterableIterator",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 44,
            "end": 52,
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 45,
                "end": 51
              }
            ]
          }
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "start": 53,
        "end": 75,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 59,
            "end": 73,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 59,
              "end": 64,
              "decorators": [],
              "name": "hello",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 64,
              "end": 72,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 66,
                "end": 72
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 76,
      "end": 105,
      "id": {
        "type": "Identifier",
        "start": 86,
        "end": 88,
        "decorators": [],
        "name": "g1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": true,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 90,
        "end": 101,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 92,
          "end": 101,
          "typeName": {
            "type": "Identifier",
            "start": 92,
            "end": 101,
            "decorators": [],
            "name": "WeirdIter",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 102,
        "end": 105,
        "body": []
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
