__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 76,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 57,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 56,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 12,
            "name": "buffer",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 15,
            "end": 56,
            "callee": {
              "type": "Identifier",
              "start": 19,
              "end": 30,
              "name": "ArrayBuffer",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 31,
                "end": 32,
                "value": 8,
                "raw": "8"
              },
              {
                "type": "ObjectExpression",
                "start": 34,
                "end": 55,
                "properties": [
                  {
                    "type": "Property",
                    "start": 36,
                    "end": 53,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 36,
                      "end": 49,
                      "name": "maxByteLength",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 51,
                      "end": 53,
                      "value": 16,
                      "raw": "16"
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              }
            ],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 58,
      "end": 75,
      "expression": {
        "type": "MemberExpression",
        "start": 58,
        "end": 74,
        "object": {
          "type": "Identifier",
          "start": 58,
          "end": 64,
          "name": "buffer",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 65,
          "end": 74,
          "name": "resizable",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
