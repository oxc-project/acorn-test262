objectLiteralFreshnessWithSpread.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 107,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 26,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 26,
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
            "end": 26,
            "properties": [
              {
                "type": "Property",
                "start": 10,
                "end": 14,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 10,
                  "end": 11,
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
                  "start": 13,
                  "end": 14,
                  "raw": "1",
                  "value": 1
                }
              },
              {
                "type": "Property",
                "start": 16,
                "end": 24,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 16,
                  "end": 21,
                  "decorators": [],
                  "name": "extra",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 23,
                  "end": 24,
                  "raw": "2",
                  "value": 2
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 27,
      "end": 67,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 31,
          "end": 67,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 31,
            "end": 43,
            "decorators": [],
            "name": "xx",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 33,
              "end": 43,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 35,
                "end": 43,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 37,
                    "end": 39,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 37,
                      "end": 38,
                      "decorators": [],
                      "name": "a",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 40,
                    "end": 41,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 40,
                      "end": 41,
                      "decorators": [],
                      "name": "b",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 47,
            "end": 67,
            "properties": [
              {
                "type": "Property",
                "start": 49,
                "end": 53,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 49,
                  "end": 50,
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
                  "start": 52,
                  "end": 53,
                  "raw": "1",
                  "value": 1
                }
              },
              {
                "type": "SpreadElement",
                "start": 55,
                "end": 59,
                "argument": {
                  "type": "Identifier",
                  "start": 58,
                  "end": 59,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                }
              },
              {
                "type": "Property",
                "start": 61,
                "end": 65,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 61,
                  "end": 62,
                  "decorators": [],
                  "name": "z",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 64,
                  "end": 65,
                  "raw": "3",
                  "value": 3
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "let"
    }
  ],
  "sourceType": "script"
}
```
