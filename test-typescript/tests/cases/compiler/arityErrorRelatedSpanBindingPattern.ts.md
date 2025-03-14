arityErrorRelatedSpanBindingPattern.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 93,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 32,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 30,
        "end": 32,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 13,
          "end": 14,
          "decorators": [],
          "name": "a",
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 16,
          "end": 17,
          "decorators": [],
          "name": "b",
          "optional": false
        },
        {
          "type": "ObjectPattern",
          "start": 19,
          "end": 22,
          "decorators": [],
          "optional": false,
          "properties": [
            {
              "type": "Property",
              "start": 20,
              "end": 21,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 20,
                "end": 21,
                "decorators": [],
                "name": "c",
                "optional": false
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": true,
              "value": {
                "type": "Identifier",
                "start": 20,
                "end": 21,
                "decorators": [],
                "name": "c",
                "optional": false
              }
            }
          ]
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 23,
        "end": 29,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 25,
          "end": 29
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 34,
      "end": 66,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 64,
        "end": 66,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 43,
        "end": 46,
        "decorators": [],
        "name": "bar",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 47,
          "end": 48,
          "decorators": [],
          "name": "a",
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 50,
          "end": 51,
          "decorators": [],
          "name": "b",
          "optional": false
        },
        {
          "type": "ArrayPattern",
          "start": 53,
          "end": 56,
          "decorators": [],
          "elements": [
            {
              "type": "Identifier",
              "start": 54,
              "end": 55,
              "decorators": [],
              "name": "c",
              "optional": false
            }
          ],
          "optional": false
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 57,
        "end": 63,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 59,
          "end": 63
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 68,
      "end": 79,
      "expression": {
        "type": "CallExpression",
        "start": 68,
        "end": 78,
        "arguments": [
          {
            "type": "Literal",
            "start": 72,
            "end": 74,
            "raw": "\"\"",
            "value": ""
          },
          {
            "type": "Literal",
            "start": 76,
            "end": 77,
            "raw": "0",
            "value": 0
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 68,
          "end": 71,
          "decorators": [],
          "name": "foo",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 81,
      "end": 92,
      "expression": {
        "type": "CallExpression",
        "start": 81,
        "end": 91,
        "arguments": [
          {
            "type": "Literal",
            "start": 85,
            "end": 87,
            "raw": "\"\"",
            "value": ""
          },
          {
            "type": "Literal",
            "start": 89,
            "end": 90,
            "raw": "0",
            "value": 0
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 81,
          "end": 84,
          "decorators": [],
          "name": "bar",
          "optional": false
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
