__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "b1",
        "optional": false,
        "typeAnnotation": null,
        "start": 7,
        "end": 9
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "./b.json",
          "raw": "'./b.json'",
          "start": 20,
          "end": 30
        },
        "start": 12,
        "end": 31
      },
      "importKind": "value",
      "start": 0,
      "end": 32
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 37,
            "end": 38
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "b1",
            "optional": false,
            "typeAnnotation": null,
            "start": 41,
            "end": 43
          },
          "definite": false,
          "start": 37,
          "end": 43
        }
      ],
      "declare": false,
      "start": 33,
      "end": 44
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "b2",
        "optional": false,
        "typeAnnotation": null,
        "start": 52,
        "end": 54
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "./b.json",
          "raw": "'./b.json'",
          "start": 65,
          "end": 75
        },
        "start": 57,
        "end": 76
      },
      "importKind": "value",
      "start": 45,
      "end": 77
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "Identifier",
        "decorators": [],
        "name": "x",
        "optional": false,
        "typeAnnotation": null,
        "start": 82,
        "end": 83
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 91,
                "end": 92
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b2",
                "optional": false,
                "typeAnnotation": null,
                "start": 95,
                "end": 97
              },
              "start": 91,
              "end": 97
            },
            "directive": null,
            "start": 91,
            "end": 98
          }
        ],
        "start": 85,
        "end": 100
      },
      "alternate": null,
      "start": 78,
      "end": 100
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 101
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 0,
    "end": 6,
    "range": [
      0,
      6
    ]
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 7,
    "end": 9,
    "range": [
      7,
      9
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 10,
    "end": 11,
    "range": [
      10,
      11
    ]
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 12,
    "end": 19,
    "range": [
      12,
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
    "value": "'./b.json'",
    "start": 20,
    "end": 30,
    "range": [
      20,
      30
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 30,
    "end": 31,
    "range": [
      30,
      31
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 31,
    "end": 32,
    "range": [
      31,
      32
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 33,
    "end": 36,
    "range": [
      33,
      36
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 37,
    "end": 38,
    "range": [
      37,
      38
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 39,
    "end": 40,
    "range": [
      39,
      40
    ]
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 41,
    "end": 43,
    "range": [
      41,
      43
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 43,
    "end": 44,
    "range": [
      43,
      44
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 45,
    "end": 51,
    "range": [
      45,
      51
    ]
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 52,
    "end": 54,
    "range": [
      52,
      54
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 55,
    "end": 56,
    "range": [
      55,
      56
    ]
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 57,
    "end": 64,
    "range": [
      57,
      64
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
    "type": "String",
    "value": "'./b.json'",
    "start": 65,
    "end": 75,
    "range": [
      65,
      75
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 75,
    "end": 76,
    "range": [
      75,
      76
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 76,
    "end": 77,
    "range": [
      76,
      77
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 78,
    "end": 80,
    "range": [
      78,
      80
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 81,
    "end": 82,
    "range": [
      81,
      82
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 82,
    "end": 83,
    "range": [
      82,
      83
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 83,
    "end": 84,
    "range": [
      83,
      84
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 85,
    "end": 86,
    "range": [
      85,
      86
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 91,
    "end": 92,
    "range": [
      91,
      92
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 93,
    "end": 94,
    "range": [
      93,
      94
    ]
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 95,
    "end": 97,
    "range": [
      95,
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
    "start": 99,
    "end": 100,
    "range": [
      99,
      100
    ]
  }
]
```
