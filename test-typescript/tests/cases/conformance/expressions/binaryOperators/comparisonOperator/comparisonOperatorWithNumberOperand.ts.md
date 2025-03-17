__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 16,
  "end": 76,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 16,
      "end": 58,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 30,
          "end": 58,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 30,
            "end": 58,
            "decorators": [],
            "name": "t1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 32,
              "end": 58,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 34,
                "end": 58,
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 34,
                    "end": 40
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 43,
                    "end": 58,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 50,
                      "end": 58,
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 51,
                          "end": 57
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 43,
                      "end": 50,
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 59,
      "end": 66,
      "directive": null,
      "expression": {
        "type": "BinaryExpression",
        "start": 59,
        "end": 66,
        "operator": ">=",
        "left": {
          "type": "Identifier",
          "start": 59,
          "end": 61,
          "decorators": [],
          "name": "t1",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 65,
          "end": 66,
          "raw": "0",
          "value": 0
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
