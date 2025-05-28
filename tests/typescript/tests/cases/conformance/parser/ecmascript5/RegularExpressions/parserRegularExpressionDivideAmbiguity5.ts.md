__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 66,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 66,
      "expression": {
        "type": "CallExpression",
        "start": 0,
        "end": 65,
        "callee": {
          "type": "MemberExpression",
          "start": 0,
          "end": 12,
          "object": {
            "type": "Identifier",
            "start": 0,
            "end": 5,
            "decorators": [],
            "name": "model",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 6,
            "end": 12,
            "decorators": [],
            "name": "rotate",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 13,
            "end": 14,
            "value": 0,
            "raw": "0"
          },
          {
            "type": "BinaryExpression",
            "start": 16,
            "end": 39,
            "left": {
              "type": "BinaryExpression",
              "start": 16,
              "end": 33,
              "left": {
                "type": "Identifier",
                "start": 16,
                "end": 23,
                "decorators": [],
                "name": "rotateY",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "*",
              "right": {
                "type": "MemberExpression",
                "start": 26,
                "end": 33,
                "object": {
                  "type": "Identifier",
                  "start": 26,
                  "end": 30,
                  "decorators": [],
                  "name": "Math",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 31,
                  "end": 33,
                  "decorators": [],
                  "name": "PI",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              }
            },
            "operator": "/",
            "right": {
              "type": "Literal",
              "start": 36,
              "end": 39,
              "value": 180,
              "raw": "180"
            }
          },
          {
            "type": "BinaryExpression",
            "start": 41,
            "end": 64,
            "left": {
              "type": "BinaryExpression",
              "start": 41,
              "end": 58,
              "left": {
                "type": "Identifier",
                "start": 41,
                "end": 48,
                "decorators": [],
                "name": "rotateZ",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "*",
              "right": {
                "type": "MemberExpression",
                "start": 51,
                "end": 58,
                "object": {
                  "type": "Identifier",
                  "start": 51,
                  "end": 55,
                  "decorators": [],
                  "name": "Math",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 56,
                  "end": 58,
                  "decorators": [],
                  "name": "PI",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              }
            },
            "operator": "/",
            "right": {
              "type": "Literal",
              "start": 61,
              "end": 64,
              "value": 180,
              "raw": "180"
            }
          }
        ],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
