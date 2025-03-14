objectLitTargetTypeCallSite.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 86,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 60,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 44,
        "end": 60,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 47,
            "end": 58,
            "argument": {
              "type": "MemberExpression",
              "start": 54,
              "end": 57,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 54,
                "end": 55,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 56,
                "end": 57,
                "decorators": [],
                "name": "a",
                "optional": false
              }
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
        "end": 16,
        "decorators": [],
        "name": "process",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 18,
          "end": 42,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 19,
            "end": 42,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 21,
              "end": 42,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 22,
                  "end": 31,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 22,
                    "end": 23,
                    "decorators": [],
                    "name": "a",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 23,
                    "end": 30,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 24,
                      "end": 30
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "start": 32,
                  "end": 41,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 32,
                    "end": 33,
                    "decorators": [],
                    "name": "b",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 33,
                    "end": 40,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 34,
                      "end": 40
                    }
                  }
                }
              ]
            }
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 62,
      "end": 86,
      "expression": {
        "type": "CallExpression",
        "start": 62,
        "end": 85,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 70,
            "end": 84,
            "properties": [
              {
                "type": "Property",
                "start": 71,
                "end": 77,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 71,
                  "end": 72,
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
                  "start": 73,
                  "end": 77,
                  "raw": "true",
                  "value": true
                }
              },
              {
                "type": "Property",
                "start": 78,
                "end": 83,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 78,
                  "end": 79,
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
                  "start": 80,
                  "end": 83,
                  "raw": "\"y\"",
                  "value": "y"
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 62,
          "end": 69,
          "decorators": [],
          "name": "process",
          "optional": false
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
