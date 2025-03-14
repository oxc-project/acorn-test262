modularizeLibrary_ErrorFromUsingES6ArrayWithOnlyES6ArrayLib.ts
```json
{
  "type": "Program",
  "start": 65,
  "end": 160,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 65,
      "end": 146,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 109,
        "end": 146,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 115,
            "end": 144,
            "argument": {
              "type": "CallExpression",
              "start": 122,
              "end": 143,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 133,
                  "end": 142,
                  "decorators": [],
                  "name": "arguments",
                  "optional": false
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 122,
                "end": 132,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 122,
                  "end": 127,
                  "decorators": [],
                  "name": "Array",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 128,
                  "end": 132,
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
        "start": 74,
        "end": 75,
        "decorators": [],
        "name": "f",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 76,
          "end": 85,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 77,
            "end": 85,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 79,
              "end": 85
            }
          }
        },
        {
          "type": "Identifier",
          "start": 87,
          "end": 96,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 88,
            "end": 96,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 90,
              "end": 96
            }
          }
        },
        {
          "type": "Identifier",
          "start": 98,
          "end": 107,
          "decorators": [],
          "name": "z",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 99,
            "end": 107,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 101,
              "end": 107
            }
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 148,
      "end": 159,
      "expression": {
        "type": "CallExpression",
        "start": 148,
        "end": 158,
        "arguments": [
          {
            "type": "Literal",
            "start": 150,
            "end": 151,
            "raw": "1",
            "value": 1
          },
          {
            "type": "Literal",
            "start": 153,
            "end": 154,
            "raw": "2",
            "value": 2
          },
          {
            "type": "Literal",
            "start": 156,
            "end": 157,
            "raw": "3",
            "value": 3
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 148,
          "end": 149,
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
