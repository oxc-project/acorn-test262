__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "t1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 34,
                    "end": 40
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 43,
                      "end": 50
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 51,
                          "end": 57
                        }
                      ],
                      "start": 50,
                      "end": 58
                    },
                    "start": 43,
                    "end": 58
                  }
                ],
                "start": 34,
                "end": 58
              },
              "start": 32,
              "end": 58
            },
            "start": 30,
            "end": 58
          },
          "init": null,
          "definite": false,
          "start": 30,
          "end": 58
        }
      ],
      "declare": true,
      "start": 16,
      "end": 58
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "t1",
          "optional": false,
          "typeAnnotation": null,
          "start": 59,
          "end": 61
        },
        "operator": ">=",
        "right": {
          "type": "Literal",
          "value": 0,
          "raw": "0",
          "start": 65,
          "end": 66
        },
        "start": 59,
        "end": 66
      },
      "directive": null,
      "start": 59,
      "end": 66
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 16,
  "end": 75
}
```
