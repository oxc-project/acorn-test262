__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 87,
  "body": [
    {
      "type": "TSEnumDeclaration",
      "start": 0,
      "end": 10,
      "body": {
        "type": "TSEnumBody",
        "start": 7,
        "end": 10,
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
      "type": "VariableDeclaration",
      "start": 11,
      "end": 29,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 15,
          "end": 28,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 15,
            "end": 28,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 16,
              "end": 28,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 18,
                "end": 28,
                "types": [
                  {
                    "type": "TSSymbolKeyword",
                    "start": 18,
                    "end": 24
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 27,
                    "end": 28,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 27,
                      "end": 28,
                      "decorators": [],
                      "name": "E",
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
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 31,
      "end": 33,
      "directive": null,
      "expression": {
        "type": "Identifier",
        "start": 31,
        "end": 32,
        "decorators": [],
        "name": "x",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "IfStatement",
      "start": 34,
      "end": 87,
      "alternate": {
        "type": "BlockStatement",
        "start": 77,
        "end": 87,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 83,
            "end": 85,
            "directive": null,
            "expression": {
              "type": "Identifier",
              "start": 83,
              "end": 84,
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
        "start": 61,
        "end": 71,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 67,
            "end": 69,
            "directive": null,
            "expression": {
              "type": "Identifier",
              "start": 67,
              "end": 68,
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
        "start": 38,
        "end": 59,
        "operator": "===",
        "left": {
          "type": "UnaryExpression",
          "start": 38,
          "end": 46,
          "argument": {
            "type": "Identifier",
            "start": 45,
            "end": 46,
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
          "start": 51,
          "end": 59,
          "raw": "\"number\"",
          "value": "number"
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
