__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 76,
                "end": 82
              },
              "start": 74,
              "end": 82
            },
            "start": 71,
            "end": 82
          },
          "init": null,
          "definite": false,
          "start": 71,
          "end": 82
        }
      ],
      "declare": true,
      "start": 57,
      "end": 83
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "UnaryExpression",
          "operator": "typeof",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 97,
            "end": 100
          },
          "prefix": true,
          "start": 90,
          "end": 100
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "value": "string",
          "raw": "\"string\"",
          "start": 106,
          "end": 114
        },
        "start": 89,
        "end": 114
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 120,
              "end": 123
            },
            "directive": null,
            "start": 120,
            "end": 124
          }
        ],
        "start": 116,
        "end": 126
      },
      "alternate": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 136,
              "end": 139
            },
            "directive": null,
            "start": 136,
            "end": 140
          }
        ],
        "start": 132,
        "end": 142
      },
      "start": 85,
      "end": 142
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "UnaryExpression",
          "operator": "typeof",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 155,
            "end": 158
          },
          "prefix": true,
          "start": 148,
          "end": 158
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "value": "string",
          "raw": "\"string\"",
          "start": 164,
          "end": 172
        },
        "start": 148,
        "end": 173
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 179,
              "end": 182
            },
            "directive": null,
            "start": 179,
            "end": 183
          }
        ],
        "start": 175,
        "end": 185
      },
      "alternate": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 195,
              "end": 198
            },
            "directive": null,
            "start": 195,
            "end": 199
          }
        ],
        "start": 191,
        "end": 201
      },
      "start": 144,
      "end": 201
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 57,
  "end": 201
}
```
