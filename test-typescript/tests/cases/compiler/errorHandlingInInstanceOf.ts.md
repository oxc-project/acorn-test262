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
      "test": {
        "type": "BinaryExpression",
        "start": 4,
        "end": 23,
        "left": {
          "type": "Identifier",
          "start": 4,
          "end": 5,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "instanceof",
        "right": {
          "type": "Identifier",
          "start": 17,
          "end": 23,
          "name": "String",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 25,
        "end": 28,
        "body": []
      },
      "alternate": null
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
          "id": {
            "type": "Identifier",
            "start": 34,
            "end": 40,
            "name": "y",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 35,
              "end": 40,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 37,
                "end": 40
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "IfStatement",
      "start": 42,
      "end": 75,
      "test": {
        "type": "BinaryExpression",
        "start": 46,
        "end": 70,
        "left": {
          "type": "Identifier",
          "start": 46,
          "end": 47,
          "name": "y",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "instanceof",
        "right": {
          "type": "Identifier",
          "start": 59,
          "end": 70,
          "name": "UnknownType",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 72,
        "end": 75,
        "body": []
      },
      "alternate": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
