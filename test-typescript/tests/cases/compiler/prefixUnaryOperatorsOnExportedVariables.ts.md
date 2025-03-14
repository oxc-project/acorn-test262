__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 175,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 21,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 21,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 11,
            "end": 20,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 11,
              "end": 12,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 15,
              "end": 20,
              "raw": "false",
              "value": false
            }
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 22,
      "end": 39,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 29,
        "end": 39,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 33,
            "end": 38,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 33,
              "end": 34,
              "decorators": [],
              "name": "y",
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 37,
              "end": 38,
              "raw": "1",
              "value": 1
            }
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "IfStatement",
      "start": 40,
      "end": 56,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 48,
        "end": 56,
        "body": []
      },
      "test": {
        "type": "UnaryExpression",
        "start": 44,
        "end": 46,
        "argument": {
          "type": "Identifier",
          "start": 45,
          "end": 46,
          "decorators": [],
          "name": "x",
          "optional": false
        },
        "operator": "!",
        "prefix": true
      }
    },
    {
      "type": "IfStatement",
      "start": 58,
      "end": 74,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 66,
        "end": 74,
        "body": []
      },
      "test": {
        "type": "UnaryExpression",
        "start": 62,
        "end": 64,
        "argument": {
          "type": "Identifier",
          "start": 63,
          "end": 64,
          "decorators": [],
          "name": "x",
          "optional": false
        },
        "operator": "+",
        "prefix": true
      }
    },
    {
      "type": "IfStatement",
      "start": 76,
      "end": 92,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 84,
        "end": 92,
        "body": []
      },
      "test": {
        "type": "UnaryExpression",
        "start": 80,
        "end": 82,
        "argument": {
          "type": "Identifier",
          "start": 81,
          "end": 82,
          "decorators": [],
          "name": "x",
          "optional": false
        },
        "operator": "-",
        "prefix": true
      }
    },
    {
      "type": "IfStatement",
      "start": 94,
      "end": 110,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 102,
        "end": 110,
        "body": []
      },
      "test": {
        "type": "UnaryExpression",
        "start": 98,
        "end": 100,
        "argument": {
          "type": "Identifier",
          "start": 99,
          "end": 100,
          "decorators": [],
          "name": "x",
          "optional": false
        },
        "operator": "~",
        "prefix": true
      }
    },
    {
      "type": "IfStatement",
      "start": 112,
      "end": 132,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 124,
        "end": 132,
        "body": []
      },
      "test": {
        "type": "UnaryExpression",
        "start": 116,
        "end": 122,
        "argument": {
          "type": "Identifier",
          "start": 121,
          "end": 122,
          "decorators": [],
          "name": "x",
          "optional": false
        },
        "operator": "void",
        "prefix": true
      }
    },
    {
      "type": "IfStatement",
      "start": 134,
      "end": 156,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 148,
        "end": 156,
        "body": []
      },
      "test": {
        "type": "UnaryExpression",
        "start": 138,
        "end": 146,
        "argument": {
          "type": "Identifier",
          "start": 145,
          "end": 146,
          "decorators": [],
          "name": "x",
          "optional": false
        },
        "operator": "typeof",
        "prefix": true
      }
    },
    {
      "type": "IfStatement",
      "start": 158,
      "end": 175,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 167,
        "end": 175,
        "body": []
      },
      "test": {
        "type": "UpdateExpression",
        "start": 162,
        "end": 165,
        "argument": {
          "type": "Identifier",
          "start": 164,
          "end": 165,
          "decorators": [],
          "name": "y",
          "optional": false
        },
        "operator": "++",
        "prefix": true
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
