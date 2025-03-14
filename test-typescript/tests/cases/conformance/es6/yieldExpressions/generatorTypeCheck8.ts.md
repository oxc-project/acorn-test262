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
      "body": {
        "type": "TSInterfaceBody",
        "start": 66,
        "end": 69,
        "body": []
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 31,
          "end": 47,
          "expression": {
            "type": "Identifier",
            "start": 31,
            "end": 39,
            "decorators": [],
            "name": "Iterator",
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
            "decorators": [],
            "name": "Iterable",
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
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 22,
        "decorators": [],
        "name": "BadGenerator",
        "optional": false
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 70,
      "end": 102,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 99,
        "end": 102,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "start": 80,
        "end": 82,
        "decorators": [],
        "name": "g3",
        "optional": false
      },
      "params": [],
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
            "decorators": [],
            "name": "BadGenerator",
            "optional": false
          }
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
