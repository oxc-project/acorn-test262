__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I1",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 12
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 13,
              "end": 14
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 13,
            "end": 14
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 16,
              "end": 17
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 16,
            "end": 17
          }
        ],
        "start": 12,
        "end": 18
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null,
              "start": 22,
              "end": 23
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 31,
                      "end": 32
                    },
                    "typeArguments": null,
                    "start": 31,
                    "end": 32
                  },
                  "start": 29,
                  "end": 32
                },
                "start": 24,
                "end": 32
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 35,
                  "end": 36
                },
                "typeArguments": null,
                "start": 35,
                "end": 36
              },
              "start": 33,
              "end": 36
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 22,
            "end": 37
          }
        ],
        "start": 19,
        "end": 39
      },
      "declare": false,
      "start": 0,
      "end": 39
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 48,
                  "end": 50
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSBooleanKeyword",
                      "start": 51,
                      "end": 58
                    },
                    {
                      "type": "TSStringKeyword",
                      "start": 60,
                      "end": 66
                    }
                  ],
                  "start": 50,
                  "end": 67
                },
                "start": 48,
                "end": 67
              },
              "start": 46,
              "end": 67
            },
            "start": 45,
            "end": 67
          },
          "init": {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 70,
            "end": 74
          },
          "definite": false,
          "start": 45,
          "end": 74
        }
      ],
      "declare": false,
      "start": 41,
      "end": 75
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 83,
        "end": 84
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 85,
              "end": 86
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 85,
            "end": 86
          }
        ],
        "start": 84,
        "end": 87
      },
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
              "start": 91,
              "end": 102
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
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "I1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 106,
                        "end": 108
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSBooleanKeyword",
                            "start": 109,
                            "end": 116
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 118,
                              "end": 119
                            },
                            "typeArguments": null,
                            "start": 118,
                            "end": 119
                          }
                        ],
                        "start": 108,
                        "end": 120
                      },
                      "start": 106,
                      "end": 120
                    },
                    "start": 104,
                    "end": 120
                  },
                  "start": 103,
                  "end": 120
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 122,
                "end": 126
              },
              "expression": false,
              "start": 102,
              "end": 126
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 91,
            "end": 126
          }
        ],
        "start": 88,
        "end": 128
      },
      "abstract": false,
      "declare": false,
      "start": 77,
      "end": 128
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 134,
            "end": 135
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 142,
              "end": 143
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null,
                "start": 144,
                "end": 145
              }
            ],
            "start": 138,
            "end": 146
          },
          "definite": false,
          "start": 134,
          "end": 146
        }
      ],
      "declare": false,
      "start": 130,
      "end": 147
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 147
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 0,
    "end": 9,
    "range": [
      0,
      9
    ]
  },
  {
    "type": "Identifier",
    "value": "I1",
    "start": 10,
    "end": 12,
    "range": [
      10,
      12
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 12,
    "end": 13,
    "range": [
      12,
      13
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 13,
    "end": 14,
    "range": [
      13,
      14
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 14,
    "end": 15,
    "range": [
      14,
      15
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 16,
    "end": 17,
    "range": [
      16,
      17
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 17,
    "end": 18,
    "range": [
      17,
      18
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 19,
    "end": 20,
    "range": [
      19,
      20
    ]
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 22,
    "end": 23,
    "range": [
      22,
      23
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 23,
    "end": 24,
    "range": [
      23,
      24
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 24,
    "end": 29,
    "range": [
      24,
      29
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 29,
    "end": 30,
    "range": [
      29,
      30
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 31,
    "end": 32,
    "range": [
      31,
      32
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 32,
    "end": 33,
    "range": [
      32,
      33
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 33,
    "end": 34,
    "range": [
      33,
      34
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 35,
    "end": 36,
    "range": [
      35,
      36
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 36,
    "end": 37,
    "range": [
      36,
      37
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 38,
    "end": 39,
    "range": [
      38,
      39
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 41,
    "end": 44,
    "range": [
      41,
      44
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 45,
    "end": 46,
    "range": [
      45,
      46
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 46,
    "end": 47,
    "range": [
      46,
      47
    ]
  },
  {
    "type": "Identifier",
    "value": "I1",
    "start": 48,
    "end": 50,
    "range": [
      48,
      50
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 50,
    "end": 51,
    "range": [
      50,
      51
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 51,
    "end": 58,
    "range": [
      51,
      58
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 58,
    "end": 59,
    "range": [
      58,
      59
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 60,
    "end": 66,
    "range": [
      60,
      66
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 66,
    "end": 67,
    "range": [
      66,
      67
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 68,
    "end": 69,
    "range": [
      68,
      69
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 70,
    "end": 74,
    "range": [
      70,
      74
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 74,
    "end": 75,
    "range": [
      74,
      75
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 77,
    "end": 82,
    "range": [
      77,
      82
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 83,
    "end": 84,
    "range": [
      83,
      84
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 84,
    "end": 85,
    "range": [
      84,
      85
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 85,
    "end": 86,
    "range": [
      85,
      86
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 86,
    "end": 87,
    "range": [
      86,
      87
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 88,
    "end": 89,
    "range": [
      88,
      89
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 91,
    "end": 102,
    "range": [
      91,
      102
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 102,
    "end": 103,
    "range": [
      102,
      103
    ]
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 103,
    "end": 104,
    "range": [
      103,
      104
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 104,
    "end": 105,
    "range": [
      104,
      105
    ]
  },
  {
    "type": "Identifier",
    "value": "I1",
    "start": 106,
    "end": 108,
    "range": [
      106,
      108
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 108,
    "end": 109,
    "range": [
      108,
      109
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 109,
    "end": 116,
    "range": [
      109,
      116
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 116,
    "end": 117,
    "range": [
      116,
      117
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 118,
    "end": 119,
    "range": [
      118,
      119
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 119,
    "end": 120,
    "range": [
      119,
      120
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 120,
    "end": 121,
    "range": [
      120,
      121
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 122,
    "end": 123,
    "range": [
      122,
      123
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 125,
    "end": 126,
    "range": [
      125,
      126
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 127,
    "end": 128,
    "range": [
      127,
      128
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 130,
    "end": 133,
    "range": [
      130,
      133
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 134,
    "end": 135,
    "range": [
      134,
      135
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 136,
    "end": 137,
    "range": [
      136,
      137
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 138,
    "end": 141,
    "range": [
      138,
      141
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 142,
    "end": 143,
    "range": [
      142,
      143
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 143,
    "end": 144,
    "range": [
      143,
      144
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 144,
    "end": 145,
    "range": [
      144,
      145
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 145,
    "end": 146,
    "range": [
      145,
      146
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 146,
    "end": 147,
    "range": [
      146,
      147
    ]
  }
]
```
