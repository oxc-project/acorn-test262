__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Literal",
        "value": "use strict",
        "raw": "\"use strict\"",
        "start": 0,
        "end": 12
      },
      "directive": "use strict",
      "start": 0,
      "end": 13
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 22,
                  "end": 25
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 22,
                  "end": 25
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 22,
                "end": 25
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 20,
            "end": 27
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "require",
              "optional": false,
              "typeAnnotation": null,
              "start": 30,
              "end": 37
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "bar",
                "raw": "\"bar\"",
                "start": 38,
                "end": 43
              }
            ],
            "optional": false,
            "start": 30,
            "end": 44
          },
          "definite": false,
          "start": 20,
          "end": 44
        }
      ],
      "declare": false,
      "start": 14,
      "end": 45
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 45
}
```
