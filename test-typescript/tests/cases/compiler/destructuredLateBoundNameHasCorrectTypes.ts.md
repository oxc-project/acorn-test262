__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 226,
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
          "id": {
            "type": "ObjectPattern",
            "start": 4,
            "end": 39,
            "properties": [
              {
                "type": "Property",
                "start": 6,
                "end": 37,
                "method": false,
                "shorthand": false,
                "computed": true,
                "key": {
                  "type": "MemberExpression",
                  "start": 7,
                  "end": 22,
                  "object": {
                    "type": "Identifier",
                    "start": 7,
                    "end": 13,
                    "name": "Symbol",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 14,
                    "end": 22,
                    "name": "iterator",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 25,
                  "end": 37,
                  "name": "destructured",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "kind": "init",
                "optional": false
              }
            ],
            "decorators": [],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 42,
            "end": 44,
            "elements": []
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 46,
      "end": 64,
      "expression": {
        "type": "UnaryExpression",
        "start": 46,
        "end": 63,
        "operator": "void",
        "prefix": true,
        "argument": {
          "type": "Identifier",
          "start": 51,
          "end": 63,
          "name": "destructured",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
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
          "id": {
            "type": "Identifier",
            "start": 72,
            "end": 77,
            "name": "named",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 80,
            "end": 86,
            "value": "prop",
            "raw": "\"prop\""
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "ObjectPattern",
            "start": 93,
            "end": 114,
            "properties": [
              {
                "type": "Property",
                "start": 95,
                "end": 112,
                "method": false,
                "shorthand": false,
                "computed": true,
                "key": {
                  "type": "Identifier",
                  "start": 96,
                  "end": 101,
                  "name": "named",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 104,
                  "end": 112,
                  "name": "computed",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "kind": "init",
                "optional": false
              }
            ],
            "decorators": [],
            "optional": false,
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 119,
                  "end": 123,
                  "name": "prop",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 125,
                  "end": 128,
                  "value": "b",
                  "raw": "\"b\""
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 132,
      "end": 146,
      "expression": {
        "type": "UnaryExpression",
        "start": 132,
        "end": 145,
        "operator": "void",
        "prefix": true,
        "argument": {
          "type": "Identifier",
          "start": 137,
          "end": 145,
          "name": "computed",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
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
          "id": {
            "type": "Identifier",
            "start": 154,
            "end": 164,
            "name": "notPresent",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 167,
            "end": 174,
            "value": "prop2",
            "raw": "\"prop2\""
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "ObjectPattern",
            "start": 181,
            "end": 208,
            "properties": [
              {
                "type": "Property",
                "start": 183,
                "end": 206,
                "method": false,
                "shorthand": false,
                "computed": true,
                "key": {
                  "type": "Identifier",
                  "start": 184,
                  "end": 194,
                  "name": "notPresent",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 197,
                  "end": 206,
                  "name": "computed2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "kind": "init",
                "optional": false
              }
            ],
            "decorators": [],
            "optional": false,
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 213,
                  "end": 217,
                  "name": "prop",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 219,
                  "end": 222,
                  "value": "b",
                  "raw": "\"b\""
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
