__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 71,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 36,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 19,
        "decorators": [],
        "name": "fn",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 20,
          "end": 28,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 21,
            "end": 28,
            "typeAnnotation": {
              "type": "TSNeverKeyword",
              "start": 23,
              "end": 28
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 29,
        "end": 35,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 31,
          "end": 35
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 38,
      "end": 51,
      "expression": {
        "type": "CallExpression",
        "start": 38,
        "end": 51,
        "arguments": [
          {
            "type": "ArrayExpression",
            "start": 41,
            "end": 50,
            "elements": [
              {
                "type": "Literal",
                "start": 42,
                "end": 43,
                "raw": "1",
                "value": 1
              },
              {
                "type": "Literal",
                "start": 45,
                "end": 46,
                "raw": "2",
                "value": 2
              },
              {
                "type": "Literal",
                "start": 48,
                "end": 49,
                "raw": "3",
                "value": 3
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 38,
          "end": 40,
          "decorators": [],
          "name": "fn",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 52,
      "end": 70,
      "expression": {
        "type": "CallExpression",
        "start": 52,
        "end": 70,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 55,
            "end": 69,
            "properties": [
              {
                "type": "Property",
                "start": 57,
                "end": 61,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 57,
                  "end": 58,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 60,
                  "end": 61,
                  "raw": "1",
                  "value": 1
                }
              },
              {
                "type": "Property",
                "start": 63,
                "end": 67,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 63,
                  "end": 64,
                  "decorators": [],
                  "name": "b",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 66,
                  "end": 67,
                  "raw": "2",
                  "value": 2
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 52,
          "end": 54,
          "decorators": [],
          "name": "fn",
          "optional": false
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
