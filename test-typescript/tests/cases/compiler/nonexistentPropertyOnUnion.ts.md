__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 65,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 64,
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
          "end": 38,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 12,
            "end": 38,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 14,
              "end": 38,
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 14,
                  "end": 20
                },
                {
                  "type": "TSTypeReference",
                  "start": 23,
                  "end": 38,
                  "typeName": {
                    "type": "Identifier",
                    "start": 23,
                    "end": 30,
                    "name": "Promise",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 30,
                    "end": 38,
                    "params": [
                      {
                        "type": "TSStringKeyword",
                        "start": 31,
                        "end": 37
                      }
                    ]
                  }
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 40,
        "end": 64,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 46,
            "end": 62,
            "expression": {
              "type": "CallExpression",
              "start": 46,
              "end": 61,
              "callee": {
                "type": "MemberExpression",
                "start": 46,
                "end": 59,
                "object": {
                  "type": "Identifier",
                  "start": 46,
                  "end": 47,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 48,
                  "end": 59,
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
