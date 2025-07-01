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
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 7,
                    "end": 13
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "iterator",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 14,
                    "end": 22
                  },
                  "optional": false,
                  "computed": false,
                  "start": 7,
                  "end": 22
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "destructured",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 25,
                  "end": 37
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 6,
                "end": 37
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 39
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [],
            "start": 42,
            "end": 44
          },
          "definite": false,
          "start": 4,
          "end": 44
        }
      ],
      "declare": false,
      "start": 0,
      "end": 45
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "destructured",
          "optional": false,
          "typeAnnotation": null,
          "start": 51,
          "end": 63
        },
        "prefix": true,
        "start": 46,
        "end": 63
      },
      "directive": null,
      "start": 46,
      "end": 64
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "named",
            "optional": false,
            "typeAnnotation": null,
            "start": 72,
            "end": 77
          },
          "init": {
            "type": "Literal",
            "value": "prop",
            "raw": "\"prop\"",
            "start": 80,
            "end": 86
          },
          "definite": false,
          "start": 72,
          "end": 86
        }
      ],
      "declare": false,
      "start": 66,
      "end": 87
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "named",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 96,
                  "end": 101
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "computed",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 104,
                  "end": 112
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 95,
                "end": 112
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 93,
            "end": 114
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "prop",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 119,
                  "end": 123
                },
                "value": {
                  "type": "Literal",
                  "value": "b",
                  "raw": "\"b\"",
                  "start": 125,
                  "end": 128
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 119,
                "end": 128
              }
            ],
            "start": 117,
            "end": 130
          },
          "definite": false,
          "start": 93,
          "end": 130
        }
      ],
      "declare": false,
      "start": 89,
      "end": 131
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "computed",
          "optional": false,
          "typeAnnotation": null,
          "start": 137,
          "end": 145
        },
        "prefix": true,
        "start": 132,
        "end": 145
      },
      "directive": null,
      "start": 132,
      "end": 146
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "notPresent",
            "optional": false,
            "typeAnnotation": null,
            "start": 154,
            "end": 164
          },
          "init": {
            "type": "Literal",
            "value": "prop2",
            "raw": "\"prop2\"",
            "start": 167,
            "end": 174
          },
          "definite": false,
          "start": 154,
          "end": 174
        }
      ],
      "declare": false,
      "start": 148,
      "end": 175
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "notPresent",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 184,
                  "end": 194
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "computed2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 197,
                  "end": 206
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 183,
                "end": 206
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 181,
            "end": 208
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "prop",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 213,
                  "end": 217
                },
                "value": {
                  "type": "Literal",
                  "value": "b",
                  "raw": "\"b\"",
                  "start": 219,
                  "end": 222
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 213,
                "end": 222
              }
            ],
            "start": 211,
            "end": 224
          },
          "definite": false,
          "start": 181,
          "end": 224
        }
      ],
      "declare": false,
      "start": 177,
      "end": 225
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 225
}
```
