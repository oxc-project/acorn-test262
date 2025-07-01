__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Literal",
        "value": "use strict",
        "raw": "'use strict'",
        "start": 0,
        "end": 12
      },
      "directive": "use strict",
      "start": 0,
      "end": 12
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 62,
            "end": 65
          },
          "init": null,
          "definite": false,
          "start": 62,
          "end": 65
        }
      ],
      "declare": false,
      "start": 58,
      "end": 66
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
            "name": "bar",
            "optional": false,
            "typeAnnotation": null,
            "start": 73,
            "end": 76
          },
          "init": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 79,
            "end": 80
          },
          "definite": false,
          "start": 73,
          "end": 80
        }
      ],
      "declare": false,
      "start": 67,
      "end": 81
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "baz",
                "optional": false,
                "typeAnnotation": null,
                "start": 88,
                "end": 91
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 87,
            "end": 92
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [],
            "start": 95,
            "end": 97
          },
          "definite": false,
          "start": 87,
          "end": 97
        }
      ],
      "declare": false,
      "start": 83,
      "end": 98
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 104,
                  "end": 105
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "baz2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 107,
                  "end": 111
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 104,
                "end": 111
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 103,
            "end": 112
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 117,
                  "end": 118
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 120,
                  "end": 121
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 117,
                "end": 121
              }
            ],
            "start": 115,
            "end": 123
          },
          "definite": false,
          "start": 103,
          "end": 123
        }
      ],
      "declare": false,
      "start": 99,
      "end": 124
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "baz3",
                "optional": false,
                "typeAnnotation": null,
                "start": 133,
                "end": 137
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 132,
            "end": 138
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [],
            "start": 141,
            "end": 143
          },
          "definite": false,
          "start": 132,
          "end": 143
        }
      ],
      "declare": false,
      "start": 126,
      "end": 143
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 151,
                  "end": 152
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "baz4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 154,
                  "end": 158
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 151,
                "end": 158
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 150,
            "end": 159
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 164,
                  "end": 165
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 167,
                  "end": 168
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 164,
                "end": 168
              }
            ],
            "start": 162,
            "end": 170
          },
          "definite": false,
          "start": 150,
          "end": 170
        }
      ],
      "declare": false,
      "start": 144,
      "end": 171
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 171
}
```
