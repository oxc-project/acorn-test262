__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 204,
  "body": [
    {
      "type": "TSEnumDeclaration",
      "start": 0,
      "end": 9,
      "body": {
        "type": "TSEnumBody",
        "start": 7,
        "end": 9,
        "members": []
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 6,
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "TSEnumDeclaration",
      "start": 10,
      "end": 19,
      "body": {
        "type": "TSEnumBody",
        "start": 17,
        "end": 19,
        "members": []
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 15,
        "end": 16,
        "decorators": [],
        "name": "V",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 21,
      "end": 46,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 25,
          "end": 45,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 25,
            "end": 45,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 26,
              "end": 45,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 28,
                "end": 45,
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 28,
                    "end": 34
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 35,
                    "end": 41
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 42,
                    "end": 43,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 42,
                      "end": 43,
                      "decorators": [],
                      "name": "E",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 44,
                    "end": 45,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 44,
                      "end": 45,
                      "decorators": [],
                      "name": "V",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "IfStatement",
      "start": 48,
      "end": 125,
      "alternate": {
        "type": "BlockStatement",
        "start": 105,
        "end": 125,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 111,
            "end": 113,
            "directive": null,
            "expression": {
              "type": "Identifier",
              "start": 111,
              "end": 112,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 75,
        "end": 99,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 81,
            "end": 83,
            "directive": null,
            "expression": {
              "type": "Identifier",
              "start": 81,
              "end": 82,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 52,
        "end": 73,
        "operator": "===",
        "left": {
          "type": "UnaryExpression",
          "start": 52,
          "end": 60,
          "argument": {
            "type": "Identifier",
            "start": 59,
            "end": 60,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "operator": "typeof",
          "prefix": true
        },
        "right": {
          "type": "Literal",
          "start": 65,
          "end": 73,
          "raw": "\"number\"",
          "value": "number",
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 127,
      "end": 204,
      "alternate": {
        "type": "BlockStatement",
        "start": 180,
        "end": 204,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 186,
            "end": 188,
            "directive": null,
            "expression": {
              "type": "Identifier",
              "start": 186,
              "end": 187,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 154,
        "end": 174,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 160,
            "end": 162,
            "directive": null,
            "expression": {
              "type": "Identifier",
              "start": 160,
              "end": 161,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 131,
        "end": 152,
        "operator": "!==",
        "left": {
          "type": "UnaryExpression",
          "start": 131,
          "end": 139,
          "argument": {
            "type": "Identifier",
            "start": 138,
            "end": 139,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "operator": "typeof",
          "prefix": true
        },
        "right": {
          "type": "Literal",
          "start": 144,
          "end": 152,
          "raw": "\"number\"",
          "value": "number",
          "regex": null,
          "bigint": null
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
