__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 359,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 15,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 14,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 14,
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 9,
              "end": 14,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 11,
                "end": 14
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 56,
      "end": 71,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 60,
          "end": 70,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 60,
            "end": 70,
            "decorators": [],
            "name": "x1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 62,
              "end": 70,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 64,
                "end": 70
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 72,
      "end": 83,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 72,
        "end": 82,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 72,
          "end": 74,
          "decorators": [],
          "name": "x1",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 77,
          "end": 82,
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 85,
      "end": 129,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 110,
        "end": 129,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 116,
            "end": 127,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 116,
              "end": 126,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 116,
                "end": 118,
                "decorators": [],
                "name": "x2",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 121,
                "end": 126,
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 94,
        "end": 97,
        "decorators": [],
        "name": "fn1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 98,
          "end": 108,
          "decorators": [],
          "name": "x2",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 100,
            "end": 108,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 102,
              "end": 108
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 152,
      "end": 175,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 156,
          "end": 174,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 156,
            "end": 174,
            "decorators": [],
            "name": "x3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 158,
              "end": 174,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 160,
                "end": 174,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 162,
                    "end": 171,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 162,
                      "end": 163,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 163,
                      "end": 171,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 165,
                        "end": 171
                      }
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
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 176,
      "end": 189,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 176,
        "end": 188,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 176,
          "end": 180,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 176,
            "end": 178,
            "decorators": [],
            "name": "x3",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 179,
            "end": 180,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Identifier",
          "start": 183,
          "end": 188,
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 190,
      "end": 206,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 190,
        "end": 205,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 190,
          "end": 197,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 190,
            "end": 192,
            "decorators": [],
            "name": "x3",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "start": 193,
            "end": 196,
            "raw": "'a'",
            "value": "a",
            "regex": null,
            "bigint": null
          }
        },
        "right": {
          "type": "Identifier",
          "start": 200,
          "end": 205,
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 262,
      "end": 275,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 262,
        "end": 274,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 263,
          "end": 265,
          "decorators": [],
          "name": "x1",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 269,
          "end": 274,
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 277,
      "end": 323,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 302,
        "end": 323,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 308,
            "end": 321,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 308,
              "end": 320,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 309,
                "end": 311,
                "decorators": [],
                "name": "x4",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 315,
                "end": 320,
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 286,
        "end": 289,
        "decorators": [],
        "name": "fn2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 290,
          "end": 300,
          "decorators": [],
          "name": "x4",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 292,
            "end": 300,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 294,
              "end": 300
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 325,
      "end": 340,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 325,
        "end": 339,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 326,
          "end": 330,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 326,
            "end": 328,
            "decorators": [],
            "name": "x3",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 329,
            "end": 330,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Identifier",
          "start": 334,
          "end": 339,
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 341,
      "end": 359,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 341,
        "end": 358,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 342,
          "end": 349,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 342,
            "end": 344,
            "decorators": [],
            "name": "x3",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "start": 345,
            "end": 348,
            "raw": "'a'",
            "value": "a",
            "regex": null,
            "bigint": null
          }
        },
        "right": {
          "type": "Identifier",
          "start": 353,
          "end": 358,
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": null
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
