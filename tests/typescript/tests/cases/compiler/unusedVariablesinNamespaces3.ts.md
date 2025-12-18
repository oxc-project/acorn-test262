__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Validation",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 20
      },
      "body": {
        "type": "TSModuleBlock",
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
                  "name": "lettersRegexp",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 33,
                  "end": 46
                },
                "init": {
                  "type": "Literal",
                  "value": null,
                  "raw": "/^[A-Za-z]+$/",
                  "regex": {
                    "pattern": "^[A-Za-z]+$",
                    "flags": ""
                  },
                  "start": 49,
                  "end": 62
                },
                "definite": false,
                "start": 33,
                "end": 62
              }
            ],
            "declare": false,
            "start": 27,
            "end": 63
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
                  "name": "numberRegexp",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 74,
                  "end": 86
                },
                "init": {
                  "type": "Literal",
                  "value": null,
                  "raw": "/^[0-9]+$/",
                  "regex": {
                    "pattern": "^[0-9]+$",
                    "flags": ""
                  },
                  "start": 89,
                  "end": 99
                },
                "definite": false,
                "start": 74,
                "end": 99
              }
            ],
            "declare": false,
            "start": 68,
            "end": 100
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "anotherUnusedVariable",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 118,
                    "end": 139
                  },
                  "init": {
                    "type": "Literal",
                    "value": "Dummy value",
                    "raw": "\"Dummy value\"",
                    "start": 142,
                    "end": 155
                  },
                  "definite": false,
                  "start": 118,
                  "end": 155
                }
              ],
              "declare": false,
              "start": 112,
              "end": 156
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 105,
            "end": 156
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "LettersOnlyValidator",
                "optional": false,
                "typeAnnotation": null,
                "start": 175,
                "end": 195
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
                      "name": "isAcceptable",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 206,
                      "end": 218
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
                          "name": "s2",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 223,
                              "end": 229
                            },
                            "start": 221,
                            "end": 229
                          },
                          "start": 219,
                          "end": 229
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "lettersRegexp",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 252,
                                  "end": 265
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "test",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 266,
                                  "end": 270
                                },
                                "optional": false,
                                "computed": false,
                                "start": 252,
                                "end": 270
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "s2",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 271,
                                  "end": 273
                                }
                              ],
                              "optional": false,
                              "start": 252,
                              "end": 274
                            },
                            "start": 245,
                            "end": 275
                          }
                        ],
                        "start": 231,
                        "end": 285
                      },
                      "expression": false,
                      "start": 218,
                      "end": 285
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 206,
                    "end": 285
                  }
                ],
                "start": 196,
                "end": 291
              },
              "abstract": false,
              "declare": false,
              "start": 169,
              "end": 291
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 162,
            "end": 291
          }
        ],
        "start": 21,
        "end": 293
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 293
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 293
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 0,
    "end": 9,
    "range": [
      0,
      9
    ]
  },
  {
    "type": "Identifier",
    "value": "Validation",
    "start": 10,
    "end": 20,
    "range": [
      10,
      20
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 21,
    "end": 22,
    "range": [
      21,
      22
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 27,
    "end": 32,
    "range": [
      27,
      32
    ]
  },
  {
    "type": "Identifier",
    "value": "lettersRegexp",
    "start": 33,
    "end": 46,
    "range": [
      33,
      46
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 47,
    "end": 48,
    "range": [
      47,
      48
    ]
  },
  {
    "type": "RegularExpression",
    "value": "/^[A-Za-z]+$/",
    "regex": {
      "flags": "",
      "pattern": "^[A-Za-z]+$"
    },
    "start": 49,
    "end": 62,
    "range": [
      49,
      62
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 62,
    "end": 63,
    "range": [
      62,
      63
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 68,
    "end": 73,
    "range": [
      68,
      73
    ]
  },
  {
    "type": "Identifier",
    "value": "numberRegexp",
    "start": 74,
    "end": 86,
    "range": [
      74,
      86
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 87,
    "end": 88,
    "range": [
      87,
      88
    ]
  },
  {
    "type": "RegularExpression",
    "value": "/^[0-9]+$/",
    "regex": {
      "flags": "",
      "pattern": "^[0-9]+$"
    },
    "start": 89,
    "end": 99,
    "range": [
      89,
      99
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 99,
    "end": 100,
    "range": [
      99,
      100
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 105,
    "end": 111,
    "range": [
      105,
      111
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 112,
    "end": 117,
    "range": [
      112,
      117
    ]
  },
  {
    "type": "Identifier",
    "value": "anotherUnusedVariable",
    "start": 118,
    "end": 139,
    "range": [
      118,
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
    "value": "\"Dummy value\"",
    "start": 142,
    "end": 155,
    "range": [
      142,
      155
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 155,
    "end": 156,
    "range": [
      155,
      156
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 162,
    "end": 168,
    "range": [
      162,
      168
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 169,
    "end": 174,
    "range": [
      169,
      174
    ]
  },
  {
    "type": "Identifier",
    "value": "LettersOnlyValidator",
    "start": 175,
    "end": 195,
    "range": [
      175,
      195
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 196,
    "end": 197,
    "range": [
      196,
      197
    ]
  },
  {
    "type": "Identifier",
    "value": "isAcceptable",
    "start": 206,
    "end": 218,
    "range": [
      206,
      218
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 218,
    "end": 219,
    "range": [
      218,
      219
    ]
  },
  {
    "type": "Identifier",
    "value": "s2",
    "start": 219,
    "end": 221,
    "range": [
      219,
      221
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 221,
    "end": 222,
    "range": [
      221,
      222
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 223,
    "end": 229,
    "range": [
      223,
      229
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 229,
    "end": 230,
    "range": [
      229,
      230
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 231,
    "end": 232,
    "range": [
      231,
      232
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 245,
    "end": 251,
    "range": [
      245,
      251
    ]
  },
  {
    "type": "Identifier",
    "value": "lettersRegexp",
    "start": 252,
    "end": 265,
    "range": [
      252,
      265
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 265,
    "end": 266,
    "range": [
      265,
      266
    ]
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 266,
    "end": 270,
    "range": [
      266,
      270
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 270,
    "end": 271,
    "range": [
      270,
      271
    ]
  },
  {
    "type": "Identifier",
    "value": "s2",
    "start": 271,
    "end": 273,
    "range": [
      271,
      273
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 273,
    "end": 274,
    "range": [
      273,
      274
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 274,
    "end": 275,
    "range": [
      274,
      275
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 284,
    "end": 285,
    "range": [
      284,
      285
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 290,
    "end": 291,
    "range": [
      290,
      291
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 292,
    "end": 293,
    "range": [
      292,
      293
    ]
  }
]
```
