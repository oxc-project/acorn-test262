__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 21,
  "end": 157,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 21,
      "end": 76,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 73,
        "end": 76,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 30,
        "end": 33,
        "decorators": [],
        "name": "fn1",
        "optional": false
      },
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 34,
          "end": 71,
          "decorators": [],
          "left": {
            "type": "Identifier",
            "start": 34,
            "end": 55,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 35,
              "end": 55,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 37,
                "end": 55,
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 37,
                    "end": 43
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 46,
                    "end": 55
                  }
                ]
              }
            }
          },
          "optional": false,
          "right": {
            "type": "ConditionalExpression",
            "start": 58,
            "end": 71,
            "alternate": {
              "type": "Literal",
              "start": 70,
              "end": 71,
              "raw": "0",
              "value": 0
            },
            "consequent": {
              "type": "Identifier",
              "start": 66,
              "end": 67,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "test": {
              "type": "BinaryExpression",
              "start": 58,
              "end": 63,
              "operator": ">",
              "left": {
                "type": "Identifier",
                "start": 58,
                "end": 59,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 62,
                "end": 63,
                "raw": "0",
                "value": 0
              }
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 98,
      "end": 157,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 154,
        "end": 157,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 107,
        "end": 110,
        "decorators": [],
        "name": "fn2",
        "optional": false
      },
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 111,
          "end": 152,
          "decorators": [],
          "left": {
            "type": "Identifier",
            "start": 111,
            "end": 121,
            "decorators": [],
            "name": "x",
            "optional": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 113,
              "end": 121,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 115,
                "end": 121
              }
            }
          },
          "optional": false,
          "right": {
            "type": "ConditionalExpression",
            "start": 124,
            "end": 152,
            "alternate": {
              "type": "Identifier",
              "start": 151,
              "end": 152,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "consequent": {
              "type": "Literal",
              "start": 140,
              "end": 148,
              "raw": "'value1'",
              "value": "value1"
            },
            "test": {
              "type": "Identifier",
              "start": 124,
              "end": 137,
              "decorators": [],
              "name": "someCondition",
              "optional": false
            }
          }
        }
      ]
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
