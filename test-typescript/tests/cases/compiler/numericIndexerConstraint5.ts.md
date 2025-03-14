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
      "end": 37,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 36,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 8,
            "end": 36,
            "properties": [
              {
                "type": "Property",
                "start": 10,
                "end": 19,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 10,
                  "end": 14,
                  "decorators": [],
                  "name": "name",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 16,
                  "end": 19,
                  "raw": "\"x\"",
                  "value": "x"
                }
              },
              {
                "type": "Property",
                "start": 21,
                "end": 34,
                "computed": false,
                "key": {
                  "type": "Literal",
                  "start": 21,
                  "end": 22,
                  "raw": "0",
                  "value": 0
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "NewExpression",
                  "start": 24,
                  "end": 34,
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "start": 28,
                    "end": 32,
                    "decorators": [],
                    "name": "Date",
                    "optional": false
                  }
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 38,
      "end": 76,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 42,
          "end": 75,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 42,
            "end": 71,
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 43,
              "end": 71,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 45,
                "end": 71,
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "start": 47,
                    "end": 69,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 48,
                        "end": 60,
                        "decorators": [],
                        "name": "name",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 52,
                          "end": 60,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 54,
                            "end": 60
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 61,
                      "end": 69,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 63,
                        "end": 69
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 74,
            "end": 75,
            "decorators": [],
            "name": "x",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
