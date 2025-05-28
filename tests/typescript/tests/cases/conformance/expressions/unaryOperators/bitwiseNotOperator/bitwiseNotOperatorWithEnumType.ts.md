__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 28,
  "end": 356,
  "body": [
    {
      "type": "TSEnumDeclaration",
      "start": 28,
      "end": 51,
      "id": {
        "type": "Identifier",
        "start": 33,
        "end": 38,
        "decorators": [],
        "name": "ENUM1",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSEnumBody",
        "start": 39,
        "end": 51,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 41,
            "end": 42,
            "id": {
              "type": "Identifier",
              "start": 41,
              "end": 42,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 44,
            "end": 45,
            "id": {
              "type": "Identifier",
              "start": 44,
              "end": 45,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 47,
            "end": 49,
            "id": {
              "type": "Literal",
              "start": 47,
              "end": 49,
              "value": "",
              "raw": "\"\""
            },
            "initializer": null,
            "computed": false
          }
        ]
      },
      "const": false,
      "declare": false
    },
    {
      "type": "EmptyStatement",
      "start": 51,
      "end": 52
    },
    {
      "type": "VariableDeclaration",
      "start": 71,
      "end": 100,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 75,
          "end": 99,
          "id": {
            "type": "Identifier",
            "start": 75,
            "end": 90,
            "decorators": [],
            "name": "ResultIsNumber1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 93,
            "end": 99,
            "operator": "~",
            "argument": {
              "type": "Identifier",
              "start": 94,
              "end": 99,
              "decorators": [],
              "name": "ENUM1",
              "optional": false,
              "typeAnnotation": null
            },
            "prefix": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 127,
      "end": 161,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 131,
          "end": 160,
          "id": {
            "type": "Identifier",
            "start": 131,
            "end": 146,
            "decorators": [],
            "name": "ResultIsNumber2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 149,
            "end": 160,
            "operator": "~",
            "argument": {
              "type": "MemberExpression",
              "start": 150,
              "end": 160,
              "object": {
                "type": "Identifier",
                "start": 150,
                "end": 155,
                "decorators": [],
                "name": "ENUM1",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Literal",
                "start": 156,
                "end": 159,
                "value": "A",
                "raw": "\"A\""
              },
              "optional": false,
              "computed": true
            },
            "prefix": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 162,
      "end": 208,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 166,
          "end": 207,
          "id": {
            "type": "Identifier",
            "start": 166,
            "end": 181,
            "decorators": [],
            "name": "ResultIsNumber3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 184,
            "end": 207,
            "operator": "~",
            "argument": {
              "type": "BinaryExpression",
              "start": 186,
              "end": 206,
              "left": {
                "type": "MemberExpression",
                "start": 186,
                "end": 193,
                "object": {
                  "type": "Identifier",
                  "start": 186,
                  "end": 191,
                  "decorators": [],
                  "name": "ENUM1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 192,
                  "end": 193,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "operator": "+",
              "right": {
                "type": "MemberExpression",
                "start": 196,
                "end": 206,
                "object": {
                  "type": "Identifier",
                  "start": 196,
                  "end": 201,
                  "decorators": [],
                  "name": "ENUM1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Literal",
                  "start": 202,
                  "end": 205,
                  "value": "B",
                  "raw": "\"B\""
                },
                "optional": false,
                "computed": true
              }
            },
            "prefix": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 234,
      "end": 282,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 238,
          "end": 281,
          "id": {
            "type": "Identifier",
            "start": 238,
            "end": 253,
            "decorators": [],
            "name": "ResultIsNumber4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 256,
            "end": 281,
            "operator": "~",
            "argument": {
              "type": "UnaryExpression",
              "start": 257,
              "end": 281,
              "operator": "~",
              "argument": {
                "type": "UnaryExpression",
                "start": 258,
                "end": 281,
                "operator": "~",
                "argument": {
                  "type": "BinaryExpression",
                  "start": 260,
                  "end": 280,
                  "left": {
                    "type": "MemberExpression",
                    "start": 260,
                    "end": 270,
                    "object": {
                      "type": "Identifier",
                      "start": 260,
                      "end": 265,
                      "decorators": [],
                      "name": "ENUM1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Literal",
                      "start": 266,
                      "end": 269,
                      "value": "A",
                      "raw": "\"A\""
                    },
                    "optional": false,
                    "computed": true
                  },
                  "operator": "+",
                  "right": {
                    "type": "MemberExpression",
                    "start": 273,
                    "end": 280,
                    "object": {
                      "type": "Identifier",
                      "start": 273,
                      "end": 278,
                      "decorators": [],
                      "name": "ENUM1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 279,
                      "end": 280,
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  }
                },
                "prefix": true
              },
              "prefix": true
            },
            "prefix": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 313,
      "end": 320,
      "expression": {
        "type": "UnaryExpression",
        "start": 313,
        "end": 319,
        "operator": "~",
        "argument": {
          "type": "Identifier",
          "start": 314,
          "end": 319,
          "decorators": [],
          "name": "ENUM1",
          "optional": false,
          "typeAnnotation": null
        },
        "prefix": true
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 321,
      "end": 333,
      "expression": {
        "type": "UnaryExpression",
        "start": 321,
        "end": 332,
        "operator": "~",
        "argument": {
          "type": "MemberExpression",
          "start": 322,
          "end": 332,
          "object": {
            "type": "Identifier",
            "start": 322,
            "end": 327,
            "decorators": [],
            "name": "ENUM1",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Literal",
            "start": 328,
            "end": 331,
            "value": "A",
            "raw": "\"A\""
          },
          "optional": false,
          "computed": true
        },
        "prefix": true
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 334,
      "end": 356,
      "expression": {
        "type": "SequenceExpression",
        "start": 334,
        "end": 355,
        "expressions": [
          {
            "type": "UnaryExpression",
            "start": 334,
            "end": 342,
            "operator": "~",
            "argument": {
              "type": "MemberExpression",
              "start": 335,
              "end": 342,
              "object": {
                "type": "Identifier",
                "start": 335,
                "end": 340,
                "decorators": [],
                "name": "ENUM1",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 341,
                "end": 342,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "prefix": true
          },
          {
            "type": "UnaryExpression",
            "start": 344,
            "end": 355,
            "operator": "~",
            "argument": {
              "type": "MemberExpression",
              "start": 345,
              "end": 355,
              "object": {
                "type": "Identifier",
                "start": 345,
                "end": 350,
                "decorators": [],
                "name": "ENUM1",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Literal",
                "start": 351,
                "end": 354,
                "value": "B",
                "raw": "\"B\""
              },
              "optional": false,
              "computed": true
            },
            "prefix": true
          }
        ]
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
