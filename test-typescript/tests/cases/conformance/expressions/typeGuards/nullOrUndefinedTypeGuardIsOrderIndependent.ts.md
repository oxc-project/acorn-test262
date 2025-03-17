__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 312,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 311,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 13,
        "name": "test",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 14,
          "end": 38,
          "name": "strOrNull",
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
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 40,
          "end": 74,
          "name": "strOrUndefined",
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
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 76,
        "end": 311,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 82,
            "end": 111,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 86,
                "end": 110,
                "id": {
                  "type": "Identifier",
                  "start": 86,
                  "end": 97,
                  "name": "str",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 89,
                    "end": 97,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 91,
                      "end": 97
                    }
                  },
                  "decorators": [],
                  "optional": false
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
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 116,
            "end": 130,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 120,
                "end": 129,
                "id": {
                  "type": "Identifier",
                  "start": 120,
                  "end": 129,
                  "name": "nil",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 123,
                    "end": 129,
                    "typeAnnotation": {
                      "type": "TSNullKeyword",
                      "start": 125,
                      "end": 129
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "var",
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
                "name": "strOrNull",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                      "name": "nil",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 175,
                      "end": 184,
                      "name": "strOrNull",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
                      "name": "str",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 217,
                      "end": 226,
                      "name": "strOrNull",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
                "name": "undefined",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "!==",
              "right": {
                "type": "Identifier",
                "start": 256,
                "end": 270,
                "name": "strOrUndefined",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                      "name": "str",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 288,
                      "end": 302,
                      "name": "strOrUndefined",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
