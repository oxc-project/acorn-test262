__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 85,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 85,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 85,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "name": "v",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 8,
            "end": 85,
            "properties": [
              {
                "type": "Property",
                "start": 14,
                "end": 40,
                "method": false,
                "shorthand": false,
                "computed": true,
                "key": {
                  "type": "BinaryExpression",
                  "start": 19,
                  "end": 24,
                  "left": {
                    "type": "Literal",
                    "start": 19,
                    "end": 20,
                    "value": 0,
                    "raw": "0"
                  },
                  "operator": "+",
                  "right": {
                    "type": "Literal",
                    "start": 23,
                    "end": 24,
                    "value": 1,
                    "raw": "1"
                  }
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 25,
                  "end": 40,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [],
                  "body": {
                    "type": "BlockStatement",
                    "start": 28,
                    "end": 40,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 30,
                        "end": 38,
                        "argument": {
                          "type": "Literal",
                          "start": 37,
                          "end": 38,
                          "value": 0,
                          "raw": "0"
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "get",
                "optional": false
              },
              {
                "type": "Property",
                "start": 46,
                "end": 72,
                "method": false,
                "shorthand": false,
                "computed": true,
                "key": {
                  "type": "BinaryExpression",
                  "start": 51,
                  "end": 56,
                  "left": {
                    "type": "Literal",
                    "start": 51,
                    "end": 52,
                    "value": 0,
                    "raw": "0"
                  },
                  "operator": "+",
                  "right": {
                    "type": "Literal",
                    "start": 55,
                    "end": 56,
                    "value": 1,
                    "raw": "1"
                  }
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 57,
                  "end": 72,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 58,
                      "end": 67,
                      "name": "v",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 59,
                        "end": 67,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 61,
                          "end": 67
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "BlockStatement",
                    "start": 69,
                    "end": 72,
                    "body": []
                  },
                  "declare": false,
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "set",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
