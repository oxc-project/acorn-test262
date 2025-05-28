__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 134,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 11,
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "VariableDeclaration",
      "start": 13,
      "end": 23,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 17,
          "end": 22,
          "id": {
            "type": "Identifier",
            "start": 17,
            "end": 18,
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 21,
            "end": 22,
            "value": 0,
            "raw": "0"
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 24,
      "end": 39,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 28,
          "end": 38,
          "id": {
            "type": "Identifier",
            "start": 28,
            "end": 33,
            "decorators": [],
            "name": "limit",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 36,
            "end": 38,
            "value": 10,
            "raw": "10"
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ForStatement",
      "start": 41,
      "end": 78,
      "init": null,
      "test": {
        "type": "BinaryExpression",
        "start": 48,
        "end": 57,
        "left": {
          "type": "Identifier",
          "start": 48,
          "end": 49,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "<",
        "right": {
          "type": "Identifier",
          "start": 52,
          "end": 57,
          "decorators": [],
          "name": "limit",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 59,
        "end": 62,
        "operator": "++",
        "prefix": true,
        "argument": {
          "type": "Identifier",
          "start": 61,
          "end": 62,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 64,
        "end": 78,
        "body": [
          {
            "type": "BreakStatement",
            "start": 70,
            "end": 76,
            "label": null
          }
        ]
      }
    },
    {
      "type": "ForStatement",
      "start": 80,
      "end": 108,
      "init": null,
      "test": null,
      "update": {
        "type": "UpdateExpression",
        "start": 89,
        "end": 92,
        "operator": "++",
        "prefix": true,
        "argument": {
          "type": "Identifier",
          "start": 91,
          "end": 92,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 94,
        "end": 108,
        "body": [
          {
            "type": "BreakStatement",
            "start": 100,
            "end": 106,
            "label": null
          }
        ]
      }
    },
    {
      "type": "ForStatement",
      "start": 110,
      "end": 134,
      "init": null,
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "start": 120,
        "end": 134,
        "body": [
          {
            "type": "BreakStatement",
            "start": 126,
            "end": 132,
            "label": null
          }
        ]
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
