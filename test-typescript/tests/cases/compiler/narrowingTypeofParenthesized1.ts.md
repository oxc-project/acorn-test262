narrowingTypeofParenthesized1.ts
```json
{
  "type": "Program",
  "start": 57,
  "end": 202,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 57,
      "end": 83,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 71,
          "end": 82,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 71,
            "end": 82,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 74,
              "end": 82,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 76,
                "end": 82
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "IfStatement",
      "start": 85,
      "end": 142,
      "alternate": {
        "type": "BlockStatement",
        "start": 132,
        "end": 142,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 136,
            "end": 140,
            "expression": {
              "type": "Identifier",
              "start": 136,
              "end": 139,
              "decorators": [],
              "name": "foo",
              "optional": false
            }
          }
        ]
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 116,
        "end": 126,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 120,
            "end": 124,
            "expression": {
              "type": "Identifier",
              "start": 120,
              "end": 123,
              "decorators": [],
              "name": "foo",
              "optional": false
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 89,
        "end": 114,
        "operator": "===",
        "left": {
          "type": "UnaryExpression",
          "start": 90,
          "end": 100,
          "argument": {
            "type": "Identifier",
            "start": 97,
            "end": 100,
            "decorators": [],
            "name": "foo",
            "optional": false
          },
          "operator": "typeof",
          "prefix": true
        },
        "right": {
          "type": "Literal",
          "start": 106,
          "end": 114,
          "raw": "\"string\"",
          "value": "string"
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 144,
      "end": 201,
      "alternate": {
        "type": "BlockStatement",
        "start": 191,
        "end": 201,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 195,
            "end": 199,
            "expression": {
              "type": "Identifier",
              "start": 195,
              "end": 198,
              "decorators": [],
              "name": "foo",
              "optional": false
            }
          }
        ]
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 175,
        "end": 185,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 179,
            "end": 183,
            "expression": {
              "type": "Identifier",
              "start": 179,
              "end": 182,
              "decorators": [],
              "name": "foo",
              "optional": false
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 148,
        "end": 173,
        "operator": "===",
        "left": {
          "type": "UnaryExpression",
          "start": 148,
          "end": 158,
          "argument": {
            "type": "Identifier",
            "start": 155,
            "end": 158,
            "decorators": [],
            "name": "foo",
            "optional": false
          },
          "operator": "typeof",
          "prefix": true
        },
        "right": {
          "type": "Literal",
          "start": 164,
          "end": 172,
          "raw": "\"string\"",
          "value": "string"
        }
      }
    }
  ],
  "sourceType": "script"
}
```
