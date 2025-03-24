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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 56,
          "definite": false,
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
            "arguments": [
              {
                "type": "Literal",
                "start": 31,
                "end": 32,
                "raw": "8",
                "value": 8
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
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 36,
                      "end": 49,
                      "decorators": [],
                      "name": "maxByteLength",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 51,
                      "end": 53,
                      "raw": "16",
                      "value": 16
                    }
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 19,
              "end": 30,
              "decorators": [],
              "name": "ArrayBuffer",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 58,
      "end": 75,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 58,
        "end": 74,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 58,
          "end": 64,
          "decorators": [],
          "name": "buffer",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 65,
          "end": 74,
          "decorators": [],
          "name": "resizable",
          "optional": false,
          "typeAnnotation": null
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
