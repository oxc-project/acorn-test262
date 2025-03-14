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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 52,
            "decorators": [],
            "name": "x",
            "optional": false,
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
                      "decorators": [],
                      "name": "RegExp",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 44,
                    "end": 52,
                    "typeName": {
                      "type": "Identifier",
                      "start": 44,
                      "end": 52,
                      "decorators": [],
                      "name": "Function",
                      "optional": false
                    }
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 58,
            "end": 66,
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 61,
              "end": 66,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 63,
                "end": 66
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 72,
            "end": 85,
            "decorators": [],
            "name": "cond",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 76,
              "end": 85,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 78,
                "end": 85
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
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
          "decorators": [],
          "name": "x",
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 92,
          "end": 95,
          "raw": "/a/",
          "regex": {
            "flags": "",
            "pattern": "a"
          },
          "value": null
        }
      }
    },
    {
      "type": "ForInStatement",
      "start": 97,
      "end": 241,
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
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 126,
                "end": 127,
                "decorators": [],
                "name": "y",
                "optional": false
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 133,
            "end": 184,
            "alternate": null,
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
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    },
                    "right": {
                      "type": "Literal",
                      "start": 157,
                      "end": 159,
                      "raw": "42",
                      "value": 42
                    }
                  }
                },
                {
                  "type": "ContinueStatement",
                  "start": 169,
                  "end": 178,
                  "label": null
                }
              ]
            },
            "test": {
              "type": "Identifier",
              "start": 137,
              "end": 141,
              "decorators": [],
              "name": "cond",
              "optional": false
            }
          },
          {
            "type": "IfStatement",
            "start": 189,
            "end": 239,
            "alternate": null,
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
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    },
                    "right": {
                      "type": "Literal",
                      "start": 213,
                      "end": 217,
                      "raw": "true",
                      "value": true
                    }
                  }
                },
                {
                  "type": "BreakStatement",
                  "start": 227,
                  "end": 233,
                  "label": null
                }
              ]
            },
            "test": {
              "type": "Identifier",
              "start": 193,
              "end": 197,
              "decorators": [],
              "name": "cond",
              "optional": false
            }
          }
        ]
      },
      "left": {
        "type": "VariableDeclaration",
        "start": 102,
        "end": 107,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 106,
            "end": 107,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 106,
              "end": 107,
              "decorators": [],
              "name": "y",
              "optional": false
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "let"
      },
      "right": {
        "type": "Identifier",
        "start": 111,
        "end": 114,
        "decorators": [],
        "name": "obj",
        "optional": false
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
        "decorators": [],
        "name": "x",
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
