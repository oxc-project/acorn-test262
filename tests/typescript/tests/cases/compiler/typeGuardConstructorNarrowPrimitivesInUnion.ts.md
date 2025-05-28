__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 47,
  "end": 378,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 47,
      "end": 121,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 51,
          "end": 120,
          "id": {
            "type": "Identifier",
            "start": 51,
            "end": 120,
            "decorators": [],
            "name": "var1",
            "optional": false,
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
            }
          },
          "init": null,
          "definite": false
        }
      ],
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
            "decorators": [],
            "name": "var1",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 132,
            "end": 143,
            "decorators": [],
            "name": "constructor",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "start": 148,
          "end": 154,
          "decorators": [],
          "name": "Number",
          "optional": false,
          "typeAnnotation": null
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
              "decorators": [],
              "name": "var1",
              "optional": false,
              "typeAnnotation": null
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
            "decorators": [],
            "name": "var1",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 190,
            "end": 201,
            "decorators": [],
            "name": "constructor",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "start": 206,
          "end": 212,
          "decorators": [],
          "name": "String",
          "optional": false,
          "typeAnnotation": null
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
              "decorators": [],
              "name": "var1",
              "optional": false,
              "typeAnnotation": null
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
            "decorators": [],
            "name": "var1",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 259,
            "end": 270,
            "decorators": [],
            "name": "constructor",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "start": 275,
          "end": 282,
          "decorators": [],
          "name": "Boolean",
          "optional": false,
          "typeAnnotation": null
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
              "decorators": [],
              "name": "var1",
              "optional": false,
              "typeAnnotation": null
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
            "decorators": [],
            "name": "var1",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 319,
            "end": 330,
            "decorators": [],
            "name": "constructor",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "start": 335,
          "end": 340,
          "decorators": [],
          "name": "Array",
          "optional": false,
          "typeAnnotation": null
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
              "decorators": [],
              "name": "var1",
              "optional": false,
              "typeAnnotation": null
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
