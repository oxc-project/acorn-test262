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
            "name": "buffer",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 12
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "ArrayBuffer",
              "optional": false,
              "typeAnnotation": null,
              "start": 19,
              "end": 30
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 8,
                "raw": "8",
                "start": 31,
                "end": 32
              },
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "maxByteLength",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 36,
                      "end": 49
                    },
                    "value": {
                      "type": "Literal",
                      "value": 16,
                      "raw": "16",
                      "start": 51,
                      "end": 53
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 36,
                    "end": 53
                  }
                ],
                "start": 34,
                "end": 55
              }
            ],
            "start": 15,
            "end": 56
          },
          "definite": false,
          "start": 6,
          "end": 56
        }
      ],
      "declare": false,
      "start": 0,
      "end": 57
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "buffer",
          "optional": false,
          "typeAnnotation": null,
          "start": 58,
          "end": 64
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "resizable",
          "optional": false,
          "typeAnnotation": null,
          "start": 65,
          "end": 74
        },
        "optional": false,
        "computed": false,
        "start": 58,
        "end": 74
      },
      "directive": null,
      "start": 58,
      "end": 75
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 75
}
```
