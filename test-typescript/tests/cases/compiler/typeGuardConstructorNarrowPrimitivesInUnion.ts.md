__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 47,
  "end": 379,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 47,
      "end": 121,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 51,
          "end": 120,
          "id": {
            "type": "Identifier",
            "start": 51,
            "end": 120,
            "name": "var1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 55,
              "end": 120,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 57,
                "end": 120,
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 57,
                    "end": 63
                  },
                  {
                    "type": "TSLiteralType",
                    "start": 66,
                    "end": 73,
                    "literal": {
                      "type": "Literal",
                      "start": 66,
                      "end": 73,
                      "value": "hello",
                      "raw": "\"hello\""
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "start": 76,
                    "end": 83,
                    "literal": {
                      "type": "Literal",
                      "start": 76,
                      "end": 83,
                      "value": "world",
                      "raw": "\"world\""
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "start": 86,
                    "end": 90,
                    "literal": {
                      "type": "Literal",
                      "start": 86,
                      "end": 90,
                      "value": true,
                      "raw": "true"
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "start": 93,
                    "end": 98,
                    "literal": {
                      "type": "Literal",
                      "start": 93,
                      "end": 98,
                      "value": false,
                      "raw": "false"
                    }
                  },
                  {
                    "type": "TSArrayType",
                    "start": 101,
                    "end": 109,
                    "elementType": {
                      "type": "TSNumberKeyword",
                      "start": 101,
                      "end": 107
                    }
                  },
                  {
                    "type": "TSArrayType",
                    "start": 112,
                    "end": 120,
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 112,
                      "end": 118
                    }
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "IfStatement",
      "start": 123,
      "end": 179,
      "test": {
        "type": "BinaryExpression",
        "start": 127,
        "end": 154,
        "left": {
          "type": "MemberExpression",
          "start": 127,
          "end": 143,
          "object": {
            "type": "Identifier",
            "start": 127,
            "end": 131,
            "name": "var1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 132,
            "end": 143,
            "name": "constructor",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "start": 148,
          "end": 154,
          "name": "Number",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 156,
        "end": 179,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 162,
            "end": 167,
            "expression": {
              "type": "Identifier",
              "start": 162,
              "end": 166,
              "name": "var1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 181,
      "end": 248,
      "test": {
        "type": "BinaryExpression",
        "start": 185,
        "end": 212,
        "left": {
          "type": "MemberExpression",
          "start": 185,
          "end": 201,
          "object": {
            "type": "Identifier",
            "start": 185,
            "end": 189,
            "name": "var1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 190,
            "end": 201,
            "name": "constructor",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "start": 206,
          "end": 212,
          "name": "String",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 214,
        "end": 248,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 220,
            "end": 225,
            "expression": {
              "type": "Identifier",
              "start": 220,
              "end": 224,
              "name": "var1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 250,
      "end": 308,
      "test": {
        "type": "BinaryExpression",
        "start": 254,
        "end": 282,
        "left": {
          "type": "MemberExpression",
          "start": 254,
          "end": 270,
          "object": {
            "type": "Identifier",
            "start": 254,
            "end": 258,
            "name": "var1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 259,
            "end": 270,
            "name": "constructor",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "start": 275,
          "end": 282,
          "name": "Boolean",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 284,
        "end": 308,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 290,
            "end": 295,
            "expression": {
              "type": "Identifier",
              "start": 290,
              "end": 294,
              "name": "var1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 310,
      "end": 378,
      "test": {
        "type": "BinaryExpression",
        "start": 314,
        "end": 340,
        "left": {
          "type": "MemberExpression",
          "start": 314,
          "end": 330,
          "object": {
            "type": "Identifier",
            "start": 314,
            "end": 318,
            "name": "var1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 319,
            "end": 330,
            "name": "constructor",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "start": 335,
          "end": 340,
          "name": "Array",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 342,
        "end": 378,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 348,
            "end": 353,
            "expression": {
              "type": "Identifier",
              "start": 348,
              "end": 352,
              "name": "var1",
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
  ],
  "sourceType": "script",
  "hashbang": null
}
```
