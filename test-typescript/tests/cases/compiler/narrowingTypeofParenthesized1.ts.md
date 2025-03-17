__ESTREE_TEST__:PASS:
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
          "id": {
            "type": "Identifier",
            "start": 71,
            "end": 82,
            "name": "foo",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 74,
              "end": 82,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 76,
                "end": 82
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
    },
    {
      "type": "IfStatement",
      "start": 85,
      "end": 142,
      "test": {
        "type": "BinaryExpression",
        "start": 89,
        "end": 114,
        "left": {
          "type": "UnaryExpression",
          "start": 90,
          "end": 100,
          "operator": "typeof",
          "prefix": true,
          "argument": {
            "type": "Identifier",
            "start": 97,
            "end": 100,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "start": 106,
          "end": 114,
          "value": "string",
          "raw": "\"string\""
        }
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
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          }
        ]
      },
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
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "IfStatement",
      "start": 144,
      "end": 201,
      "test": {
        "type": "BinaryExpression",
        "start": 148,
        "end": 173,
        "left": {
          "type": "UnaryExpression",
          "start": 148,
          "end": 158,
          "operator": "typeof",
          "prefix": true,
          "argument": {
            "type": "Identifier",
            "start": 155,
            "end": 158,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "start": 164,
          "end": 172,
          "value": "string",
          "raw": "\"string\""
        }
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
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          }
        ]
      },
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
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
