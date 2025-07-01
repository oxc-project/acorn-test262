__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "arr",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 9,
                      "end": 15
                    },
                    "start": 9,
                    "end": 17
                  },
                  {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSNumberKeyword",
                      "start": 20,
                      "end": 26
                    },
                    "start": 20,
                    "end": 28
                  }
                ],
                "start": 9,
                "end": 28
              },
              "start": 7,
              "end": 28
            },
            "start": 4,
            "end": 28
          },
          "init": null,
          "definite": false,
          "start": 4,
          "end": 28
        }
      ],
      "declare": false,
      "start": 0,
      "end": 29
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "arr",
            "optional": false,
            "typeAnnotation": null,
            "start": 30,
            "end": 33
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "splice",
            "optional": false,
            "typeAnnotation": null,
            "start": 34,
            "end": 40
          },
          "optional": false,
          "computed": false,
          "start": 30,
          "end": 40
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 41,
            "end": 42
          },
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 44,
            "end": 45
          }
        ],
        "optional": false,
        "start": 30,
        "end": 46
      },
      "directive": null,
      "start": 30,
      "end": 47
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 47
}
```
