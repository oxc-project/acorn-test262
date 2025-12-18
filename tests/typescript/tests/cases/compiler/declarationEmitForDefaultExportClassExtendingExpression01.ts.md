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
        "name": "Greeter",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 17
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "getGreeting",
              "optional": false,
              "typeAnnotation": null,
              "start": 24,
              "end": 35
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 39,
                "end": 45
              },
              "start": 37,
              "end": 45
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 24,
            "end": 46
          }
        ],
        "start": 18,
        "end": 48
      },
      "declare": false,
      "start": 0,
      "end": 48
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "GreeterConstructor",
        "optional": false,
        "typeAnnotation": null,
        "start": 60,
        "end": 78
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Greeter",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 93,
                  "end": 100
                },
                "typeArguments": null,
                "start": 93,
                "end": 100
              },
              "start": 91,
              "end": 100
            },
            "start": 85,
            "end": 101
          }
        ],
        "start": 79,
        "end": 103
      },
      "declare": false,
      "start": 50,
      "end": 103
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 111,
        "end": 112
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
              "name": "getGreeting",
              "optional": false,
              "typeAnnotation": null,
              "start": 119,
              "end": 130
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
                      "value": "hello",
                      "raw": "'hello'",
                      "start": 150,
                      "end": 157
                    },
                    "start": 143,
                    "end": 158
                  }
                ],
                "start": 133,
                "end": 164
              },
              "expression": false,
              "start": 130,
              "end": 164
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 119,
            "end": 164
          }
        ],
        "start": 113,
        "end": 166
      },
      "abstract": false,
      "declare": false,
      "start": 105,
      "end": 166
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
            "name": "getGreeterBase",
            "optional": false,
            "typeAnnotation": null,
            "start": 174,
            "end": 188
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "GreeterConstructor",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 195,
                  "end": 213
                },
                "typeArguments": null,
                "start": 195,
                "end": 213
              },
              "start": 193,
              "end": 213
            },
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 217,
              "end": 218
            },
            "id": null,
            "generator": false,
            "start": 191,
            "end": 218
          },
          "definite": false,
          "start": 174,
          "end": 218
        }
      ],
      "declare": false,
      "start": 168,
      "end": 219
    },
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": null,
        "typeParameters": null,
        "superClass": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "getGreeterBase",
            "optional": false,
            "typeAnnotation": null,
            "start": 250,
            "end": 264
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 250,
          "end": 266
        },
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 267,
          "end": 270
        },
        "abstract": false,
        "declare": false,
        "start": 236,
        "end": 270
      },
      "exportKind": "value",
      "start": 221,
      "end": 270
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 271
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
    "value": "Greeter",
    "start": 10,
    "end": 17,
    "range": [
      10,
      17
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 18,
    "end": 19,
    "range": [
      18,
      19
    ]
  },
  {
    "type": "Identifier",
    "value": "getGreeting",
    "start": 24,
    "end": 35,
    "range": [
      24,
      35
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 35,
    "end": 36,
    "range": [
      35,
      36
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 36,
    "end": 37,
    "range": [
      36,
      37
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 37,
    "end": 38,
    "range": [
      37,
      38
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 39,
    "end": 45,
    "range": [
      39,
      45
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 45,
    "end": 46,
    "range": [
      45,
      46
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 47,
    "end": 48,
    "range": [
      47,
      48
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 50,
    "end": 59,
    "range": [
      50,
      59
    ]
  },
  {
    "type": "Identifier",
    "value": "GreeterConstructor",
    "start": 60,
    "end": 78,
    "range": [
      60,
      78
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 79,
    "end": 80,
    "range": [
      79,
      80
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 85,
    "end": 88,
    "range": [
      85,
      88
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "value": ":",
    "start": 91,
    "end": 92,
    "range": [
      91,
      92
    ]
  },
  {
    "type": "Identifier",
    "value": "Greeter",
    "start": 93,
    "end": 100,
    "range": [
      93,
      100
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
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
    "type": "Keyword",
    "value": "class",
    "start": 105,
    "end": 110,
    "range": [
      105,
      110
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 111,
    "end": 112,
    "range": [
      111,
      112
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 113,
    "end": 114,
    "range": [
      113,
      114
    ]
  },
  {
    "type": "Identifier",
    "value": "getGreeting",
    "start": 119,
    "end": 130,
    "range": [
      119,
      130
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 130,
    "end": 131,
    "range": [
      130,
      131
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 131,
    "end": 132,
    "range": [
      131,
      132
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 133,
    "end": 134,
    "range": [
      133,
      134
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 143,
    "end": 149,
    "range": [
      143,
      149
    ]
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 150,
    "end": 157,
    "range": [
      150,
      157
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 157,
    "end": 158,
    "range": [
      157,
      158
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 163,
    "end": 164,
    "range": [
      163,
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
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 168,
    "end": 173,
    "range": [
      168,
      173
    ]
  },
  {
    "type": "Identifier",
    "value": "getGreeterBase",
    "start": 174,
    "end": 188,
    "range": [
      174,
      188
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 189,
    "end": 190,
    "range": [
      189,
      190
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 191,
    "end": 192,
    "range": [
      191,
      192
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 192,
    "end": 193,
    "range": [
      192,
      193
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 193,
    "end": 194,
    "range": [
      193,
      194
    ]
  },
  {
    "type": "Identifier",
    "value": "GreeterConstructor",
    "start": 195,
    "end": 213,
    "range": [
      195,
      213
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 214,
    "end": 216,
    "range": [
      214,
      216
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 217,
    "end": 218,
    "range": [
      217,
      218
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 218,
    "end": 219,
    "range": [
      218,
      219
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 221,
    "end": 227,
    "range": [
      221,
      227
    ]
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 228,
    "end": 235,
    "range": [
      228,
      235
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 236,
    "end": 241,
    "range": [
      236,
      241
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 242,
    "end": 249,
    "range": [
      242,
      249
    ]
  },
  {
    "type": "Identifier",
    "value": "getGreeterBase",
    "start": 250,
    "end": 264,
    "range": [
      250,
      264
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 264,
    "end": 265,
    "range": [
      264,
      265
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 265,
    "end": 266,
    "range": [
      265,
      266
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 267,
    "end": 268,
    "range": [
      267,
      268
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 269,
    "end": 270,
    "range": [
      269,
      270
    ]
  }
]
```
