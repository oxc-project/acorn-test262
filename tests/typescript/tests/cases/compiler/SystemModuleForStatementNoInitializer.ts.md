__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 11
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": null,
            "start": 17,
            "end": 18
          },
          "init": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 21,
            "end": 22
          },
          "definite": false,
          "start": 17,
          "end": 22
        }
      ],
      "declare": false,
      "start": 13,
      "end": 23
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "limit",
            "optional": false,
            "typeAnnotation": null,
            "start": 28,
            "end": 33
          },
          "init": {
            "type": "Literal",
            "value": 10,
            "raw": "10",
            "start": 36,
            "end": 38
          },
          "definite": false,
          "start": 28,
          "end": 38
        }
      ],
      "declare": false,
      "start": 24,
      "end": 39
    },
    {
      "type": "ForStatement",
      "init": null,
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 48,
          "end": 49
        },
        "operator": "<",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "limit",
          "optional": false,
          "typeAnnotation": null,
          "start": 52,
          "end": 57
        },
        "start": 48,
        "end": 57
      },
      "update": {
        "type": "UpdateExpression",
        "operator": "++",
        "prefix": true,
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 61,
          "end": 62
        },
        "start": 59,
        "end": 62
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "BreakStatement",
            "label": null,
            "start": 70,
            "end": 76
          }
        ],
        "start": 64,
        "end": 78
      },
      "start": 41,
      "end": 78
    },
    {
      "type": "ForStatement",
      "init": null,
      "test": null,
      "update": {
        "type": "UpdateExpression",
        "operator": "++",
        "prefix": true,
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 91,
          "end": 92
        },
        "start": 89,
        "end": 92
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "BreakStatement",
            "label": null,
            "start": 100,
            "end": 106
          }
        ],
        "start": 94,
        "end": 108
      },
      "start": 80,
      "end": 108
    },
    {
      "type": "ForStatement",
      "init": null,
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "BreakStatement",
            "label": null,
            "start": 126,
            "end": 132
          }
        ],
        "start": 120,
        "end": 134
      },
      "start": 110,
      "end": 134
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 134
}
```
