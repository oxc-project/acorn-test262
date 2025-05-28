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
      "expression": {
        "type": "Literal",
        "start": 0,
        "end": 12,
        "value": "use strict",
        "raw": "'use strict'"
      },
      "directive": "use strict"
    },
    {
      "type": "VariableDeclaration",
      "start": 58,
      "end": 66,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 62,
          "end": 65,
          "id": {
            "type": "Identifier",
            "start": 62,
            "end": 65,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 67,
      "end": 81,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 73,
          "end": 80,
          "id": {
            "type": "Identifier",
            "start": 73,
            "end": 76,
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 79,
            "end": 80,
            "value": 1,
            "raw": "1"
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 83,
      "end": 98,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 87,
          "end": 97,
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
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 95,
            "end": 97,
            "elements": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 99,
      "end": 124,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 103,
          "end": 123,
          "id": {
            "type": "ObjectPattern",
            "start": 103,
            "end": 112,
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "start": 104,
                "end": 111,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 104,
                  "end": 105,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Identifier",
                  "start": 107,
                  "end": 111,
                  "decorators": [],
                  "name": "baz2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ],
            "optional": false,
            "typeAnnotation": null
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 117,
                  "end": 118,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 120,
                  "end": 121,
                  "value": 1,
                  "raw": "1"
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
      "type": "VariableDeclaration",
      "start": 126,
      "end": 143,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 132,
          "end": 143,
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
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 141,
            "end": 143,
            "elements": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 144,
      "end": 171,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 150,
          "end": 170,
          "id": {
            "type": "ObjectPattern",
            "start": 150,
            "end": 159,
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "start": 151,
                "end": 158,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 151,
                  "end": 152,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Identifier",
                  "start": 154,
                  "end": 158,
                  "decorators": [],
                  "name": "baz4",
                  "optional": false,
                  "typeAnnotation": null
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ],
            "optional": false,
            "typeAnnotation": null
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 164,
                  "end": 165,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 167,
                  "end": 168,
                  "value": 1,
                  "raw": "1"
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
