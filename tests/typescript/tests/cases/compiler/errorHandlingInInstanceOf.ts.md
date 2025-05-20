__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 75,
  "body": [
    {
      "type": "IfStatement",
      "start": 0,
      "end": 28,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 25,
        "end": 28,
        "body": []
      },
      "test": {
        "type": "BinaryExpression",
        "start": 4,
        "end": 23,
        "operator": "instanceof",
        "left": {
          "type": "Identifier",
          "start": 4,
          "end": 5,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 17,
          "end": 23,
          "decorators": [],
          "name": "String",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 30,
      "end": 41,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 34,
          "end": 40,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 34,
            "end": 40,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 35,
              "end": 40,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 37,
                "end": 40
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
      "type": "IfStatement",
      "start": 42,
      "end": 75,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 72,
        "end": 75,
        "body": []
      },
      "test": {
        "type": "BinaryExpression",
        "start": 46,
        "end": 70,
        "operator": "instanceof",
        "left": {
          "type": "Identifier",
          "start": 46,
          "end": 47,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 59,
          "end": 70,
          "decorators": [],
          "name": "UnknownType",
          "optional": false,
          "typeAnnotation": null
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
