__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A1",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 8
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "name": "method",
              "start": 22,
              "end": 29
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "param",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 37,
                      "end": 43
                    },
                    "start": 35,
                    "end": 43
                  },
                  "start": 30,
                  "end": 43
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 46,
                  "end": 52
                },
                "start": 44,
                "end": 52
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": "",
                      "raw": "\"\"",
                      "start": 70,
                      "end": 72
                    },
                    "start": 63,
                    "end": 73
                  }
                ],
                "start": 53,
                "end": 79
              },
              "expression": false,
              "start": 29,
              "end": 79
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 15,
            "end": 79
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 84,
              "end": 95
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
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 108,
                          "end": 110
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "method",
                          "start": 111,
                          "end": 118
                        },
                        "optional": false,
                        "computed": false,
                        "start": 108,
                        "end": 118
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": "",
                          "raw": "\"\"",
                          "start": 119,
                          "end": 121
                        }
                      ],
                      "optional": false,
                      "start": 108,
                      "end": 122
                    },
                    "directive": null,
                    "start": 108,
                    "end": 122
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
                          "name": "A1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 131,
                          "end": 133
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "method",
                          "start": 134,
                          "end": 141
                        },
                        "optional": false,
                        "computed": false,
                        "start": 131,
                        "end": 141
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 142,
                          "end": 143
                        }
                      ],
                      "optional": false,
                      "start": 131,
                      "end": 144
                    },
                    "directive": null,
                    "start": 131,
                    "end": 144
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
                          "name": "A1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 162,
                          "end": 164
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "method",
                          "start": 165,
                          "end": 172
                        },
                        "optional": false,
                        "computed": false,
                        "start": 162,
                        "end": 172
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 162,
                      "end": 174
                    },
                    "directive": null,
                    "start": 162,
                    "end": 174
                  }
                ],
                "start": 98,
                "end": 192
              },
              "expression": false,
              "start": 95,
              "end": 192
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 84,
            "end": 192
          }
        ],
        "start": 9,
        "end": 194
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 194
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 194
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 0,
    "end": 5,
    "range": [
      0,
      5
    ]
  },
  {
    "type": "Identifier",
    "value": "A1",
    "start": 6,
    "end": 8,
    "range": [
      6,
      8
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 9,
    "end": 10,
    "range": [
      9,
      10
    ]
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 15,
    "end": 21,
    "range": [
      15,
      21
    ]
  },
  {
    "type": "PrivateIdentifier",
    "value": "method",
    "start": 22,
    "end": 29,
    "range": [
      22,
      29
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 29,
    "end": 30,
    "range": [
      29,
      30
    ]
  },
  {
    "type": "Identifier",
    "value": "param",
    "start": 30,
    "end": 35,
    "range": [
      30,
      35
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 35,
    "end": 36,
    "range": [
      35,
      36
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 37,
    "end": 43,
    "range": [
      37,
      43
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 43,
    "end": 44,
    "range": [
      43,
      44
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 44,
    "end": 45,
    "range": [
      44,
      45
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 46,
    "end": 52,
    "range": [
      46,
      52
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 53,
    "end": 54,
    "range": [
      53,
      54
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 63,
    "end": 69,
    "range": [
      63,
      69
    ]
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 70,
    "end": 72,
    "range": [
      70,
      72
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 72,
    "end": 73,
    "range": [
      72,
      73
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 78,
    "end": 79,
    "range": [
      78,
      79
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 84,
    "end": 95,
    "range": [
      84,
      95
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 95,
    "end": 96,
    "range": [
      95,
      96
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 96,
    "end": 97,
    "range": [
      96,
      97
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 98,
    "end": 99,
    "range": [
      98,
      99
    ]
  },
  {
    "type": "Identifier",
    "value": "A1",
    "start": 108,
    "end": 110,
    "range": [
      108,
      110
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 110,
    "end": 111,
    "range": [
      110,
      111
    ]
  },
  {
    "type": "PrivateIdentifier",
    "value": "method",
    "start": 111,
    "end": 118,
    "range": [
      111,
      118
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 118,
    "end": 119,
    "range": [
      118,
      119
    ]
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 119,
    "end": 121,
    "range": [
      119,
      121
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 121,
    "end": 122,
    "range": [
      121,
      122
    ]
  },
  {
    "type": "Identifier",
    "value": "A1",
    "start": 131,
    "end": 133,
    "range": [
      131,
      133
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 133,
    "end": 134,
    "range": [
      133,
      134
    ]
  },
  {
    "type": "PrivateIdentifier",
    "value": "method",
    "start": 134,
    "end": 141,
    "range": [
      134,
      141
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 141,
    "end": 142,
    "range": [
      141,
      142
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 142,
    "end": 143,
    "range": [
      142,
      143
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 143,
    "end": 144,
    "range": [
      143,
      144
    ]
  },
  {
    "type": "Identifier",
    "value": "A1",
    "start": 162,
    "end": 164,
    "range": [
      162,
      164
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 164,
    "end": 165,
    "range": [
      164,
      165
    ]
  },
  {
    "type": "PrivateIdentifier",
    "value": "method",
    "start": 165,
    "end": 172,
    "range": [
      165,
      172
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 172,
    "end": 173,
    "range": [
      172,
      173
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 173,
    "end": 174,
    "range": [
      173,
      174
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 191,
    "end": 192,
    "range": [
      191,
      192
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 193,
    "end": 194,
    "range": [
      193,
      194
    ]
  }
]
```
