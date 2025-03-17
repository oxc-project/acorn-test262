__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 205,
  "body": [
    {
      "type": "TSEnumDeclaration",
      "start": 0,
      "end": 9,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 6,
        "name": "E",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [],
      "const": false,
      "declare": false,
      "body": {
        "type": "TSEnumBody",
        "start": 7,
        "end": 9,
        "members": []
      }
    },
    {
      "type": "TSEnumDeclaration",
      "start": 10,
      "end": 19,
      "id": {
        "type": "Identifier",
        "start": 15,
        "end": 16,
        "name": "V",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [],
      "const": false,
      "declare": false,
      "body": {
        "type": "TSEnumBody",
        "start": 17,
        "end": 19,
        "members": []
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
          "id": {
            "type": "Identifier",
            "start": 25,
            "end": 45,
            "name": "x",
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
                    "typeName": {
                      "type": "Identifier",
                      "start": 42,
                      "end": 43,
                      "name": "E",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 44,
                    "end": 45,
                    "typeName": {
                      "type": "Identifier",
                      "start": 44,
                      "end": 45,
                      "name": "V",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            },
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
    {
      "type": "IfStatement",
      "start": 48,
      "end": 125,
      "test": {
        "type": "BinaryExpression",
        "start": 52,
        "end": 73,
        "left": {
          "type": "UnaryExpression",
          "start": 52,
          "end": 60,
          "operator": "typeof",
          "prefix": true,
          "argument": {
            "type": "Identifier",
            "start": 59,
            "end": 60,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "start": 65,
          "end": 73,
          "value": "number",
          "raw": "\"number\""
        }
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
            "expression": {
              "type": "Identifier",
              "start": 81,
              "end": 82,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "alternate": {
        "type": "BlockStatement",
        "start": 105,
        "end": 125,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 111,
            "end": 113,
            "expression": {
              "type": "Identifier",
              "start": 111,
              "end": 112,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "IfStatement",
      "start": 127,
      "end": 204,
      "test": {
        "type": "BinaryExpression",
        "start": 131,
        "end": 152,
        "left": {
          "type": "UnaryExpression",
          "start": 131,
          "end": 139,
          "operator": "typeof",
          "prefix": true,
          "argument": {
            "type": "Identifier",
            "start": 138,
            "end": 139,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "operator": "!==",
        "right": {
          "type": "Literal",
          "start": 144,
          "end": 152,
          "value": "number",
          "raw": "\"number\""
        }
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
            "expression": {
              "type": "Identifier",
              "start": 160,
              "end": 161,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "alternate": {
        "type": "BlockStatement",
        "start": 180,
        "end": 204,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 186,
            "end": 188,
            "expression": {
              "type": "Identifier",
              "start": 186,
              "end": 187,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
