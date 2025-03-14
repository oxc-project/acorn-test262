__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 78,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 34,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 17,
        "decorators": [],
        "name": "PromiseAlias",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 23,
        "end": 33,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 30,
          "end": 33,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 31,
              "end": 32,
              "typeName": {
                "type": "Identifier",
                "start": 31,
                "end": 32,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 23,
          "end": 30,
          "decorators": [],
          "name": "Promise",
          "optional": false
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 17,
        "end": 20,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 18,
            "end": 19,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 18,
              "end": 19,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 36,
      "end": 78,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 75,
        "end": 78,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 51,
        "end": 52,
        "decorators": [],
        "name": "f",
        "optional": false
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 54,
        "end": 74,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 56,
          "end": 74,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 68,
            "end": 74,
            "params": [
              {
                "type": "TSVoidKeyword",
                "start": 69,
                "end": 73
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 56,
            "end": 68,
            "decorators": [],
            "name": "PromiseAlias",
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
