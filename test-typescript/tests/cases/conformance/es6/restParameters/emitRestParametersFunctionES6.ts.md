__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 17,
  "end": 90,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 17,
      "end": 42,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 39,
        "end": 42,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 26,
        "end": 29,
        "decorators": [],
        "name": "bar",
        "optional": false
      },
      "params": [
        {
          "type": "RestElement",
          "start": 30,
          "end": 37,
          "argument": {
            "type": "Identifier",
            "start": 33,
            "end": 37,
            "decorators": [],
            "name": "rest",
            "optional": false
          },
          "decorators": [],
          "optional": false
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 43,
      "end": 90,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 87,
        "end": 90,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 52,
        "end": 55,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 56,
          "end": 65,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 57,
            "end": 65,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 59,
              "end": 65
            }
          }
        },
        {
          "type": "Identifier",
          "start": 67,
          "end": 76,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 68,
            "end": 76,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 70,
              "end": 76
            }
          }
        },
        {
          "type": "RestElement",
          "start": 78,
          "end": 85,
          "argument": {
            "type": "Identifier",
            "start": 81,
            "end": 85,
            "decorators": [],
            "name": "rest",
            "optional": false
          },
          "decorators": [],
          "optional": false
        }
      ]
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
