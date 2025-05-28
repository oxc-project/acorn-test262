__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 307,
  "body": [
    {
      "type": "IfStatement",
      "start": 0,
      "end": 51,
      "test": {
        "type": "Literal",
        "start": 4,
        "end": 5,
        "value": 1,
        "raw": "1"
      },
      "consequent": {
        "type": "TSEnumDeclaration",
        "start": 11,
        "end": 26,
        "id": {
          "type": "Identifier",
          "start": 22,
          "end": 23,
          "decorators": [],
          "name": "A",
          "optional": false,
          "typeAnnotation": null
        },
        "body": {
          "type": "TSEnumBody",
          "start": 24,
          "end": 26,
          "members": []
        },
        "const": true,
        "declare": false
      },
      "alternate": {
        "type": "TSEnumDeclaration",
        "start": 36,
        "end": 51,
        "id": {
          "type": "Identifier",
          "start": 47,
          "end": 48,
          "decorators": [],
          "name": "B",
          "optional": false,
          "typeAnnotation": null
        },
        "body": {
          "type": "TSEnumBody",
          "start": 49,
          "end": 51,
          "members": []
        },
        "const": true,
        "declare": false
      }
    },
    {
      "type": "DoWhileStatement",
      "start": 53,
      "end": 86,
      "body": {
        "type": "TSEnumDeclaration",
        "start": 60,
        "end": 75,
        "id": {
          "type": "Identifier",
          "start": 71,
          "end": 72,
          "decorators": [],
          "name": "C",
          "optional": false,
          "typeAnnotation": null
        },
        "body": {
          "type": "TSEnumBody",
          "start": 73,
          "end": 75,
          "members": []
        },
        "const": true,
        "declare": false
      },
      "test": {
        "type": "Literal",
        "start": 83,
        "end": 84,
        "value": 0,
        "raw": "0"
      }
    },
    {
      "type": "WhileStatement",
      "start": 88,
      "end": 117,
      "test": {
        "type": "Literal",
        "start": 95,
        "end": 96,
        "value": 0,
        "raw": "0"
      },
      "body": {
        "type": "TSEnumDeclaration",
        "start": 102,
        "end": 117,
        "id": {
          "type": "Identifier",
          "start": 113,
          "end": 114,
          "decorators": [],
          "name": "D",
          "optional": false,
          "typeAnnotation": null
        },
        "body": {
          "type": "TSEnumBody",
          "start": 115,
          "end": 117,
          "members": []
        },
        "const": true,
        "declare": false
      }
    },
    {
      "type": "ForStatement",
      "start": 119,
      "end": 148,
      "init": null,
      "test": {
        "type": "Literal",
        "start": 125,
        "end": 126,
        "value": 0,
        "raw": "0"
      },
      "update": null,
      "body": {
        "type": "TSEnumDeclaration",
        "start": 133,
        "end": 148,
        "id": {
          "type": "Identifier",
          "start": 144,
          "end": 145,
          "decorators": [],
          "name": "E",
          "optional": false,
          "typeAnnotation": null
        },
        "body": {
          "type": "TSEnumBody",
          "start": 146,
          "end": 148,
          "members": []
        },
        "const": true,
        "declare": false
      }
    },
    {
      "type": "ForInStatement",
      "start": 150,
      "end": 187,
      "left": {
        "type": "VariableDeclaration",
        "start": 155,
        "end": 160,
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 159,
            "end": 160,
            "id": {
              "type": "Identifier",
              "start": 159,
              "end": 160,
              "decorators": [],
              "name": "_",
              "optional": false,
              "typeAnnotation": null
            },
            "init": null,
            "definite": false
          }
        ],
        "declare": false
      },
      "right": {
        "type": "ArrayExpression",
        "start": 164,
        "end": 166,
        "elements": []
      },
      "body": {
        "type": "TSEnumDeclaration",
        "start": 172,
        "end": 187,
        "id": {
          "type": "Identifier",
          "start": 183,
          "end": 184,
          "decorators": [],
          "name": "F",
          "optional": false,
          "typeAnnotation": null
        },
        "body": {
          "type": "TSEnumBody",
          "start": 185,
          "end": 187,
          "members": []
        },
        "const": true,
        "declare": false
      }
    },
    {
      "type": "ForOfStatement",
      "start": 189,
      "end": 226,
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "start": 194,
        "end": 199,
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 198,
            "end": 199,
            "id": {
              "type": "Identifier",
              "start": 198,
              "end": 199,
              "decorators": [],
              "name": "_",
              "optional": false,
              "typeAnnotation": null
            },
            "init": null,
            "definite": false
          }
        ],
        "declare": false
      },
      "right": {
        "type": "ArrayExpression",
        "start": 203,
        "end": 205,
        "elements": []
      },
      "body": {
        "type": "TSEnumDeclaration",
        "start": 211,
        "end": 226,
        "id": {
          "type": "Identifier",
          "start": 222,
          "end": 223,
          "decorators": [],
          "name": "G",
          "optional": false,
          "typeAnnotation": null
        },
        "body": {
          "type": "TSEnumBody",
          "start": 224,
          "end": 226,
          "members": []
        },
        "const": true,
        "declare": false
      }
    },
    {
      "type": "WithStatement",
      "start": 274,
      "end": 307,
      "object": {
        "type": "Identifier",
        "start": 280,
        "end": 286,
        "decorators": [],
        "name": "window",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSEnumDeclaration",
        "start": 292,
        "end": 307,
        "id": {
          "type": "Identifier",
          "start": 303,
          "end": 304,
          "decorators": [],
          "name": "H",
          "optional": false,
          "typeAnnotation": null
        },
        "body": {
          "type": "TSEnumBody",
          "start": 305,
          "end": 307,
          "members": []
        },
        "const": true,
        "declare": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
