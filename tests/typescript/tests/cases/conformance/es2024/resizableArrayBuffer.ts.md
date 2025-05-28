__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 75,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 57,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 56,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 12,
            "decorators": [],
            "name": "buffer",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 15,
            "end": 56,
            "callee": {
              "type": "Identifier",
              "start": 19,
              "end": 30,
              "decorators": [],
              "name": "ArrayBuffer",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
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
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 36,
                      "end": 49,
                      "decorators": [],
                      "name": "maxByteLength",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 51,
                      "end": 53,
                      "value": 16,
                      "raw": "16"
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  }
                ]
              }
            ]
          },
          "definite": false
        }
      ],
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
          "decorators": [],
          "name": "buffer",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 65,
          "end": 74,
          "decorators": [],
          "name": "resizable",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
