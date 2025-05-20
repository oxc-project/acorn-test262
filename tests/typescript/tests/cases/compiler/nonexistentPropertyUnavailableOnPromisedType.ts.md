__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 55,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 55,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 31,
        "end": 55,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 37,
            "end": 53,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 37,
              "end": 52,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 37,
                "end": 50,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 37,
                  "end": 38,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 39,
                  "end": 50,
                  "decorators": [],
                  "name": "toLowerCase",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 10,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 11,
          "end": 29,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 12,
            "end": 29,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 14,
              "end": 29,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 21,
                "end": 29,
                "params": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 22,
                    "end": 28
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 14,
                "end": 21,
                "decorators": [],
                "name": "Promise",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
