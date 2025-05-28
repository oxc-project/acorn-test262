__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 70,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 36,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 19,
        "decorators": [],
        "name": "fn",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
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
      },
      "body": null,
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 38,
      "end": 51,
      "expression": {
        "type": "CallExpression",
        "start": 38,
        "end": 51,
        "callee": {
          "type": "Identifier",
          "start": 38,
          "end": 40,
          "decorators": [],
          "name": "fn",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
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
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 45,
                "end": 46,
                "value": 2,
                "raw": "2"
              },
              {
                "type": "Literal",
                "start": 48,
                "end": 49,
                "value": 3,
                "raw": "3"
              }
            ]
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 52,
      "end": 70,
      "expression": {
        "type": "CallExpression",
        "start": 52,
        "end": 70,
        "callee": {
          "type": "Identifier",
          "start": 52,
          "end": 54,
          "decorators": [],
          "name": "fn",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 57,
                  "end": 58,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 60,
                  "end": 61,
                  "value": 1,
                  "raw": "1"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 63,
                "end": 67,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 63,
                  "end": 64,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 66,
                  "end": 67,
                  "value": 2,
                  "raw": "2"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
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
