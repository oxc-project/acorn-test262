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
      "id": {
        "type": "Identifier",
        "start": 30,
        "end": 33,
        "name": "fn1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 34,
          "end": 71,
          "left": {
            "type": "Identifier",
            "start": 34,
            "end": 55,
            "name": "x",
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
            },
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "ConditionalExpression",
            "start": 58,
            "end": 71,
            "test": {
              "type": "BinaryExpression",
              "start": 58,
              "end": 63,
              "left": {
                "type": "Identifier",
                "start": 58,
                "end": 59,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": ">",
              "right": {
                "type": "Literal",
                "start": 62,
                "end": 63,
                "value": 0,
                "raw": "0"
              }
            },
            "consequent": {
              "type": "Identifier",
              "start": 66,
              "end": 67,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "alternate": {
              "type": "Literal",
              "start": 70,
              "end": 71,
              "value": 0,
              "raw": "0"
            }
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 73,
        "end": 76,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 98,
      "end": 157,
      "id": {
        "type": "Identifier",
        "start": 107,
        "end": 110,
        "name": "fn2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 111,
          "end": 152,
          "left": {
            "type": "Identifier",
            "start": 111,
            "end": 121,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 113,
              "end": 121,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 115,
                "end": 121
              }
            },
            "decorators": [],
            "optional": true
          },
          "right": {
            "type": "ConditionalExpression",
            "start": 124,
            "end": 152,
            "test": {
              "type": "Identifier",
              "start": 124,
              "end": 137,
              "name": "someCondition",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "consequent": {
              "type": "Literal",
              "start": 140,
              "end": 148,
              "value": "value1",
              "raw": "'value1'"
            },
            "alternate": {
              "type": "Identifier",
              "start": 151,
              "end": 152,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 154,
        "end": 157,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
