__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "var1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 57,
                    "end": 63
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "hello",
                      "raw": "\"hello\"",
                      "start": 66,
                      "end": 73
                    },
                    "start": 66,
                    "end": 73
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "world",
                      "raw": "\"world\"",
                      "start": 76,
                      "end": 83
                    },
                    "start": 76,
                    "end": 83
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": true,
                      "raw": "true",
                      "start": 86,
                      "end": 90
                    },
                    "start": 86,
                    "end": 90
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": false,
                      "raw": "false",
                      "start": 93,
                      "end": 98
                    },
                    "start": 93,
                    "end": 98
                  },
                  {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSNumberKeyword",
                      "start": 101,
                      "end": 107
                    },
                    "start": 101,
                    "end": 109
                  },
                  {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 112,
                      "end": 118
                    },
                    "start": 112,
                    "end": 120
                  }
                ],
                "start": 57,
                "end": 120
              },
              "start": 55,
              "end": 120
            },
            "start": 51,
            "end": 120
          },
          "init": null,
          "definite": false,
          "start": 51,
          "end": 120
        }
      ],
      "declare": false,
      "start": 47,
      "end": 121
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "var1",
            "optional": false,
            "typeAnnotation": null,
            "start": 127,
            "end": 131
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "constructor",
            "optional": false,
            "typeAnnotation": null,
            "start": 132,
            "end": 143
          },
          "optional": false,
          "computed": false,
          "start": 127,
          "end": 143
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "Number",
          "optional": false,
          "typeAnnotation": null,
          "start": 148,
          "end": 154
        },
        "start": 127,
        "end": 154
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "var1",
              "optional": false,
              "typeAnnotation": null,
              "start": 162,
              "end": 166
            },
            "directive": null,
            "start": 162,
            "end": 167
          }
        ],
        "start": 156,
        "end": 179
      },
      "alternate": null,
      "start": 123,
      "end": 179
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "var1",
            "optional": false,
            "typeAnnotation": null,
            "start": 185,
            "end": 189
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "constructor",
            "optional": false,
            "typeAnnotation": null,
            "start": 190,
            "end": 201
          },
          "optional": false,
          "computed": false,
          "start": 185,
          "end": 201
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "String",
          "optional": false,
          "typeAnnotation": null,
          "start": 206,
          "end": 212
        },
        "start": 185,
        "end": 212
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "var1",
              "optional": false,
              "typeAnnotation": null,
              "start": 220,
              "end": 224
            },
            "directive": null,
            "start": 220,
            "end": 225
          }
        ],
        "start": 214,
        "end": 248
      },
      "alternate": null,
      "start": 181,
      "end": 248
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "var1",
            "optional": false,
            "typeAnnotation": null,
            "start": 254,
            "end": 258
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "constructor",
            "optional": false,
            "typeAnnotation": null,
            "start": 259,
            "end": 270
          },
          "optional": false,
          "computed": false,
          "start": 254,
          "end": 270
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "Boolean",
          "optional": false,
          "typeAnnotation": null,
          "start": 275,
          "end": 282
        },
        "start": 254,
        "end": 282
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "var1",
              "optional": false,
              "typeAnnotation": null,
              "start": 290,
              "end": 294
            },
            "directive": null,
            "start": 290,
            "end": 295
          }
        ],
        "start": 284,
        "end": 308
      },
      "alternate": null,
      "start": 250,
      "end": 308
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "var1",
            "optional": false,
            "typeAnnotation": null,
            "start": 314,
            "end": 318
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "constructor",
            "optional": false,
            "typeAnnotation": null,
            "start": 319,
            "end": 330
          },
          "optional": false,
          "computed": false,
          "start": 314,
          "end": 330
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "Array",
          "optional": false,
          "typeAnnotation": null,
          "start": 335,
          "end": 340
        },
        "start": 314,
        "end": 340
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "var1",
              "optional": false,
              "typeAnnotation": null,
              "start": 348,
              "end": 352
            },
            "directive": null,
            "start": 348,
            "end": 353
          }
        ],
        "start": 342,
        "end": 378
      },
      "alternate": null,
      "start": 310,
      "end": 378
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 47,
  "end": 378
}
```
