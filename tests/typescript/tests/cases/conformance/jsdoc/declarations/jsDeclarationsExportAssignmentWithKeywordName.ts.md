__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 5
          },
          "init": {
            "type": "Literal",
            "value": 12,
            "raw": "12",
            "start": 8,
            "end": 10
          },
          "definite": false,
          "start": 4,
          "end": 10
        }
      ],
      "declare": false,
      "start": 0,
      "end": 11
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null,
            "start": 12,
            "end": 18
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 19,
            "end": 26
          },
          "optional": false,
          "computed": false,
          "start": 12,
          "end": 26
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "extends",
                "optional": false,
                "typeAnnotation": null,
                "start": 35,
                "end": 42
              },
              "value": {
                "type": "Literal",
                "value": "base",
                "raw": "'base'",
                "start": 44,
                "end": 50
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 35,
              "end": 50
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "more",
                "optional": false,
                "typeAnnotation": null,
                "start": 56,
                "end": 60
              },
              "value": {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "others",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 72,
                      "end": 78
                    },
                    "value": {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "Literal",
                          "value": "strs",
                          "raw": "'strs'",
                          "start": 81,
                          "end": 87
                        }
                      ],
                      "start": 80,
                      "end": 88
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 72,
                    "end": 88
                  }
                ],
                "start": 62,
                "end": 94
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 56,
              "end": 94
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 100,
                "end": 101
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 100,
                "end": 101
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 100,
              "end": 101
            }
          ],
          "start": 29,
          "end": 103
        },
        "start": 12,
        "end": 103
      },
      "directive": null,
      "start": 12,
      "end": 104
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 104
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "var",
    "start": 0,
    "end": 3,
    "range": [
      0,
      3
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4,
    "end": 5,
    "range": [
      4,
      5
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6,
    "end": 7,
    "range": [
      6,
      7
    ]
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 8,
    "end": 10,
    "range": [
      8,
      10
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 10,
    "end": 11,
    "range": [
      10,
      11
    ]
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 12,
    "end": 18,
    "range": [
      12,
      18
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 18,
    "end": 19,
    "range": [
      18,
      19
    ]
  },
  {
    "type": "Identifier",
    "value": "exports",
    "start": 19,
    "end": 26,
    "range": [
      19,
      26
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 27,
    "end": 28,
    "range": [
      27,
      28
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 29,
    "end": 30,
    "range": [
      29,
      30
    ]
  },
  {
    "type": "Identifier",
    "value": "extends",
    "start": 35,
    "end": 42,
    "range": [
      35,
      42
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 42,
    "end": 43,
    "range": [
      42,
      43
    ]
  },
  {
    "type": "String",
    "value": "'base'",
    "start": 44,
    "end": 50,
    "range": [
      44,
      50
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 50,
    "end": 51,
    "range": [
      50,
      51
    ]
  },
  {
    "type": "Identifier",
    "value": "more",
    "start": 56,
    "end": 60,
    "range": [
      56,
      60
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 60,
    "end": 61,
    "range": [
      60,
      61
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 62,
    "end": 63,
    "range": [
      62,
      63
    ]
  },
  {
    "type": "Identifier",
    "value": "others",
    "start": 72,
    "end": 78,
    "range": [
      72,
      78
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 78,
    "end": 79,
    "range": [
      78,
      79
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 80,
    "end": 81,
    "range": [
      80,
      81
    ]
  },
  {
    "type": "String",
    "value": "'strs'",
    "start": 81,
    "end": 87,
    "range": [
      81,
      87
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 87,
    "end": 88,
    "range": [
      87,
      88
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 93,
    "end": 94,
    "range": [
      93,
      94
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 94,
    "end": 95,
    "range": [
      94,
      95
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 100,
    "end": 101,
    "range": [
      100,
      101
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 102,
    "end": 103,
    "range": [
      102,
      103
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 103,
    "end": 104,
    "range": [
      103,
      104
    ]
  }
]
```
