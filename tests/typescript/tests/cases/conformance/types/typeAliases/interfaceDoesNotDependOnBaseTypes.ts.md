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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "StringTree",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7,
                  "end": 17
                },
                "typeArguments": null,
                "start": 7,
                "end": 17
              },
              "start": 5,
              "end": 17
            },
            "start": 4,
            "end": 17
          },
          "init": null,
          "definite": false,
          "start": 4,
          "end": 17
        }
      ],
      "declare": false,
      "start": 0,
      "end": 18
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "UnaryExpression",
          "operator": "typeof",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 30,
            "end": 31
          },
          "prefix": true,
          "start": 23,
          "end": 31
        },
        "operator": "!==",
        "right": {
          "type": "Literal",
          "value": "string",
          "raw": "\"string\"",
          "start": 36,
          "end": 44
        },
        "start": 23,
        "end": 44
      },
      "consequent": {
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 52,
                  "end": 53
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 54,
                  "end": 58
                },
                "optional": false,
                "computed": false,
                "start": 52,
                "end": 58
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": "",
                  "raw": "\"\"",
                  "start": 59,
                  "end": 61
                }
              ],
              "optional": false,
              "start": 52,
              "end": 62
            },
            "directive": null,
            "start": 52,
            "end": 63
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 68,
                  "end": 69
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 70,
                  "end": 74
                },
                "optional": false,
                "computed": false,
                "start": 68,
                "end": 74
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "value": "",
                      "raw": "\"\"",
                      "start": 76,
                      "end": 78
                    }
                  ],
                  "start": 75,
                  "end": 79
                }
              ],
              "optional": false,
              "start": 68,
              "end": 80
            },
            "directive": null,
            "start": 68,
            "end": 81
          }
        ],
        "start": 46,
        "end": 83
      },
      "alternate": null,
      "start": 19,
      "end": 83
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "StringTree",
        "optional": false,
        "typeAnnotation": null,
        "start": 90,
        "end": 100
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSStringKeyword",
            "start": 103,
            "end": 109
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "StringTreeArray",
              "optional": false,
              "typeAnnotation": null,
              "start": 112,
              "end": 127
            },
            "typeArguments": null,
            "start": 112,
            "end": 127
          }
        ],
        "start": 103,
        "end": 127
      },
      "declare": false,
      "start": 85,
      "end": 128
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "StringTreeArray",
        "optional": false,
        "typeAnnotation": null,
        "start": 139,
        "end": 154
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Array",
            "optional": false,
            "typeAnnotation": null,
            "start": 163,
            "end": 168
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "StringTree",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 169,
                  "end": 179
                },
                "typeArguments": null,
                "start": 169,
                "end": 179
              }
            ],
            "start": 168,
            "end": 180
          },
          "start": 163,
          "end": 180
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 181,
        "end": 184
      },
      "declare": false,
      "start": 129,
      "end": 184
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 184
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
    "value": ":",
    "start": 5,
    "end": 6,
    "range": [
      5,
      6
    ]
  },
  {
    "type": "Identifier",
    "value": "StringTree",
    "start": 7,
    "end": 17,
    "range": [
      7,
      17
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 17,
    "end": 18,
    "range": [
      17,
      18
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 19,
    "end": 21,
    "range": [
      19,
      21
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 22,
    "end": 23,
    "range": [
      22,
      23
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 23,
    "end": 29,
    "range": [
      23,
      29
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 30,
    "end": 31,
    "range": [
      30,
      31
    ]
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 32,
    "end": 35,
    "range": [
      32,
      35
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 36,
    "end": 44,
    "range": [
      36,
      44
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 44,
    "end": 45,
    "range": [
      44,
      45
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 46,
    "end": 47,
    "range": [
      46,
      47
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 52,
    "end": 53,
    "range": [
      52,
      53
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 53,
    "end": 54,
    "range": [
      53,
      54
    ]
  },
  {
    "type": "Identifier",
    "value": "push",
    "start": 54,
    "end": 58,
    "range": [
      54,
      58
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 58,
    "end": 59,
    "range": [
      58,
      59
    ]
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 59,
    "end": 61,
    "range": [
      59,
      61
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 61,
    "end": 62,
    "range": [
      61,
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
    "type": "Identifier",
    "value": "x",
    "start": 68,
    "end": 69,
    "range": [
      68,
      69
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 69,
    "end": 70,
    "range": [
      69,
      70
    ]
  },
  {
    "type": "Identifier",
    "value": "push",
    "start": 70,
    "end": 74,
    "range": [
      70,
      74
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 74,
    "end": 75,
    "range": [
      74,
      75
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 75,
    "end": 76,
    "range": [
      75,
      76
    ]
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 76,
    "end": 78,
    "range": [
      76,
      78
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 78,
    "end": 79,
    "range": [
      78,
      79
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 79,
    "end": 80,
    "range": [
      79,
      80
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 80,
    "end": 81,
    "range": [
      80,
      81
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 82,
    "end": 83,
    "range": [
      82,
      83
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 85,
    "end": 89,
    "range": [
      85,
      89
    ]
  },
  {
    "type": "Identifier",
    "value": "StringTree",
    "start": 90,
    "end": 100,
    "range": [
      90,
      100
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 101,
    "end": 102,
    "range": [
      101,
      102
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 103,
    "end": 109,
    "range": [
      103,
      109
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 110,
    "end": 111,
    "range": [
      110,
      111
    ]
  },
  {
    "type": "Identifier",
    "value": "StringTreeArray",
    "start": 112,
    "end": 127,
    "range": [
      112,
      127
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 127,
    "end": 128,
    "range": [
      127,
      128
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 129,
    "end": 138,
    "range": [
      129,
      138
    ]
  },
  {
    "type": "Identifier",
    "value": "StringTreeArray",
    "start": 139,
    "end": 154,
    "range": [
      139,
      154
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 155,
    "end": 162,
    "range": [
      155,
      162
    ]
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 163,
    "end": 168,
    "range": [
      163,
      168
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 168,
    "end": 169,
    "range": [
      168,
      169
    ]
  },
  {
    "type": "Identifier",
    "value": "StringTree",
    "start": 169,
    "end": 179,
    "range": [
      169,
      179
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 179,
    "end": 180,
    "range": [
      179,
      180
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 181,
    "end": 182,
    "range": [
      181,
      182
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
  }
]
```
