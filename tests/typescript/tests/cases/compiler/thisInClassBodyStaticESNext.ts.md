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
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 60,
        "end": 63
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 70,
              "end": 71
            },
            "typeAnnotation": null,
            "value": {
              "type": "ThisExpression",
              "start": 74,
              "end": 78
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 70,
            "end": 78
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "t",
              "optional": false,
              "typeAnnotation": null,
              "start": 90,
              "end": 91
            },
            "typeAnnotation": null,
            "value": {
              "type": "ThisExpression",
              "start": 94,
              "end": 98
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 83,
            "end": 98
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "at",
              "optional": false,
              "typeAnnotation": null,
              "start": 110,
              "end": 112
            },
            "typeAnnotation": null,
            "value": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "ThisExpression",
                "start": 121,
                "end": 125
              },
              "id": null,
              "generator": false,
              "start": 115,
              "end": 125
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 103,
            "end": 125
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "ft",
              "optional": false,
              "typeAnnotation": null,
              "start": 137,
              "end": 139
            },
            "typeAnnotation": null,
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
                      "type": "ThisExpression",
                      "start": 163,
                      "end": 167
                    },
                    "start": 156,
                    "end": 167
                  }
                ],
                "start": 154,
                "end": 169
              },
              "expression": false,
              "start": 142,
              "end": 169
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 130,
            "end": 169
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "mt",
              "optional": false,
              "typeAnnotation": null,
              "start": 181,
              "end": 183
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
                      "type": "ThisExpression",
                      "start": 195,
                      "end": 199
                    },
                    "start": 188,
                    "end": 199
                  }
                ],
                "start": 186,
                "end": 201
              },
              "expression": false,
              "start": 183,
              "end": 201
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 174,
            "end": 201
          }
        ],
        "start": 64,
        "end": 203
      },
      "abstract": false,
      "declare": false,
      "start": 54,
      "end": 203
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 54,
  "end": 203
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 54,
    "end": 59,
    "range": [
      54,
      59
    ]
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 60,
    "end": 63,
    "range": [
      60,
      63
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 64,
    "end": 65,
    "range": [
      64,
      65
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 70,
    "end": 71,
    "range": [
      70,
      71
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 72,
    "end": 73,
    "range": [
      72,
      73
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 74,
    "end": 78,
    "range": [
      74,
      78
    ]
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 83,
    "end": 89,
    "range": [
      83,
      89
    ]
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 90,
    "end": 91,
    "range": [
      90,
      91
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 92,
    "end": 93,
    "range": [
      92,
      93
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 94,
    "end": 98,
    "range": [
      94,
      98
    ]
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 103,
    "end": 109,
    "range": [
      103,
      109
    ]
  },
  {
    "type": "Identifier",
    "value": "at",
    "start": 110,
    "end": 112,
    "range": [
      110,
      112
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 113,
    "end": 114,
    "range": [
      113,
      114
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 115,
    "end": 116,
    "range": [
      115,
      116
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 116,
    "end": 117,
    "range": [
      116,
      117
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 118,
    "end": 120,
    "range": [
      118,
      120
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 121,
    "end": 125,
    "range": [
      121,
      125
    ]
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 130,
    "end": 136,
    "range": [
      130,
      136
    ]
  },
  {
    "type": "Identifier",
    "value": "ft",
    "start": 137,
    "end": 139,
    "range": [
      137,
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
    "type": "Keyword",
    "value": "function",
    "start": 142,
    "end": 150,
    "range": [
      142,
      150
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 151,
    "end": 152,
    "range": [
      151,
      152
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 152,
    "end": 153,
    "range": [
      152,
      153
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 154,
    "end": 155,
    "range": [
      154,
      155
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 156,
    "end": 162,
    "range": [
      156,
      162
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 163,
    "end": 167,
    "range": [
      163,
      167
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 168,
    "end": 169,
    "range": [
      168,
      169
    ]
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 174,
    "end": 180,
    "range": [
      174,
      180
    ]
  },
  {
    "type": "Identifier",
    "value": "mt",
    "start": 181,
    "end": 183,
    "range": [
      181,
      183
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 183,
    "end": 184,
    "range": [
      183,
      184
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 184,
    "end": 185,
    "range": [
      184,
      185
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 186,
    "end": 187,
    "range": [
      186,
      187
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 188,
    "end": 194,
    "range": [
      188,
      194
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 195,
    "end": 199,
    "range": [
      195,
      199
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 200,
    "end": 201,
    "range": [
      200,
      201
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 202,
    "end": 203,
    "range": [
      202,
      203
    ]
  }
]
```
