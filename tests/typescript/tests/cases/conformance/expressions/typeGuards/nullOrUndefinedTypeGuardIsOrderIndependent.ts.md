__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 311,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 311,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 13,
        "decorators": [],
        "name": "test",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 14,
          "end": 38,
          "decorators": [],
          "name": "strOrNull",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 23,
            "end": 38,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 25,
              "end": 38,
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 25,
                  "end": 31
                },
                {
                  "type": "TSNullKeyword",
                  "start": 34,
                  "end": 38
                }
              ]
            }
          }
        },
        {
          "type": "Identifier",
          "start": 40,
          "end": 74,
          "decorators": [],
          "name": "strOrUndefined",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 54,
            "end": 74,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 56,
              "end": 74,
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 56,
                  "end": 62
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 65,
                  "end": 74
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 76,
        "end": 311,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 82,
            "end": 111,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 86,
                "end": 110,
                "id": {
                  "type": "Identifier",
                  "start": 86,
                  "end": 97,
                  "decorators": [],
                  "name": "str",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 89,
                    "end": 97,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 91,
                      "end": 97
                    }
                  }
                },
                "init": {
                  "type": "Literal",
                  "start": 100,
                  "end": 110,
                  "value": "original",
                  "raw": "\"original\""
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 116,
            "end": 130,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 120,
                "end": 129,
                "id": {
                  "type": "Identifier",
                  "start": 120,
                  "end": 129,
                  "decorators": [],
                  "name": "nil",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 123,
                    "end": 129,
                    "typeAnnotation": {
                      "type": "TSNullKeyword",
                      "start": 125,
                      "end": 129
                    }
                  }
                },
                "init": null,
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "IfStatement",
            "start": 135,
            "end": 233,
            "test": {
              "type": "BinaryExpression",
              "start": 139,
              "end": 157,
              "left": {
                "type": "Literal",
                "start": 139,
                "end": 143,
                "value": null,
                "raw": "null"
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "start": 148,
                "end": 157,
                "decorators": [],
                "name": "strOrNull",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 159,
              "end": 191,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 169,
                  "end": 185,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 169,
                    "end": 184,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 169,
                      "end": 172,
                      "decorators": [],
                      "name": "nil",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 175,
                      "end": 184,
                      "decorators": [],
                      "name": "strOrNull",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "directive": null
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 201,
              "end": 233,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 211,
                  "end": 227,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 211,
                    "end": 226,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 211,
                      "end": 214,
                      "decorators": [],
                      "name": "str",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 217,
                      "end": 226,
                      "decorators": [],
                      "name": "strOrNull",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "directive": null
                }
              ]
            }
          },
          {
            "type": "IfStatement",
            "start": 238,
            "end": 309,
            "test": {
              "type": "BinaryExpression",
              "start": 242,
              "end": 270,
              "left": {
                "type": "Identifier",
                "start": 242,
                "end": 251,
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "!==",
              "right": {
                "type": "Identifier",
                "start": 256,
                "end": 270,
                "decorators": [],
                "name": "strOrUndefined",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 272,
              "end": 309,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 282,
                  "end": 303,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 282,
                    "end": 302,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 282,
                      "end": 285,
                      "decorators": [],
                      "name": "str",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 288,
                      "end": 302,
                      "decorators": [],
                      "name": "strOrUndefined",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
