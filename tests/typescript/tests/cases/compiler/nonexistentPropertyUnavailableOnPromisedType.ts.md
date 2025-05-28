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
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 10,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
              "typeName": {
                "type": "Identifier",
                "start": 14,
                "end": 21,
                "decorators": [],
                "name": "Promise",
                "optional": false,
                "typeAnnotation": null
              },
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
              }
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 31,
        "end": 55,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 37,
            "end": 53,
            "expression": {
              "type": "CallExpression",
              "start": 37,
              "end": 52,
              "callee": {
                "type": "MemberExpression",
                "start": 37,
                "end": 50,
                "object": {
                  "type": "Identifier",
                  "start": 37,
                  "end": 38,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 39,
                  "end": 50,
                  "decorators": [],
                  "name": "toLowerCase",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
