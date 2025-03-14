modularizeLibrary_UsingES5LibAndES6ArrayLib.ts
```json
{
  "type": "Program",
  "start": 39,
  "end": 133,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 39,
      "end": 120,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 83,
        "end": 120,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 89,
            "end": 118,
            "argument": {
              "type": "CallExpression",
              "start": 96,
              "end": 117,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 107,
                  "end": 116,
                  "decorators": [],
                  "name": "arguments",
                  "optional": false
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 96,
                "end": 106,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 96,
                  "end": 101,
                  "decorators": [],
                  "name": "Array",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 102,
                  "end": 106,
                  "decorators": [],
                  "name": "from",
                  "optional": false
                }
              },
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 48,
        "end": 49,
        "decorators": [],
        "name": "f",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 50,
          "end": 59,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 51,
            "end": 59,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 53,
              "end": 59
            }
          }
        },
        {
          "type": "Identifier",
          "start": 61,
          "end": 70,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 62,
            "end": 70,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 64,
              "end": 70
            }
          }
        },
        {
          "type": "Identifier",
          "start": 72,
          "end": 81,
          "decorators": [],
          "name": "z",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 73,
            "end": 81,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 75,
              "end": 81
            }
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 122,
      "end": 133,
      "expression": {
        "type": "CallExpression",
        "start": 122,
        "end": 132,
        "arguments": [
          {
            "type": "Literal",
            "start": 124,
            "end": 125,
            "raw": "1",
            "value": 1
          },
          {
            "type": "Literal",
            "start": 127,
            "end": 128,
            "raw": "2",
            "value": 2
          },
          {
            "type": "Literal",
            "start": 130,
            "end": 131,
            "raw": "3",
            "value": 3
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 122,
          "end": 123,
          "decorators": [],
          "name": "f",
          "optional": false
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
