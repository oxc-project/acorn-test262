__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 38,
        "end": 41
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 42,
          "end": 43
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 58,
                "end": 59
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 62,
                "end": 63
              },
              "start": 58,
              "end": 63
            },
            "start": 51,
            "end": 64
          }
        ],
        "start": 45,
        "end": 66
      },
      "expression": false,
      "start": 29,
      "end": 66
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SomeClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 74,
        "end": 83
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 90,
              "end": 91
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
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 111,
                      "end": 112
                    },
                    "start": 104,
                    "end": 113
                  }
                ],
                "start": 94,
                "end": 119
              },
              "expression": false,
              "start": 91,
              "end": 119
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 90,
            "end": 119
          }
        ],
        "start": 84,
        "end": 121
      },
      "abstract": false,
      "declare": false,
      "start": 68,
      "end": 121
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
            "start": 123,
            "end": 129
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 130,
            "end": 137
          },
          "optional": false,
          "computed": false,
          "start": 123,
          "end": 137
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
                "name": "bar",
                "optional": false,
                "typeAnnotation": null,
                "start": 146,
                "end": 149
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null,
                "start": 146,
                "end": 149
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 146,
              "end": 149
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "SomeClass",
                "optional": false,
                "typeAnnotation": null,
                "start": 155,
                "end": 164
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "SomeClass",
                "optional": false,
                "typeAnnotation": null,
                "start": 155,
                "end": 164
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 155,
              "end": 164
            }
          ],
          "start": 140,
          "end": 166
        },
        "start": 123,
        "end": 166
      },
      "directive": null,
      "start": 123,
      "end": 166
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 29,
  "end": 166
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 29,
    "end": 37,
    "range": [
      29,
      37
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 38,
    "end": 41,
    "range": [
      38,
      41
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 41,
    "end": 42,
    "range": [
      41,
      42
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 42,
    "end": 43,
    "range": [
      42,
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
    "value": "{",
    "start": 45,
    "end": 46,
    "range": [
      45,
      46
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 51,
    "end": 57,
    "range": [
      51,
      57
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 58,
    "end": 59,
    "range": [
      58,
      59
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 60,
    "end": 61,
    "range": [
      60,
      61
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 62,
    "end": 63,
    "range": [
      62,
      63
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 63,
    "end": 64,
    "range": [
      63,
      64
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 65,
    "end": 66,
    "range": [
      65,
      66
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 68,
    "end": 73,
    "range": [
      68,
      73
    ]
  },
  {
    "type": "Identifier",
    "value": "SomeClass",
    "start": 74,
    "end": 83,
    "range": [
      74,
      83
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 84,
    "end": 85,
    "range": [
      84,
      85
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 90,
    "end": 91,
    "range": [
      90,
      91
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 91,
    "end": 92,
    "range": [
      91,
      92
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 92,
    "end": 93,
    "range": [
      92,
      93
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 94,
    "end": 95,
    "range": [
      94,
      95
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 104,
    "end": 110,
    "range": [
      104,
      110
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 111,
    "end": 112,
    "range": [
      111,
      112
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 112,
    "end": 113,
    "range": [
      112,
      113
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 118,
    "end": 119,
    "range": [
      118,
      119
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 120,
    "end": 121,
    "range": [
      120,
      121
    ]
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 123,
    "end": 129,
    "range": [
      123,
      129
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 129,
    "end": 130,
    "range": [
      129,
      130
    ]
  },
  {
    "type": "Identifier",
    "value": "exports",
    "start": 130,
    "end": 137,
    "range": [
      130,
      137
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 138,
    "end": 139,
    "range": [
      138,
      139
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 140,
    "end": 141,
    "range": [
      140,
      141
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 146,
    "end": 149,
    "range": [
      146,
      149
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 149,
    "end": 150,
    "range": [
      149,
      150
    ]
  },
  {
    "type": "Identifier",
    "value": "SomeClass",
    "start": 155,
    "end": 164,
    "range": [
      155,
      164
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 165,
    "end": 166,
    "range": [
      165,
      166
    ]
  }
]
```
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
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "SomeClass",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 8,
                  "end": 17
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "SomeClass",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 8,
                  "end": 17
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 8,
                "end": 17
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "SomeClass",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 19,
                  "end": 28
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Another",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 30,
                  "end": 37
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 19,
                "end": 37
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 39
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "require",
              "optional": false,
              "typeAnnotation": null,
              "start": 42,
              "end": 49
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "./lib",
                "raw": "'./lib'",
                "start": 50,
                "end": 57
              }
            ],
            "optional": false,
            "start": 42,
            "end": 58
          },
          "definite": false,
          "start": 6,
          "end": 58
        }
      ],
      "declare": false,
      "start": 0,
      "end": 59
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
            "start": 61,
            "end": 67
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 68,
            "end": 75
          },
          "optional": false,
          "computed": false,
          "start": 61,
          "end": 75
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
                "name": "SomeClass",
                "optional": false,
                "typeAnnotation": null,
                "start": 84,
                "end": 93
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "SomeClass",
                "optional": false,
                "typeAnnotation": null,
                "start": 84,
                "end": 93
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 84,
              "end": 93
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "Another",
                "optional": false,
                "typeAnnotation": null,
                "start": 99,
                "end": 106
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "Another",
                "optional": false,
                "typeAnnotation": null,
                "start": 99,
                "end": 106
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 99,
              "end": 106
            }
          ],
          "start": 78,
          "end": 108
        },
        "start": 61,
        "end": 108
      },
      "directive": null,
      "start": 61,
      "end": 108
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 108
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
    "type": "Punctuator",
    "value": "{",
    "start": 6,
    "end": 7,
    "range": [
      6,
      7
    ]
  },
  {
    "type": "Identifier",
    "value": "SomeClass",
    "start": 8,
    "end": 17,
    "range": [
      8,
      17
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 17,
    "end": 18,
    "range": [
      17,
      18
    ]
  },
  {
    "type": "Identifier",
    "value": "SomeClass",
    "start": 19,
    "end": 28,
    "range": [
      19,
      28
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 28,
    "end": 29,
    "range": [
      28,
      29
    ]
  },
  {
    "type": "Identifier",
    "value": "Another",
    "start": 30,
    "end": 37,
    "range": [
      30,
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
    "type": "Punctuator",
    "value": "=",
    "start": 40,
    "end": 41,
    "range": [
      40,
      41
    ]
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 42,
    "end": 49,
    "range": [
      42,
      49
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 49,
    "end": 50,
    "range": [
      49,
      50
    ]
  },
  {
    "type": "String",
    "value": "'./lib'",
    "start": 50,
    "end": 57,
    "range": [
      50,
      57
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 57,
    "end": 58,
    "range": [
      57,
      58
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 58,
    "end": 59,
    "range": [
      58,
      59
    ]
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 61,
    "end": 67,
    "range": [
      61,
      67
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 67,
    "end": 68,
    "range": [
      67,
      68
    ]
  },
  {
    "type": "Identifier",
    "value": "exports",
    "start": 68,
    "end": 75,
    "range": [
      68,
      75
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 76,
    "end": 77,
    "range": [
      76,
      77
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 78,
    "end": 79,
    "range": [
      78,
      79
    ]
  },
  {
    "type": "Identifier",
    "value": "SomeClass",
    "start": 84,
    "end": 93,
    "range": [
      84,
      93
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 93,
    "end": 94,
    "range": [
      93,
      94
    ]
  },
  {
    "type": "Identifier",
    "value": "Another",
    "start": 99,
    "end": 106,
    "range": [
      99,
      106
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 107,
    "end": 108,
    "range": [
      107,
      108
    ]
  }
]
```
