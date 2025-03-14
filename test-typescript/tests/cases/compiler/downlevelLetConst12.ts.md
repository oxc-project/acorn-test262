__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 171,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 12,
      "directive": "use strict",
      "expression": {
        "type": "Literal",
        "start": 0,
        "end": 12,
        "raw": "'use strict'",
        "value": "use strict"
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 58,
      "end": 66,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 62,
          "end": 65,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 62,
            "end": 65,
            "decorators": [],
            "name": "foo",
            "optional": false
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 67,
      "end": 81,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 73,
          "end": 80,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 73,
            "end": 76,
            "decorators": [],
            "name": "bar",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 79,
            "end": 80,
            "raw": "1",
            "value": 1
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 83,
      "end": 98,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 87,
          "end": 97,
          "definite": false,
          "id": {
            "type": "ArrayPattern",
            "start": 87,
            "end": 92,
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "start": 88,
                "end": 91,
                "decorators": [],
                "name": "baz",
                "optional": false
              }
            ],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 95,
            "end": 97,
            "elements": []
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 99,
      "end": 124,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 103,
          "end": 123,
          "definite": false,
          "id": {
            "type": "ObjectPattern",
            "start": 103,
            "end": 112,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 104,
                "end": 111,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 104,
                  "end": 105,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Identifier",
                  "start": 107,
                  "end": 111,
                  "decorators": [],
                  "name": "baz2",
                  "optional": false
                }
              }
            ]
          },
          "init": {
            "type": "ObjectExpression",
            "start": 115,
            "end": 123,
            "properties": [
              {
                "type": "Property",
                "start": 117,
                "end": 121,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 117,
                  "end": 118,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 120,
                  "end": 121,
                  "raw": "1",
                  "value": 1
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
      "type": "VariableDeclaration",
      "start": 126,
      "end": 143,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 132,
          "end": 143,
          "definite": false,
          "id": {
            "type": "ArrayPattern",
            "start": 132,
            "end": 138,
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "start": 133,
                "end": 137,
                "decorators": [],
                "name": "baz3",
                "optional": false
              }
            ],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 141,
            "end": 143,
            "elements": []
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 144,
      "end": 171,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 150,
          "end": 170,
          "definite": false,
          "id": {
            "type": "ObjectPattern",
            "start": 150,
            "end": 159,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 151,
                "end": 158,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 151,
                  "end": 152,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Identifier",
                  "start": 154,
                  "end": 158,
                  "decorators": [],
                  "name": "baz4",
                  "optional": false
                }
              }
            ]
          },
          "init": {
            "type": "ObjectExpression",
            "start": 162,
            "end": 170,
            "properties": [
              {
                "type": "Property",
                "start": 164,
                "end": 168,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 164,
                  "end": 165,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 167,
                  "end": 168,
                  "raw": "1",
                  "value": 1
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
