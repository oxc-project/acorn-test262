__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 186,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 86,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 14,
        "name": "test1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 15,
          "end": 33,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 16,
            "end": 33,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 18,
              "end": 33,
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "start": 18,
                  "end": 24
                },
                {
                  "type": "TSStringKeyword",
                  "start": 27,
                  "end": 33
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 35,
        "end": 86,
        "body": [
          {
            "type": "IfStatement",
            "start": 41,
            "end": 84,
            "test": {
              "type": "BinaryExpression",
              "start": 45,
              "end": 64,
              "left": {
                "type": "Identifier",
                "start": 45,
                "end": 46,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "instanceof",
              "right": {
                "type": "Identifier",
                "start": 58,
                "end": 64,
                "name": "Object",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 66,
              "end": 84,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 76,
                  "end": 78,
                  "expression": {
                    "type": "Identifier",
                    "start": 76,
                    "end": 77,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 88,
      "end": 185,
      "id": {
        "type": "Identifier",
        "start": 97,
        "end": 102,
        "name": "test2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 103,
          "end": 132,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 104,
            "end": 132,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 106,
              "end": 132,
              "types": [
                {
                  "type": "TSUnionType",
                  "start": 107,
                  "end": 122,
                  "types": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 107,
                      "end": 113
                    },
                    {
                      "type": "TSStringKeyword",
                      "start": 116,
                      "end": 122
                    }
                  ]
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 126,
                  "end": 132
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 134,
        "end": 185,
        "body": [
          {
            "type": "IfStatement",
            "start": 140,
            "end": 183,
            "test": {
              "type": "BinaryExpression",
              "start": 144,
              "end": 163,
              "left": {
                "type": "Identifier",
                "start": 144,
                "end": 145,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "instanceof",
              "right": {
                "type": "Identifier",
                "start": 157,
                "end": 163,
                "name": "Object",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 165,
              "end": 183,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 175,
                  "end": 177,
                  "expression": {
                    "type": "Identifier",
                    "start": 175,
                    "end": 176,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          }
        ]
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
