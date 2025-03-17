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
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 40,
        "end": 64,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 46,
            "end": 62,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 46,
              "end": 61,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 46,
                "end": 59,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 46,
                  "end": 47,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 48,
                  "end": 59,
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
          "end": 38,
          "decorators": [],
          "name": "x",
          "optional": false,
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
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 23,
                    "end": 30,
                    "decorators": [],
                    "name": "Promise",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
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
