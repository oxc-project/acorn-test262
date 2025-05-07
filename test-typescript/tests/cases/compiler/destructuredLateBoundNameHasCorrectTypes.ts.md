__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 225,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 45,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 44,
          "definite": false,
          "id": {
            "type": "ObjectPattern",
            "start": 4,
            "end": 39,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 6,
                "end": 37,
                "computed": true,
                "key": {
                  "type": "MemberExpression",
                  "start": 7,
                  "end": 22,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 7,
                    "end": 13,
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 14,
                    "end": 22,
                    "decorators": [],
                    "name": "iterator",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Identifier",
                  "start": 25,
                  "end": 37,
                  "decorators": [],
                  "name": "destructured",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 42,
            "end": 44,
            "elements": []
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 46,
      "end": 64,
      "directive": null,
      "expression": {
        "type": "UnaryExpression",
        "start": 46,
        "end": 63,
        "argument": {
          "type": "Identifier",
          "start": 51,
          "end": 63,
          "decorators": [],
          "name": "destructured",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "void",
        "prefix": true
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 66,
      "end": 87,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 72,
          "end": 86,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 72,
            "end": 77,
            "decorators": [],
            "name": "named",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 80,
            "end": 86,
            "raw": "\"prop\"",
            "value": "prop",
            "regex": null,
            "bigint": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 89,
      "end": 131,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 93,
          "end": 130,
          "definite": false,
          "id": {
            "type": "ObjectPattern",
            "start": 93,
            "end": 114,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 95,
                "end": 112,
                "computed": true,
                "key": {
                  "type": "Identifier",
                  "start": 96,
                  "end": 101,
                  "decorators": [],
                  "name": "named",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Identifier",
                  "start": 104,
                  "end": 112,
                  "decorators": [],
                  "name": "computed",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 117,
            "end": 130,
            "properties": [
              {
                "type": "Property",
                "start": 119,
                "end": 128,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 119,
                  "end": 123,
                  "decorators": [],
                  "name": "prop",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 125,
                  "end": 128,
                  "raw": "\"b\"",
                  "value": "b",
                  "regex": null,
                  "bigint": null
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 132,
      "end": 146,
      "directive": null,
      "expression": {
        "type": "UnaryExpression",
        "start": 132,
        "end": 145,
        "argument": {
          "type": "Identifier",
          "start": 137,
          "end": 145,
          "decorators": [],
          "name": "computed",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "void",
        "prefix": true
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 148,
      "end": 175,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 154,
          "end": 174,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 154,
            "end": 164,
            "decorators": [],
            "name": "notPresent",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 167,
            "end": 174,
            "raw": "\"prop2\"",
            "value": "prop2",
            "regex": null,
            "bigint": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 177,
      "end": 225,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 181,
          "end": 224,
          "definite": false,
          "id": {
            "type": "ObjectPattern",
            "start": 181,
            "end": 208,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 183,
                "end": 206,
                "computed": true,
                "key": {
                  "type": "Identifier",
                  "start": 184,
                  "end": 194,
                  "decorators": [],
                  "name": "notPresent",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Identifier",
                  "start": 197,
                  "end": 206,
                  "decorators": [],
                  "name": "computed2",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 211,
            "end": 224,
            "properties": [
              {
                "type": "Property",
                "start": 213,
                "end": 222,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 213,
                  "end": 217,
                  "decorators": [],
                  "name": "prop",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 219,
                  "end": 222,
                  "raw": "\"b\"",
                  "value": "b",
                  "regex": null,
                  "bigint": null
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "let"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
