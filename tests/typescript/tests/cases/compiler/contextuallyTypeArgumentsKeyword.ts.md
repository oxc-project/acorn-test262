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
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 26,
            "end": 27
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
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 36,
                  "end": 39
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "setTimeout",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 52,
                            "end": 62
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "FunctionExpression",
                              "id": null,
                              "generator": false,
                              "async": false,
                              "declare": false,
                              "typeParameters": null,
                              "params": [],
                              "returnType": null,
                              "body": {
                                "type": "BlockStatement",
                                "body": [
                                  {
                                    "type": "ExpressionStatement",
                                    "expression": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "arguments",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 76,
                                      "end": 85
                                    },
                                    "directive": null,
                                    "start": 76,
                                    "end": 85
                                  }
                                ],
                                "start": 74,
                                "end": 87
                              },
                              "expression": false,
                              "start": 63,
                              "end": 87
                            },
                            {
                              "type": "Literal",
                              "value": 0,
                              "raw": "0",
                              "start": 89,
                              "end": 90
                            }
                          ],
                          "optional": false,
                          "start": 52,
                          "end": 91
                        },
                        "directive": null,
                        "start": 52,
                        "end": 92
                      }
                    ],
                    "start": 42,
                    "end": 98
                  },
                  "expression": false,
                  "start": 39,
                  "end": 98
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 36,
                "end": 98
              }
            ],
            "start": 30,
            "end": 100
          },
          "definite": false,
          "start": 26,
          "end": 100
        }
      ],
      "declare": false,
      "start": 20,
      "end": 100
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 20,
  "end": 100
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 20,
    "end": 25,
    "range": [
      20,
      25
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 26,
    "end": 27,
    "range": [
      26,
      27
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 28,
    "end": 29,
    "range": [
      28,
      29
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 30,
    "end": 31,
    "range": [
      30,
      31
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 36,
    "end": 39,
    "range": [
      36,
      39
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 39,
    "end": 40,
    "range": [
      39,
      40
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 40,
    "end": 41,
    "range": [
      40,
      41
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 42,
    "end": 43,
    "range": [
      42,
      43
    ]
  },
  {
    "type": "Identifier",
    "value": "setTimeout",
    "start": 52,
    "end": 62,
    "range": [
      52,
      62
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 62,
    "end": 63,
    "range": [
      62,
      63
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 63,
    "end": 71,
    "range": [
      63,
      71
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 71,
    "end": 72,
    "range": [
      71,
      72
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 72,
    "end": 73,
    "range": [
      72,
      73
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 74,
    "end": 75,
    "range": [
      74,
      75
    ]
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 76,
    "end": 85,
    "range": [
      76,
      85
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 86,
    "end": 87,
    "range": [
      86,
      87
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 87,
    "end": 88,
    "range": [
      87,
      88
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 89,
    "end": 90,
    "range": [
      89,
      90
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 90,
    "end": 91,
    "range": [
      90,
      91
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 91,
    "end": 92,
    "range": [
      91,
      92
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 97,
    "end": 98,
    "range": [
      97,
      98
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 99,
    "end": 100,
    "range": [
      99,
      100
    ]
  }
]
```
