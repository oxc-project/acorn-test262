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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 62,
          "end": 65,
          "id": {
            "type": "Identifier",
            "start": 62,
            "end": 65,
            "name": "foo",
            "typeAnnotation": null,
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
      "type": "VariableDeclaration",
      "start": 67,
      "end": 81,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 73,
          "end": 80,
          "id": {
            "type": "Identifier",
            "start": 73,
            "end": 76,
            "name": "bar",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "ArrayPattern",
            "start": 87,
            "end": 92,
            "elements": [
              {
                "type": "Identifier",
                "start": 88,
                "end": 91,
                "name": "baz",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "decorators": [],
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
      "kind": "let",
      "declare": false
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
          "id": {
            "type": "ObjectPattern",
            "start": 103,
            "end": 112,
            "properties": [
              {
                "type": "Property",
                "start": 104,
                "end": 111,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 104,
                  "end": 105,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 107,
                  "end": 111,
                  "name": "baz2",
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
            "start": 115,
            "end": 123,
            "properties": [
              {
                "type": "Property",
                "start": 117,
                "end": 121,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 117,
                  "end": 118,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 120,
                  "end": 121,
                  "value": 1,
                  "raw": "1"
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
      "type": "VariableDeclaration",
      "start": 126,
      "end": 143,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 132,
          "end": 143,
          "id": {
            "type": "ArrayPattern",
            "start": 132,
            "end": 138,
            "elements": [
              {
                "type": "Identifier",
                "start": 133,
                "end": 137,
                "name": "baz3",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "decorators": [],
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
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "ObjectPattern",
            "start": 150,
            "end": 159,
            "properties": [
              {
                "type": "Property",
                "start": 151,
                "end": 158,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 151,
                  "end": 152,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 154,
                  "end": 158,
                  "name": "baz4",
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
            "start": 162,
            "end": 170,
            "properties": [
              {
                "type": "Property",
                "start": 164,
                "end": 168,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 164,
                  "end": 165,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 167,
                  "end": 168,
                  "value": 1,
                  "raw": "1"
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
