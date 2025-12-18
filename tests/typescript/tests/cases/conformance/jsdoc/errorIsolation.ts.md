__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "async",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 11
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
                  "name": "doSomething",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 16,
                  "end": 27
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "_",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 29,
                      "end": 30
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 34,
                    "end": 36
                  },
                  "id": null,
                  "generator": false,
                  "start": 29,
                  "end": 36
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 16,
                "end": 36
              }
            ],
            "start": 14,
            "end": 38
          },
          "definite": false,
          "start": 6,
          "end": 38
        }
      ],
      "declare": false,
      "start": 0,
      "end": 39
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "async",
            "optional": false,
            "typeAnnotation": null,
            "start": 40,
            "end": 45
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "doSomething",
            "optional": false,
            "typeAnnotation": null,
            "start": 46,
            "end": 57
          },
          "optional": false,
          "computed": false,
          "start": 40,
          "end": 57
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 73,
              "end": 75
            },
            "id": null,
            "generator": false,
            "start": 67,
            "end": 75
          }
        ],
        "optional": false,
        "start": 40,
        "end": 77
      },
      "directive": null,
      "start": 40,
      "end": 78
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 78
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 0,
    "end": 5,
    "range": [
      0,
      5
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 6,
    "end": 11,
    "range": [
      6,
      11
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 12,
    "end": 13,
    "range": [
      12,
      13
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 14,
    "end": 15,
    "range": [
      14,
      15
    ]
  },
  {
    "type": "Identifier",
    "value": "doSomething",
    "start": 16,
    "end": 27,
    "range": [
      16,
      27
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 27,
    "end": 28,
    "range": [
      27,
      28
    ]
  },
  {
    "type": "Identifier",
    "value": "_",
    "start": 29,
    "end": 30,
    "range": [
      29,
      30
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 31,
    "end": 33,
    "range": [
      31,
      33
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 34,
    "end": 35,
    "range": [
      34,
      35
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 35,
    "end": 36,
    "range": [
      35,
      36
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 37,
    "end": 38,
    "range": [
      37,
      38
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 38,
    "end": 39,
    "range": [
      38,
      39
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 40,
    "end": 45,
    "range": [
      40,
      45
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 45,
    "end": 46,
    "range": [
      45,
      46
    ]
  },
  {
    "type": "Identifier",
    "value": "doSomething",
    "start": 46,
    "end": 57,
    "range": [
      46,
      57
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 57,
    "end": 58,
    "range": [
      57,
      58
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 67,
    "end": 68,
    "range": [
      67,
      68
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 68,
    "end": 69,
    "range": [
      68,
      69
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 70,
    "end": 72,
    "range": [
      70,
      72
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 73,
    "end": 74,
    "range": [
      73,
      74
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 74,
    "end": 75,
    "range": [
      74,
      75
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 76,
    "end": 77,
    "range": [
      76,
      77
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 77,
    "end": 78,
    "range": [
      77,
      78
    ]
  }
]
```
