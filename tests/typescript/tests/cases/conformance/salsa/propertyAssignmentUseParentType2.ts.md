__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
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
              "name": "inlined",
              "optional": false,
              "typeAnnotation": null,
              "start": 54,
              "end": 61
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 70,
                "end": 74
              },
              "id": null,
              "generator": false,
              "start": 64,
              "end": 74
            },
            "definite": false,
            "start": 54,
            "end": 74
          }
        ],
        "declare": false,
        "start": 48,
        "end": 74
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 41,
      "end": 74
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
            "name": "inlined",
            "optional": false,
            "typeAnnotation": null,
            "start": 75,
            "end": 82
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "nuo",
            "optional": false,
            "typeAnnotation": null,
            "start": 83,
            "end": 86
          },
          "optional": false,
          "computed": false,
          "start": 75,
          "end": 86
        },
        "right": {
          "type": "Literal",
          "value": 789,
          "raw": "789",
          "start": 89,
          "end": 92
        },
        "start": 75,
        "end": 92
      },
      "directive": null,
      "start": 75,
      "end": 92
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
              "name": "duplicated",
              "optional": false,
              "typeAnnotation": null,
              "start": 148,
              "end": 158
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 167,
                "end": 171
              },
              "id": null,
              "generator": false,
              "start": 161,
              "end": 171
            },
            "definite": false,
            "start": 148,
            "end": 171
          }
        ],
        "declare": false,
        "start": 142,
        "end": 171
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 135,
      "end": 171
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
            "name": "duplicated",
            "optional": false,
            "typeAnnotation": null,
            "start": 191,
            "end": 201
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "nuo",
            "optional": false,
            "typeAnnotation": null,
            "start": 202,
            "end": 205
          },
          "optional": false,
          "computed": false,
          "start": 191,
          "end": 205
        },
        "right": {
          "type": "Literal",
          "value": 789,
          "raw": "789",
          "start": 208,
          "end": 211
        },
        "start": 191,
        "end": 211
      },
      "directive": null,
      "start": 191,
      "end": 211
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
              "name": "conflictingDuplicated",
              "optional": false,
              "typeAnnotation": null,
              "start": 267,
              "end": 288
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 297,
                "end": 301
              },
              "id": null,
              "generator": false,
              "start": 291,
              "end": 301
            },
            "definite": false,
            "start": 267,
            "end": 301
          }
        ],
        "declare": false,
        "start": 261,
        "end": 301
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 254,
      "end": 301
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
            "name": "conflictingDuplicated",
            "optional": false,
            "typeAnnotation": null,
            "start": 322,
            "end": 343
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "nuo",
            "optional": false,
            "typeAnnotation": null,
            "start": 344,
            "end": 347
          },
          "optional": false,
          "computed": false,
          "start": 322,
          "end": 347
        },
        "right": {
          "type": "Literal",
          "value": 789,
          "raw": "789",
          "start": 350,
          "end": 353
        },
        "start": 322,
        "end": 353
      },
      "directive": null,
      "start": 322,
      "end": 353
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 41,
  "end": 353
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 41,
    "end": 47,
    "range": [
      41,
      47
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 48,
    "end": 53,
    "range": [
      48,
      53
    ]
  },
  {
    "type": "Identifier",
    "value": "inlined",
    "start": 54,
    "end": 61,
    "range": [
      54,
      61
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 62,
    "end": 63,
    "range": [
      62,
      63
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 64,
    "end": 65,
    "range": [
      64,
      65
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 65,
    "end": 66,
    "range": [
      65,
      66
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 67,
    "end": 69,
    "range": [
      67,
      69
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 70,
    "end": 74,
    "range": [
      70,
      74
    ]
  },
  {
    "type": "Identifier",
    "value": "inlined",
    "start": 75,
    "end": 82,
    "range": [
      75,
      82
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 82,
    "end": 83,
    "range": [
      82,
      83
    ]
  },
  {
    "type": "Identifier",
    "value": "nuo",
    "start": 83,
    "end": 86,
    "range": [
      83,
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
    "type": "Numeric",
    "value": "789",
    "start": 89,
    "end": 92,
    "range": [
      89,
      92
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 135,
    "end": 141,
    "range": [
      135,
      141
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 142,
    "end": 147,
    "range": [
      142,
      147
    ]
  },
  {
    "type": "Identifier",
    "value": "duplicated",
    "start": 148,
    "end": 158,
    "range": [
      148,
      158
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 159,
    "end": 160,
    "range": [
      159,
      160
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 161,
    "end": 162,
    "range": [
      161,
      162
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 162,
    "end": 163,
    "range": [
      162,
      163
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 164,
    "end": 166,
    "range": [
      164,
      166
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 167,
    "end": 171,
    "range": [
      167,
      171
    ]
  },
  {
    "type": "Identifier",
    "value": "duplicated",
    "start": 191,
    "end": 201,
    "range": [
      191,
      201
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 201,
    "end": 202,
    "range": [
      201,
      202
    ]
  },
  {
    "type": "Identifier",
    "value": "nuo",
    "start": 202,
    "end": 205,
    "range": [
      202,
      205
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 206,
    "end": 207,
    "range": [
      206,
      207
    ]
  },
  {
    "type": "Numeric",
    "value": "789",
    "start": 208,
    "end": 211,
    "range": [
      208,
      211
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 254,
    "end": 260,
    "range": [
      254,
      260
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 261,
    "end": 266,
    "range": [
      261,
      266
    ]
  },
  {
    "type": "Identifier",
    "value": "conflictingDuplicated",
    "start": 267,
    "end": 288,
    "range": [
      267,
      288
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 289,
    "end": 290,
    "range": [
      289,
      290
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 291,
    "end": 292,
    "range": [
      291,
      292
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 292,
    "end": 293,
    "range": [
      292,
      293
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 294,
    "end": 296,
    "range": [
      294,
      296
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 297,
    "end": 301,
    "range": [
      297,
      301
    ]
  },
  {
    "type": "Identifier",
    "value": "conflictingDuplicated",
    "start": 322,
    "end": 343,
    "range": [
      322,
      343
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 343,
    "end": 344,
    "range": [
      343,
      344
    ]
  },
  {
    "type": "Identifier",
    "value": "nuo",
    "start": 344,
    "end": 347,
    "range": [
      344,
      347
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 348,
    "end": 349,
    "range": [
      348,
      349
    ]
  },
  {
    "type": "Numeric",
    "value": "789",
    "start": 350,
    "end": 353,
    "range": [
      350,
      353
    ]
  }
]
```
