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
        "name": "Numbers1",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 18
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 25,
              "end": 26
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 28,
                "end": 34
              },
              "start": 26,
              "end": 34
            },
            "accessibility": null,
            "static": false,
            "start": 25,
            "end": 35
          }
        ],
        "start": 19,
        "end": 37
      },
      "declare": false,
      "start": 0,
      "end": 37
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Strings1",
        "optional": false,
        "typeAnnotation": null,
        "start": 48,
        "end": 56
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "value": "1",
              "raw": "'1'",
              "start": 63,
              "end": 66
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 68,
                "end": 74
              },
              "start": 66,
              "end": 74
            },
            "accessibility": null,
            "static": false,
            "start": 63,
            "end": 75
          }
        ],
        "start": 57,
        "end": 77
      },
      "declare": false,
      "start": 38,
      "end": 77
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
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Numbers1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 89,
                  "end": 97
                },
                "typeArguments": null,
                "start": 89,
                "end": 97
              },
              "start": 87,
              "end": 97
            },
            "start": 86,
            "end": 97
          },
          "init": null,
          "definite": false,
          "start": 86,
          "end": 97
        }
      ],
      "declare": false,
      "start": 82,
      "end": 98
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
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 99,
            "end": 100
          },
          "property": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 101,
            "end": 102
          },
          "optional": false,
          "computed": true,
          "start": 99,
          "end": 103
        },
        "right": {
          "type": "Literal",
          "value": 4,
          "raw": "4",
          "start": 106,
          "end": 107
        },
        "start": 99,
        "end": 107
      },
      "directive": null,
      "start": 99,
      "end": 108
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
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 118,
            "end": 119
          },
          "property": {
            "type": "Literal",
            "value": "1",
            "raw": "'1'",
            "start": 120,
            "end": 123
          },
          "optional": false,
          "computed": true,
          "start": 118,
          "end": 124
        },
        "right": {
          "type": "Literal",
          "value": 4,
          "raw": "4",
          "start": 127,
          "end": 128
        },
        "start": 118,
        "end": 128
      },
      "directive": null,
      "start": 118,
      "end": 129
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
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Strings1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 147,
                  "end": 155
                },
                "typeArguments": null,
                "start": 147,
                "end": 155
              },
              "start": 145,
              "end": 155
            },
            "start": 144,
            "end": 155
          },
          "init": null,
          "definite": false,
          "start": 144,
          "end": 155
        }
      ],
      "declare": false,
      "start": 140,
      "end": 156
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
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 157,
            "end": 158
          },
          "property": {
            "type": "Literal",
            "value": "1",
            "raw": "'1'",
            "start": 159,
            "end": 162
          },
          "optional": false,
          "computed": true,
          "start": 157,
          "end": 163
        },
        "right": {
          "type": "Literal",
          "value": 4,
          "raw": "4",
          "start": 166,
          "end": 167
        },
        "start": 157,
        "end": 167
      },
      "directive": null,
      "start": 157,
      "end": 168
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
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 188,
            "end": 189
          },
          "property": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 190,
            "end": 191
          },
          "optional": false,
          "computed": true,
          "start": 188,
          "end": 192
        },
        "right": {
          "type": "Literal",
          "value": 4,
          "raw": "4",
          "start": 195,
          "end": 196
        },
        "start": 188,
        "end": 196
      },
      "directive": null,
      "start": 188,
      "end": 197
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 216
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 0,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "Numbers1",
    "start": 10,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 19,
    "end": 20
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 25,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 26,
    "end": 27
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 28,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 34,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 36,
    "end": 37
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 38,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "Strings1",
    "start": 48,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 57,
    "end": 58
  },
  {
    "type": "String",
    "value": "'1'",
    "start": 63,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 66,
    "end": 67
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 68,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 74,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 76,
    "end": 77
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 82,
    "end": 85
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 86,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 87,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "Numbers1",
    "start": 89,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 97,
    "end": 98
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 99,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 100,
    "end": 101
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 101,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 102,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 104,
    "end": 105
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 106,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 107,
    "end": 108
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 118,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 119,
    "end": 120
  },
  {
    "type": "String",
    "value": "'1'",
    "start": 120,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 123,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 125,
    "end": 126
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 127,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 128,
    "end": 129
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 140,
    "end": 143
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 144,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 145,
    "end": 146
  },
  {
    "type": "Identifier",
    "value": "Strings1",
    "start": 147,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 155,
    "end": 156
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 157,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 158,
    "end": 159
  },
  {
    "type": "String",
    "value": "'1'",
    "start": 159,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 162,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 164,
    "end": 165
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 166,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 167,
    "end": 168
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 188,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 189,
    "end": 190
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 190,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 191,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 193,
    "end": 194
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 195,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 196,
    "end": 197
  }
]
```
