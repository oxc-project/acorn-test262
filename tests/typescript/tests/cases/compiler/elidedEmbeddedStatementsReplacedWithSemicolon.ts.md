__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "IfStatement",
      "test": {
        "type": "Literal",
        "value": 1,
        "raw": "1",
        "start": 4,
        "end": 5
      },
      "consequent": {
        "type": "TSEnumDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "A",
          "optional": false,
          "typeAnnotation": null,
          "start": 22,
          "end": 23
        },
        "body": {
          "type": "TSEnumBody",
          "members": [],
          "start": 24,
          "end": 26
        },
        "const": true,
        "declare": false,
        "start": 11,
        "end": 26
      },
      "alternate": {
        "type": "TSEnumDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "B",
          "optional": false,
          "typeAnnotation": null,
          "start": 47,
          "end": 48
        },
        "body": {
          "type": "TSEnumBody",
          "members": [],
          "start": 49,
          "end": 51
        },
        "const": true,
        "declare": false,
        "start": 36,
        "end": 51
      },
      "start": 0,
      "end": 51
    },
    {
      "type": "DoWhileStatement",
      "body": {
        "type": "TSEnumDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "C",
          "optional": false,
          "typeAnnotation": null,
          "start": 71,
          "end": 72
        },
        "body": {
          "type": "TSEnumBody",
          "members": [],
          "start": 73,
          "end": 75
        },
        "const": true,
        "declare": false,
        "start": 60,
        "end": 75
      },
      "test": {
        "type": "Literal",
        "value": 0,
        "raw": "0",
        "start": 83,
        "end": 84
      },
      "start": 53,
      "end": 86
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "Literal",
        "value": 0,
        "raw": "0",
        "start": 95,
        "end": 96
      },
      "body": {
        "type": "TSEnumDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "D",
          "optional": false,
          "typeAnnotation": null,
          "start": 113,
          "end": 114
        },
        "body": {
          "type": "TSEnumBody",
          "members": [],
          "start": 115,
          "end": 117
        },
        "const": true,
        "declare": false,
        "start": 102,
        "end": 117
      },
      "start": 88,
      "end": 117
    },
    {
      "type": "ForStatement",
      "init": null,
      "test": {
        "type": "Literal",
        "value": 0,
        "raw": "0",
        "start": 125,
        "end": 126
      },
      "update": null,
      "body": {
        "type": "TSEnumDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "E",
          "optional": false,
          "typeAnnotation": null,
          "start": 144,
          "end": 145
        },
        "body": {
          "type": "TSEnumBody",
          "members": [],
          "start": 146,
          "end": 148
        },
        "const": true,
        "declare": false,
        "start": 133,
        "end": 148
      },
      "start": 119,
      "end": 148
    },
    {
      "type": "ForInStatement",
      "left": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "_",
              "optional": false,
              "typeAnnotation": null,
              "start": 159,
              "end": 160
            },
            "init": null,
            "definite": false,
            "start": 159,
            "end": 160
          }
        ],
        "declare": false,
        "start": 155,
        "end": 160
      },
      "right": {
        "type": "ArrayExpression",
        "elements": [],
        "start": 164,
        "end": 166
      },
      "body": {
        "type": "TSEnumDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "F",
          "optional": false,
          "typeAnnotation": null,
          "start": 183,
          "end": 184
        },
        "body": {
          "type": "TSEnumBody",
          "members": [],
          "start": 185,
          "end": 187
        },
        "const": true,
        "declare": false,
        "start": 172,
        "end": 187
      },
      "start": 150,
      "end": 187
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "_",
              "optional": false,
              "typeAnnotation": null,
              "start": 198,
              "end": 199
            },
            "init": null,
            "definite": false,
            "start": 198,
            "end": 199
          }
        ],
        "declare": false,
        "start": 194,
        "end": 199
      },
      "right": {
        "type": "ArrayExpression",
        "elements": [],
        "start": 203,
        "end": 205
      },
      "body": {
        "type": "TSEnumDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "G",
          "optional": false,
          "typeAnnotation": null,
          "start": 222,
          "end": 223
        },
        "body": {
          "type": "TSEnumBody",
          "members": [],
          "start": 224,
          "end": 226
        },
        "const": true,
        "declare": false,
        "start": 211,
        "end": 226
      },
      "start": 189,
      "end": 226
    },
    {
      "type": "WithStatement",
      "object": {
        "type": "Identifier",
        "decorators": [],
        "name": "window",
        "optional": false,
        "typeAnnotation": null,
        "start": 280,
        "end": 286
      },
      "body": {
        "type": "TSEnumDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "H",
          "optional": false,
          "typeAnnotation": null,
          "start": 303,
          "end": 304
        },
        "body": {
          "type": "TSEnumBody",
          "members": [],
          "start": 305,
          "end": 307
        },
        "const": true,
        "declare": false,
        "start": 292,
        "end": 307
      },
      "start": 274,
      "end": 307
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 307
}
```
