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
            "name": "_sym",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 10
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null,
              "start": 13,
              "end": 19
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "_sym",
                "raw": "\"_sym\"",
                "start": 20,
                "end": 26
              }
            ],
            "optional": false,
            "start": 13,
            "end": 27
          },
          "definite": false,
          "start": 6,
          "end": 27
        }
      ],
      "declare": false,
      "start": 0,
      "end": 28
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "MyClass",
          "optional": false,
          "typeAnnotation": null,
          "start": 42,
          "end": 49
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
                "type": "Identifier",
                "decorators": [],
                "name": "constructor",
                "optional": false,
                "typeAnnotation": null,
                "start": 56,
                "end": 67
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
                        "type": "AssignmentExpression",
                        "operator": "=",
                        "left": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 80,
                            "end": 84
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "_sym",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 85,
                            "end": 89
                          },
                          "optional": false,
                          "computed": true,
                          "start": 80,
                          "end": 90
                        },
                        "right": {
                          "type": "Literal",
                          "value": "ok",
                          "raw": "\"ok\"",
                          "start": 93,
                          "end": 97
                        },
                        "start": 80,
                        "end": 97
                      },
                      "directive": null,
                      "start": 80,
                      "end": 98
                    }
                  ],
                  "start": 70,
                  "end": 104
                },
                "expression": false,
                "start": 67,
                "end": 104
              },
              "kind": "constructor",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 56,
              "end": 104
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "method",
                "optional": false,
                "typeAnnotation": null,
                "start": 110,
                "end": 116
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
                        "type": "AssignmentExpression",
                        "operator": "=",
                        "left": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 129,
                            "end": 133
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "_sym",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 134,
                            "end": 138
                          },
                          "optional": false,
                          "computed": true,
                          "start": 129,
                          "end": 139
                        },
                        "right": {
                          "type": "Literal",
                          "value": "yep",
                          "raw": "\"yep\"",
                          "start": 142,
                          "end": 147
                        },
                        "start": 129,
                        "end": 147
                      },
                      "directive": null,
                      "start": 129,
                      "end": 148
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
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 163,
                            "end": 164
                          },
                          "init": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 167,
                              "end": 171
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "_sym",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 172,
                              "end": 176
                            },
                            "optional": false,
                            "computed": true,
                            "start": 167,
                            "end": 177
                          },
                          "definite": false,
                          "start": 163,
                          "end": 177
                        }
                      ],
                      "declare": false,
                      "start": 157,
                      "end": 178
                    }
                  ],
                  "start": 119,
                  "end": 184
                },
                "expression": false,
                "start": 116,
                "end": 184
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 110,
              "end": 184
            }
          ],
          "start": 50,
          "end": 186
        },
        "abstract": false,
        "declare": false,
        "start": 36,
        "end": 186
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 29,
      "end": 186
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 186
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
    "value": "_sym",
    "start": 6,
    "end": 10,
    "range": [
      6,
      10
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 11,
    "end": 12,
    "range": [
      11,
      12
    ]
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 13,
    "end": 19,
    "range": [
      13,
      19
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 19,
    "end": 20,
    "range": [
      19,
      20
    ]
  },
  {
    "type": "String",
    "value": "\"_sym\"",
    "start": 20,
    "end": 26,
    "range": [
      20,
      26
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 26,
    "end": 27,
    "range": [
      26,
      27
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 27,
    "end": 28,
    "range": [
      27,
      28
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 29,
    "end": 35,
    "range": [
      29,
      35
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 36,
    "end": 41,
    "range": [
      36,
      41
    ]
  },
  {
    "type": "Identifier",
    "value": "MyClass",
    "start": 42,
    "end": 49,
    "range": [
      42,
      49
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 50,
    "end": 51,
    "range": [
      50,
      51
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 56,
    "end": 67,
    "range": [
      56,
      67
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
    "value": "{",
    "start": 70,
    "end": 71,
    "range": [
      70,
      71
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 80,
    "end": 84,
    "range": [
      80,
      84
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 84,
    "end": 85,
    "range": [
      84,
      85
    ]
  },
  {
    "type": "Identifier",
    "value": "_sym",
    "start": 85,
    "end": 89,
    "range": [
      85,
      89
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 89,
    "end": 90,
    "range": [
      89,
      90
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 91,
    "end": 92,
    "range": [
      91,
      92
    ]
  },
  {
    "type": "String",
    "value": "\"ok\"",
    "start": 93,
    "end": 97,
    "range": [
      93,
      97
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
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
    "start": 103,
    "end": 104,
    "range": [
      103,
      104
    ]
  },
  {
    "type": "Identifier",
    "value": "method",
    "start": 110,
    "end": 116,
    "range": [
      110,
      116
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 116,
    "end": 117,
    "range": [
      116,
      117
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 117,
    "end": 118,
    "range": [
      117,
      118
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 119,
    "end": 120,
    "range": [
      119,
      120
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 129,
    "end": 133,
    "range": [
      129,
      133
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 133,
    "end": 134,
    "range": [
      133,
      134
    ]
  },
  {
    "type": "Identifier",
    "value": "_sym",
    "start": 134,
    "end": 138,
    "range": [
      134,
      138
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 138,
    "end": 139,
    "range": [
      138,
      139
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 140,
    "end": 141,
    "range": [
      140,
      141
    ]
  },
  {
    "type": "String",
    "value": "\"yep\"",
    "start": 142,
    "end": 147,
    "range": [
      142,
      147
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 147,
    "end": 148,
    "range": [
      147,
      148
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 157,
    "end": 162,
    "range": [
      157,
      162
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 163,
    "end": 164,
    "range": [
      163,
      164
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 165,
    "end": 166,
    "range": [
      165,
      166
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 167,
    "end": 171,
    "range": [
      167,
      171
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 171,
    "end": 172,
    "range": [
      171,
      172
    ]
  },
  {
    "type": "Identifier",
    "value": "_sym",
    "start": 172,
    "end": 176,
    "range": [
      172,
      176
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 176,
    "end": 177,
    "range": [
      176,
      177
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 177,
    "end": 178,
    "range": [
      177,
      178
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 183,
    "end": 184,
    "range": [
      183,
      184
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 185,
    "end": 186,
    "range": [
      185,
      186
    ]
  }
]
```
