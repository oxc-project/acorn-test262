__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 47,
  "body": [
    {
      "type": "TSEnumDeclaration",
      "start": 0,
      "end": 16,
      "body": {
        "type": "TSEnumBody",
        "start": 7,
        "end": 16,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 13,
            "end": 14,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 14,
              "decorators": [],
              "name": "A",
              "optional": false
            }
          }
        ]
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 6,
        "decorators": [],
        "name": "E",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 18,
      "end": 46,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 22,
          "end": 46,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 22,
            "end": 41,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 25,
              "end": 41,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 27,
                "end": 41,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 33,
                  "end": 41,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 34,
                      "end": 35,
                      "typeName": {
                        "type": "Identifier",
                        "start": 34,
                        "end": 35,
                        "decorators": [],
                        "name": "E",
                        "optional": false
                      }
                    },
                    {
                      "type": "TSAnyKeyword",
                      "start": 37,
                      "end": 40
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 27,
                  "end": 33,
                  "decorators": [],
                  "name": "Record",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 44,
            "end": 46,
            "properties": []
          }
        }
      ],
      "declare": false,
      "kind": "let"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
