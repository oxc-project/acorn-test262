__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 47,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 29,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 28,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 28,
            "decorators": [],
            "name": "arr",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 7,
              "end": 28,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 9,
                "end": 28,
                "types": [
                  {
                    "type": "TSArrayType",
                    "start": 9,
                    "end": 17,
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 9,
                      "end": 15
                    }
                  },
                  {
                    "type": "TSArrayType",
                    "start": 20,
                    "end": 28,
                    "elementType": {
                      "type": "TSNumberKeyword",
                      "start": 20,
                      "end": 26
                    }
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 30,
      "end": 47,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 30,
        "end": 46,
        "arguments": [
          {
            "type": "Literal",
            "start": 41,
            "end": 42,
            "raw": "1",
            "value": 1
          },
          {
            "type": "Literal",
            "start": 44,
            "end": 45,
            "raw": "1",
            "value": 1
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 30,
          "end": 40,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 30,
            "end": 33,
            "decorators": [],
            "name": "arr",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 34,
            "end": 40,
            "decorators": [],
            "name": "splice",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
