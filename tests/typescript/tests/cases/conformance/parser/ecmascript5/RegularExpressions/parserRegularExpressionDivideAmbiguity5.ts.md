__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "model",
            "optional": false,
            "typeAnnotation": null,
            "start": 0,
            "end": 5
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "rotate",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 12
          },
          "optional": false,
          "computed": false,
          "start": 0,
          "end": 12
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 13,
            "end": 14
          },
          {
            "type": "BinaryExpression",
            "left": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "rotateY",
                "optional": false,
                "typeAnnotation": null,
                "start": 16,
                "end": 23
              },
              "operator": "*",
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Math",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 26,
                  "end": 30
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "PI",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 31,
                  "end": 33
                },
                "optional": false,
                "computed": false,
                "start": 26,
                "end": 33
              },
              "start": 16,
              "end": 33
            },
            "operator": "/",
            "right": {
              "type": "Literal",
              "value": 180,
              "raw": "180",
              "start": 36,
              "end": 39
            },
            "start": 16,
            "end": 39
          },
          {
            "type": "BinaryExpression",
            "left": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "rotateZ",
                "optional": false,
                "typeAnnotation": null,
                "start": 41,
                "end": 48
              },
              "operator": "*",
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Math",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 51,
                  "end": 55
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "PI",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 56,
                  "end": 58
                },
                "optional": false,
                "computed": false,
                "start": 51,
                "end": 58
              },
              "start": 41,
              "end": 58
            },
            "operator": "/",
            "right": {
              "type": "Literal",
              "value": 180,
              "raw": "180",
              "start": 61,
              "end": 64
            },
            "start": 41,
            "end": 64
          }
        ],
        "optional": false,
        "start": 0,
        "end": 65
      },
      "directive": null,
      "start": 0,
      "end": 66
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 66
}
```
