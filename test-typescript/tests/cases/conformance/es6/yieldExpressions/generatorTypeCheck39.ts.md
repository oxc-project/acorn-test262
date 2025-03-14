__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 134,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 51,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 27,
        "end": 51,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 33,
            "end": 49,
            "argument": {
              "type": "ArrowFunctionExpression",
              "start": 40,
              "end": 48,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 45,
                "end": 48,
                "body": []
              },
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 40,
                  "end": 41,
                  "decorators": [],
                  "name": "y",
                  "optional": false
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 18,
        "decorators": [],
        "name": "decorator",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 19,
          "end": 25,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 20,
            "end": 25,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 22,
              "end": 25
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 52,
      "end": 134,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 66,
        "end": 134,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 72,
            "end": 132,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 104,
              "end": 132,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 114,
                  "end": 126,
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "start": 114,
                    "end": 115,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
                  "value": {
                    "type": "YieldExpression",
                    "start": 118,
                    "end": 125,
                    "argument": {
                      "type": "Literal",
                      "start": 124,
                      "end": 125,
                      "raw": "0",
                      "value": 0
                    },
                    "delegate": false
                  }
                }
              ]
            },
            "declare": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 72,
                "end": 91,
                "expression": {
                  "type": "CallExpression",
                  "start": 73,
                  "end": 91,
                  "arguments": [
                    {
                      "type": "YieldExpression",
                      "start": 83,
                      "end": 90,
                      "argument": {
                        "type": "Literal",
                        "start": 89,
                        "end": 90,
                        "raw": "0",
                        "value": 0
                      },
                      "delegate": false
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 73,
                    "end": 82,
                    "decorators": [],
                    "name": "decorator",
                    "optional": false
                  },
                  "optional": false
                }
              }
            ],
            "id": {
              "type": "Identifier",
              "start": 102,
              "end": 103,
              "decorators": [],
              "name": "C",
              "optional": false
            },
            "implements": [],
            "superClass": null
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "start": 62,
        "end": 63,
        "decorators": [],
        "name": "g",
        "optional": false
      },
      "params": []
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
