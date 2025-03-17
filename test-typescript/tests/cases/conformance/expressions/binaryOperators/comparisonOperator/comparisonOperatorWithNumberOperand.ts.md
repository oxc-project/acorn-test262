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
          "id": {
            "type": "Identifier",
            "start": 30,
            "end": 58,
            "name": "t1",
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
                    "typeName": {
                      "type": "Identifier",
                      "start": 43,
                      "end": 50,
                      "name": "Promise",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
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
                    }
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
    },
    {
      "type": "ExpressionStatement",
      "start": 59,
      "end": 66,
      "expression": {
        "type": "BinaryExpression",
        "start": 59,
        "end": 66,
        "left": {
          "type": "Identifier",
          "start": 59,
          "end": 61,
          "name": "t1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": ">=",
        "right": {
          "type": "Literal",
          "start": 65,
          "end": 66,
          "value": 0,
          "raw": "0"
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
