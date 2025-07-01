__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 7,
                    "end": 13
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 16,
                    "end": 22
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 25,
                    "end": 32
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "RegExp",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 35,
                      "end": 41
                    },
                    "typeArguments": null,
                    "start": 35,
                    "end": 41
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Function",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 44,
                      "end": 52
                    },
                    "typeArguments": null,
                    "start": 44,
                    "end": 52
                  }
                ],
                "start": 7,
                "end": 52
              },
              "start": 5,
              "end": 52
            },
            "start": 4,
            "end": 52
          },
          "init": null,
          "definite": false,
          "start": 4,
          "end": 52
        }
      ],
      "declare": false,
      "start": 0,
      "end": 53
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
            "name": "obj",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 63,
                "end": 66
              },
              "start": 61,
              "end": 66
            },
            "start": 58,
            "end": 66
          },
          "init": null,
          "definite": false,
          "start": 58,
          "end": 66
        }
      ],
      "declare": false,
      "start": 54,
      "end": 67
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
            "name": "cond",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 78,
                "end": 85
              },
              "start": 76,
              "end": 85
            },
            "start": 72,
            "end": 85
          },
          "init": null,
          "definite": false,
          "start": 72,
          "end": 85
        }
      ],
      "declare": false,
      "start": 68,
      "end": 86
    },
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
          "start": 88,
          "end": 89
        },
        "right": {
          "type": "Literal",
          "value": null,
          "raw": "/a/",
          "regex": {
            "pattern": "a",
            "flags": ""
          },
          "start": 92,
          "end": 95
        },
        "start": 88,
        "end": 95
      },
      "directive": null,
      "start": 88,
      "end": 96
    },
    {
      "type": "ForInStatement",
      "left": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 106,
              "end": 107
            },
            "init": null,
            "definite": false,
            "start": 106,
            "end": 107
          }
        ],
        "declare": false,
        "start": 102,
        "end": 107
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "obj",
        "optional": false,
        "typeAnnotation": null,
        "start": 111,
        "end": 114
      },
      "body": {
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
                "start": 122,
                "end": 123
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 126,
                "end": 127
              },
              "start": 122,
              "end": 127
            },
            "directive": null,
            "start": 122,
            "end": 128
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond",
              "optional": false,
              "typeAnnotation": null,
              "start": 137,
              "end": 141
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
                      "start": 153,
                      "end": 154
                    },
                    "right": {
                      "type": "Literal",
                      "value": 42,
                      "raw": "42",
                      "start": 157,
                      "end": 159
                    },
                    "start": 153,
                    "end": 159
                  },
                  "directive": null,
                  "start": 153,
                  "end": 160
                },
                {
                  "type": "ContinueStatement",
                  "label": null,
                  "start": 169,
                  "end": 178
                }
              ],
              "start": 143,
              "end": 184
            },
            "alternate": null,
            "start": 133,
            "end": 184
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond",
              "optional": false,
              "typeAnnotation": null,
              "start": 193,
              "end": 197
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
                      "start": 209,
                      "end": 210
                    },
                    "right": {
                      "type": "Literal",
                      "value": true,
                      "raw": "true",
                      "start": 213,
                      "end": 217
                    },
                    "start": 209,
                    "end": 217
                  },
                  "directive": null,
                  "start": 209,
                  "end": 218
                },
                {
                  "type": "BreakStatement",
                  "label": null,
                  "start": 227,
                  "end": 233
                }
              ],
              "start": 199,
              "end": 239
            },
            "alternate": null,
            "start": 189,
            "end": 239
          }
        ],
        "start": 116,
        "end": 241
      },
      "start": 97,
      "end": 241
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "x",
        "optional": false,
        "typeAnnotation": null,
        "start": 242,
        "end": 243
      },
      "directive": null,
      "start": 242,
      "end": 244
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 282
}
```
