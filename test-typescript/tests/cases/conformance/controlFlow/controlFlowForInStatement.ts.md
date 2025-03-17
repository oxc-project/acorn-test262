__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 283,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 53,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 52,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 52,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5,
              "end": 52,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 7,
                "end": 52,
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
                    "start": 35,
                    "end": 41,
                    "typeName": {
                      "type": "Identifier",
                      "start": 35,
                      "end": 41,
                      "name": "RegExp",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 44,
                    "end": 52,
                    "typeName": {
                      "type": "Identifier",
                      "start": 44,
                      "end": 52,
                      "name": "Function",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 54,
      "end": 67,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 58,
          "end": 66,
          "id": {
            "type": "Identifier",
            "start": 58,
            "end": 66,
            "name": "obj",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 61,
              "end": 66,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 63,
                "end": 66
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 68,
      "end": 86,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 72,
          "end": 85,
          "id": {
            "type": "Identifier",
            "start": 72,
            "end": 85,
            "name": "cond",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 76,
              "end": 85,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 78,
                "end": 85
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 88,
      "end": 96,
      "expression": {
        "type": "AssignmentExpression",
        "start": 88,
        "end": 95,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 88,
          "end": 89,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 92,
          "end": 95,
          "value": null,
          "raw": "/a/",
          "regex": {
            "flags": "",
            "pattern": "a"
          }
        }
      },
      "directive": null
    },
    {
      "type": "ForInStatement",
      "start": 97,
      "end": 241,
      "left": {
        "type": "VariableDeclaration",
        "start": 102,
        "end": 107,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 106,
            "end": 107,
            "id": {
              "type": "Identifier",
              "start": 106,
              "end": 107,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": null,
            "definite": false
          }
        ],
        "kind": "let",
        "declare": false
      },
      "right": {
        "type": "Identifier",
        "start": 111,
        "end": 114,
        "name": "obj",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "BlockStatement",
        "start": 116,
        "end": 241,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 122,
            "end": 128,
            "expression": {
              "type": "AssignmentExpression",
              "start": 122,
              "end": 127,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 122,
                "end": 123,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 126,
                "end": 127,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "IfStatement",
            "start": 133,
            "end": 184,
            "test": {
              "type": "Identifier",
              "start": 137,
              "end": 141,
              "name": "cond",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 143,
              "end": 184,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 153,
                  "end": 160,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 153,
                    "end": 159,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 153,
                      "end": 154,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Literal",
                      "start": 157,
                      "end": 159,
                      "value": 42,
                      "raw": "42"
                    }
                  },
                  "directive": null
                },
                {
                  "type": "ContinueStatement",
                  "start": 169,
                  "end": 178,
                  "label": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 189,
            "end": 239,
            "test": {
              "type": "Identifier",
              "start": 193,
              "end": 197,
              "name": "cond",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 199,
              "end": 239,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 209,
                  "end": 218,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 209,
                    "end": 217,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 209,
                      "end": 210,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Literal",
                      "start": 213,
                      "end": 217,
                      "value": true,
                      "raw": "true"
                    }
                  },
                  "directive": null
                },
                {
                  "type": "BreakStatement",
                  "start": 227,
                  "end": 233,
                  "label": null
                }
              ]
            },
            "alternate": null
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 242,
      "end": 244,
      "expression": {
        "type": "Identifier",
        "start": 242,
        "end": 243,
        "name": "x",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
