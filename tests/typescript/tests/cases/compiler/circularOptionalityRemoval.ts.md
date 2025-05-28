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
        "decorators": [],
        "name": "fn1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
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
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "alternate": {
              "type": "Literal",
              "start": 70,
              "end": 71,
              "value": 0,
              "raw": "0"
            }
          },
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 73,
        "end": 76,
        "body": []
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 98,
      "end": 157,
      "id": {
        "type": "Identifier",
        "start": 107,
        "end": 110,
        "decorators": [],
        "name": "fn2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
          "right": {
            "type": "ConditionalExpression",
            "start": 124,
            "end": 152,
            "test": {
              "type": "Identifier",
              "start": 124,
              "end": 137,
              "decorators": [],
              "name": "someCondition",
              "optional": false,
              "typeAnnotation": null
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
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 154,
        "end": 157,
        "body": []
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
