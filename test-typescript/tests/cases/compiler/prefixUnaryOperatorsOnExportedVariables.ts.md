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
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 21,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 11,
            "end": 20,
            "id": {
              "type": "Identifier",
              "start": 11,
              "end": 12,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 15,
              "end": 20,
              "value": false,
              "raw": "false"
            },
            "definite": false
          }
        ],
        "kind": "var",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 22,
      "end": 39,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 29,
        "end": 39,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 33,
            "end": 38,
            "id": {
              "type": "Identifier",
              "start": 33,
              "end": 34,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 37,
              "end": 38,
              "value": 1,
              "raw": "1"
            },
            "definite": false
          }
        ],
        "kind": "var",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "IfStatement",
      "start": 40,
      "end": 56,
      "test": {
        "type": "UnaryExpression",
        "start": 44,
        "end": 46,
        "operator": "!",
        "prefix": true,
        "argument": {
          "type": "Identifier",
          "start": 45,
          "end": 46,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 48,
        "end": 56,
        "body": []
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 58,
      "end": 74,
      "test": {
        "type": "UnaryExpression",
        "start": 62,
        "end": 64,
        "operator": "+",
        "prefix": true,
        "argument": {
          "type": "Identifier",
          "start": 63,
          "end": 64,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 66,
        "end": 74,
        "body": []
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 76,
      "end": 92,
      "test": {
        "type": "UnaryExpression",
        "start": 80,
        "end": 82,
        "operator": "-",
        "prefix": true,
        "argument": {
          "type": "Identifier",
          "start": 81,
          "end": 82,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 84,
        "end": 92,
        "body": []
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 94,
      "end": 110,
      "test": {
        "type": "UnaryExpression",
        "start": 98,
        "end": 100,
        "operator": "~",
        "prefix": true,
        "argument": {
          "type": "Identifier",
          "start": 99,
          "end": 100,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 102,
        "end": 110,
        "body": []
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 112,
      "end": 132,
      "test": {
        "type": "UnaryExpression",
        "start": 116,
        "end": 122,
        "operator": "void",
        "prefix": true,
        "argument": {
          "type": "Identifier",
          "start": 121,
          "end": 122,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 124,
        "end": 132,
        "body": []
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 134,
      "end": 156,
      "test": {
        "type": "UnaryExpression",
        "start": 138,
        "end": 146,
        "operator": "typeof",
        "prefix": true,
        "argument": {
          "type": "Identifier",
          "start": 145,
          "end": 146,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 148,
        "end": 156,
        "body": []
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 158,
      "end": 175,
      "test": {
        "type": "UpdateExpression",
        "start": 162,
        "end": 165,
        "operator": "++",
        "prefix": true,
        "argument": {
          "type": "Identifier",
          "start": 164,
          "end": 165,
          "name": "y",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 167,
        "end": 175,
        "body": []
      },
      "alternate": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
