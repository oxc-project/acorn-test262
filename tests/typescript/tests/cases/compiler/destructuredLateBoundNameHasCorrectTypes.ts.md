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
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 44,
          "id": {
            "type": "ObjectPattern",
            "start": 4,
            "end": 39,
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "start": 6,
                "end": 37,
                "kind": "init",
                "key": {
                  "type": "MemberExpression",
                  "start": 7,
                  "end": 22,
                  "object": {
                    "type": "Identifier",
                    "start": 7,
                    "end": 13,
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 14,
                    "end": 22,
                    "decorators": [],
                    "name": "iterator",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 25,
                  "end": 37,
                  "decorators": [],
                  "name": "destructured",
                  "optional": false,
                  "typeAnnotation": null
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false
              }
            ],
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
        "argument": {
          "type": "Identifier",
          "start": 51,
          "end": 63,
          "decorators": [],
          "name": "destructured",
          "optional": false,
          "typeAnnotation": null
        },
        "prefix": true
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 66,
      "end": 87,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 72,
          "end": 86,
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
            "value": "prop",
            "raw": "\"prop\""
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 89,
      "end": 131,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 93,
          "end": 130,
          "id": {
            "type": "ObjectPattern",
            "start": 93,
            "end": 114,
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "start": 95,
                "end": 112,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 96,
                  "end": 101,
                  "decorators": [],
                  "name": "named",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Identifier",
                  "start": 104,
                  "end": 112,
                  "decorators": [],
                  "name": "computed",
                  "optional": false,
                  "typeAnnotation": null
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false
              }
            ],
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 119,
                  "end": 123,
                  "decorators": [],
                  "name": "prop",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 125,
                  "end": 128,
                  "value": "b",
                  "raw": "\"b\""
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
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
        "argument": {
          "type": "Identifier",
          "start": 137,
          "end": 145,
          "decorators": [],
          "name": "computed",
          "optional": false,
          "typeAnnotation": null
        },
        "prefix": true
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 148,
      "end": 175,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 154,
          "end": 174,
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
            "value": "prop2",
            "raw": "\"prop2\""
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 177,
      "end": 225,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 181,
          "end": 224,
          "id": {
            "type": "ObjectPattern",
            "start": 181,
            "end": 208,
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "start": 183,
                "end": 206,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 184,
                  "end": 194,
                  "decorators": [],
                  "name": "notPresent",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Identifier",
                  "start": 197,
                  "end": 206,
                  "decorators": [],
                  "name": "computed2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false
              }
            ],
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 213,
                  "end": 217,
                  "decorators": [],
                  "name": "prop",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 219,
                  "end": 222,
                  "value": "b",
                  "raw": "\"b\""
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
