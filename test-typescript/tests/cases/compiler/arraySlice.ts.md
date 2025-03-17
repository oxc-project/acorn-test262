__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 48,
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
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 28,
            "name": "arr",
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
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 30,
      "end": 47,
      "expression": {
        "type": "CallExpression",
        "start": 30,
        "end": 46,
        "callee": {
          "type": "MemberExpression",
          "start": 30,
          "end": 40,
          "object": {
            "type": "Identifier",
            "start": 30,
            "end": 33,
            "name": "arr",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 34,
            "end": 40,
            "name": "splice",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 41,
            "end": 42,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "Literal",
            "start": 44,
            "end": 45,
            "value": 1,
            "raw": "1"
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
