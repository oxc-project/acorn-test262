__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn1",
        "optional": false,
        "typeAnnotation": null,
        "start": 30,
        "end": 33
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
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
                ],
                "start": 37,
                "end": 55
              },
              "start": 35,
              "end": 55
            },
            "start": 34,
            "end": 55
          },
          "right": {
            "type": "ConditionalExpression",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 58,
                "end": 59
              },
              "operator": ">",
              "right": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 62,
                "end": 63
              },
              "start": 58,
              "end": 63
            },
            "consequent": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 66,
              "end": 67
            },
            "alternate": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 70,
              "end": 71
            },
            "start": 58,
            "end": 71
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 34,
          "end": 71
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 73,
        "end": 76
      },
      "expression": false,
      "start": 21,
      "end": 76
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn2",
        "optional": false,
        "typeAnnotation": null,
        "start": 107,
        "end": 110
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 115,
                "end": 121
              },
              "start": 113,
              "end": 121
            },
            "start": 111,
            "end": 121
          },
          "right": {
            "type": "ConditionalExpression",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "someCondition",
              "optional": false,
              "typeAnnotation": null,
              "start": 124,
              "end": 137
            },
            "consequent": {
              "type": "Literal",
              "value": "value1",
              "raw": "'value1'",
              "start": 140,
              "end": 148
            },
            "alternate": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 151,
              "end": 152
            },
            "start": 124,
            "end": 152
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 111,
          "end": 152
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 154,
        "end": 157
      },
      "expression": false,
      "start": 98,
      "end": 157
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 21,
  "end": 157
}
```
