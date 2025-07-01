__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 11,
              "end": 12
            },
            "init": {
              "type": "Literal",
              "value": false,
              "raw": "false",
              "start": 15,
              "end": 20
            },
            "definite": false,
            "start": 11,
            "end": 20
          }
        ],
        "declare": false,
        "start": 7,
        "end": 21
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 21
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 33,
              "end": 34
            },
            "init": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 37,
              "end": 38
            },
            "definite": false,
            "start": 33,
            "end": 38
          }
        ],
        "declare": false,
        "start": 29,
        "end": 39
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 22,
      "end": 39
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "UnaryExpression",
        "operator": "!",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 45,
          "end": 46
        },
        "prefix": true,
        "start": 44,
        "end": 46
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 48,
        "end": 56
      },
      "alternate": null,
      "start": 40,
      "end": 56
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "UnaryExpression",
        "operator": "+",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 63,
          "end": 64
        },
        "prefix": true,
        "start": 62,
        "end": 64
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 66,
        "end": 74
      },
      "alternate": null,
      "start": 58,
      "end": 74
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "UnaryExpression",
        "operator": "-",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 81,
          "end": 82
        },
        "prefix": true,
        "start": 80,
        "end": 82
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 84,
        "end": 92
      },
      "alternate": null,
      "start": 76,
      "end": 92
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "UnaryExpression",
        "operator": "~",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 99,
          "end": 100
        },
        "prefix": true,
        "start": 98,
        "end": 100
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 102,
        "end": 110
      },
      "alternate": null,
      "start": 94,
      "end": 110
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 121,
          "end": 122
        },
        "prefix": true,
        "start": 116,
        "end": 122
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 124,
        "end": 132
      },
      "alternate": null,
      "start": 112,
      "end": 132
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "UnaryExpression",
        "operator": "typeof",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 145,
          "end": 146
        },
        "prefix": true,
        "start": 138,
        "end": 146
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 148,
        "end": 156
      },
      "alternate": null,
      "start": 134,
      "end": 156
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "UpdateExpression",
        "operator": "++",
        "prefix": true,
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null,
          "start": 164,
          "end": 165
        },
        "start": 162,
        "end": 165
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 167,
        "end": 175
      },
      "alternate": null,
      "start": 158,
      "end": 175
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 175
}
```
