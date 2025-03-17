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
          "name": "A",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "members": [],
        "const": true,
        "declare": false,
        "body": {
          "type": "TSEnumBody",
          "start": 24,
          "end": 26,
          "members": []
        }
      },
      "alternate": {
        "type": "TSEnumDeclaration",
        "start": 36,
        "end": 51,
        "id": {
          "type": "Identifier",
          "start": 47,
          "end": 48,
          "name": "B",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "members": [],
        "const": true,
        "declare": false,
        "body": {
          "type": "TSEnumBody",
          "start": 49,
          "end": 51,
          "members": []
        }
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
          "name": "C",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "members": [],
        "const": true,
        "declare": false,
        "body": {
          "type": "TSEnumBody",
          "start": 73,
          "end": 75,
          "members": []
        }
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
          "name": "D",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "members": [],
        "const": true,
        "declare": false,
        "body": {
          "type": "TSEnumBody",
          "start": 115,
          "end": 117,
          "members": []
        }
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
          "name": "E",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "members": [],
        "const": true,
        "declare": false,
        "body": {
          "type": "TSEnumBody",
          "start": 146,
          "end": 148,
          "members": []
        }
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
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 159,
            "end": 160,
            "id": {
              "type": "Identifier",
              "start": 159,
              "end": 160,
              "name": "_",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": null,
            "definite": false
          }
        ],
        "kind": "let",
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
          "name": "F",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "members": [],
        "const": true,
        "declare": false,
        "body": {
          "type": "TSEnumBody",
          "start": 185,
          "end": 187,
          "members": []
        }
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
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 198,
            "end": 199,
            "id": {
              "type": "Identifier",
              "start": 198,
              "end": 199,
              "name": "_",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": null,
            "definite": false
          }
        ],
        "kind": "let",
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
          "name": "G",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "members": [],
        "const": true,
        "declare": false,
        "body": {
          "type": "TSEnumBody",
          "start": 224,
          "end": 226,
          "members": []
        }
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
        "name": "window",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSEnumDeclaration",
        "start": 292,
        "end": 307,
        "id": {
          "type": "Identifier",
          "start": 303,
          "end": 304,
          "name": "H",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "members": [],
        "const": true,
        "declare": false,
        "body": {
          "type": "TSEnumBody",
          "start": 305,
          "end": 307,
          "members": []
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
