__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 56,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 55,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 10,
        "name": "f",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 11,
          "end": 29,
          "name": "x",
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
                "name": "Promise",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
          },
          "decorators": [],
          "optional": false
        }
      ],
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
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 39,
                  "end": 50,
                  "name": "toLowerCase",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
