__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 102,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 69,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 22,
        "name": "BadGenerator",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 31,
          "end": 47,
          "expression": {
            "type": "Identifier",
            "start": 31,
            "end": 39,
            "name": "Iterator",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 39,
            "end": 47,
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 40,
                "end": 46
              }
            ]
          }
        },
        {
          "type": "TSInterfaceHeritage",
          "start": 49,
          "end": 65,
          "expression": {
            "type": "Identifier",
            "start": 49,
            "end": 57,
            "name": "Iterable",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 57,
            "end": 65,
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 58,
                "end": 64
              }
            ]
          }
        }
      ],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 66,
        "end": 69,
        "body": []
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 70,
      "end": 102,
      "id": {
        "type": "Identifier",
        "start": 80,
        "end": 82,
        "name": "g3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": true,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 99,
        "end": 102,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 84,
        "end": 98,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 86,
          "end": 98,
          "typeName": {
            "type": "Identifier",
            "start": 86,
            "end": 98,
            "name": "BadGenerator",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
