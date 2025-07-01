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
            "name": "v",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 5
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "get",
                "key": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 19,
                    "end": 20
                  },
                  "operator": "+",
                  "right": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 23,
                    "end": 24
                  },
                  "start": 19,
                  "end": 24
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 37,
                          "end": 38
                        },
                        "start": 30,
                        "end": 38
                      }
                    ],
                    "start": 28,
                    "end": 40
                  },
                  "expression": false,
                  "start": 25,
                  "end": 40
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 14,
                "end": 40
              },
              {
                "type": "Property",
                "kind": "set",
                "key": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 51,
                    "end": 52
                  },
                  "operator": "+",
                  "right": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 55,
                    "end": 56
                  },
                  "start": 51,
                  "end": 56
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "v",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 61,
                          "end": 67
                        },
                        "start": 59,
                        "end": 67
                      },
                      "start": 58,
                      "end": 67
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 69,
                    "end": 72
                  },
                  "expression": false,
                  "start": 57,
                  "end": 72
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 46,
                "end": 72
              }
            ],
            "start": 8,
            "end": 85
          },
          "definite": false,
          "start": 4,
          "end": 85
        }
      ],
      "declare": false,
      "start": 0,
      "end": 85
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 85
}
```
