assignLambdaToNominalSubtypeOfFunction.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 158,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 61,
      "body": {
        "type": "TSInterfaceBody",
        "start": 43,
        "end": 61,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 49,
            "end": 59,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 49,
              "end": 50,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 50,
              "end": 58,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 52,
                "end": 58
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 34,
          "end": 42,
          "expression": {
            "type": "Identifier",
            "start": 34,
            "end": 42,
            "decorators": [],
            "name": "Function",
            "optional": false
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 25,
        "decorators": [],
        "name": "IResultCallback",
        "optional": false
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 63,
      "end": 99,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 96,
        "end": 99,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 72,
        "end": 74,
        "decorators": [],
        "name": "fn",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 75,
          "end": 94,
          "decorators": [],
          "name": "cb",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 77,
            "end": 94,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 79,
              "end": 94,
              "typeName": {
                "type": "Identifier",
                "start": 79,
                "end": 94,
                "decorators": [],
                "name": "IResultCallback",
                "optional": false
              }
            }
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 101,
      "end": 120,
      "expression": {
        "type": "CallExpression",
        "start": 101,
        "end": 119,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 104,
            "end": 118,
            "async": false,
            "body": {
              "type": "Literal",
              "start": 114,
              "end": 118,
              "raw": "true",
              "value": true
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 105,
                "end": 106,
                "decorators": [],
                "name": "a",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 108,
                "end": 109,
                "decorators": [],
                "name": "b",
                "optional": false
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 101,
          "end": 103,
          "decorators": [],
          "name": "fn",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 121,
      "end": 157,
      "expression": {
        "type": "CallExpression",
        "start": 121,
        "end": 157,
        "arguments": [
          {
            "type": "FunctionExpression",
            "start": 124,
            "end": 156,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 140,
              "end": 156,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 142,
                  "end": 154,
                  "argument": {
                    "type": "Literal",
                    "start": 149,
                    "end": 153,
                    "raw": "true",
                    "value": true
                  }
                }
              ]
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 134,
                "end": 135,
                "decorators": [],
                "name": "a",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 137,
                "end": 138,
                "decorators": [],
                "name": "b",
                "optional": false
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 121,
          "end": 123,
          "decorators": [],
          "name": "fn",
          "optional": false
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
