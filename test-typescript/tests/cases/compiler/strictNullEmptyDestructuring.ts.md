__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 352,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 22,
      "end": 36,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 26,
          "end": 35,
          "definite": false,
          "id": {
            "type": "ArrayPattern",
            "start": 26,
            "end": 28,
            "decorators": [],
            "elements": [],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 31,
            "end": 35,
            "raw": "null",
            "value": null
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 38,
      "end": 53,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 42,
          "end": 52,
          "definite": false,
          "id": {
            "type": "ObjectPattern",
            "start": 42,
            "end": 45,
            "decorators": [],
            "optional": false,
            "properties": [],
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 48,
            "end": 52,
            "raw": "null",
            "value": null
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 55,
      "end": 67,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 56,
        "end": 65,
        "operator": "=",
        "left": {
          "type": "ObjectPattern",
          "start": 56,
          "end": 58,
          "decorators": [],
          "optional": false,
          "properties": [],
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 61,
          "end": 65,
          "raw": "null",
          "value": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 69,
      "end": 89,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 73,
          "end": 88,
          "definite": false,
          "id": {
            "type": "ObjectPattern",
            "start": 73,
            "end": 76,
            "decorators": [],
            "optional": false,
            "properties": [],
            "typeAnnotation": null
          },
          "init": {
            "type": "Identifier",
            "start": 79,
            "end": 88,
            "decorators": [],
            "name": "undefined",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 91,
      "end": 108,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 92,
        "end": 106,
        "operator": "=",
        "left": {
          "type": "ObjectPattern",
          "start": 92,
          "end": 94,
          "decorators": [],
          "optional": false,
          "properties": [],
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 97,
          "end": 106,
          "decorators": [],
          "name": "undefined",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 110,
      "end": 146,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 114,
          "end": 145,
          "definite": false,
          "id": {
            "type": "ObjectPattern",
            "start": 114,
            "end": 117,
            "decorators": [],
            "optional": false,
            "properties": [],
            "typeAnnotation": null
          },
          "init": {
            "type": "ConditionalExpression",
            "start": 120,
            "end": 145,
            "alternate": {
              "type": "Literal",
              "start": 141,
              "end": 145,
              "raw": "null",
              "value": null
            },
            "consequent": {
              "type": "ObjectExpression",
              "start": 136,
              "end": 138,
              "properties": []
            },
            "test": {
              "type": "CallExpression",
              "start": 120,
              "end": 133,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 120,
                "end": 131,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 120,
                  "end": 124,
                  "decorators": [],
                  "name": "Math",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 125,
                  "end": 131,
                  "decorators": [],
                  "name": "random",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 148,
      "end": 181,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 149,
        "end": 179,
        "operator": "=",
        "left": {
          "type": "ObjectPattern",
          "start": 149,
          "end": 151,
          "decorators": [],
          "optional": false,
          "properties": [],
          "typeAnnotation": null
        },
        "right": {
          "type": "ConditionalExpression",
          "start": 154,
          "end": 179,
          "alternate": {
            "type": "Literal",
            "start": 175,
            "end": 179,
            "raw": "null",
            "value": null
          },
          "consequent": {
            "type": "ObjectExpression",
            "start": 170,
            "end": 172,
            "properties": []
          },
          "test": {
            "type": "CallExpression",
            "start": 154,
            "end": 167,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 154,
              "end": 165,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 154,
                "end": 158,
                "decorators": [],
                "name": "Math",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 159,
                "end": 165,
                "decorators": [],
                "name": "random",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 183,
      "end": 224,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 187,
          "end": 223,
          "definite": false,
          "id": {
            "type": "ObjectPattern",
            "start": 187,
            "end": 190,
            "decorators": [],
            "optional": false,
            "properties": [],
            "typeAnnotation": null
          },
          "init": {
            "type": "ConditionalExpression",
            "start": 193,
            "end": 223,
            "alternate": {
              "type": "Identifier",
              "start": 214,
              "end": 223,
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null
            },
            "consequent": {
              "type": "ObjectExpression",
              "start": 209,
              "end": 211,
              "properties": []
            },
            "test": {
              "type": "CallExpression",
              "start": 193,
              "end": 206,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 193,
                "end": 204,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 193,
                  "end": 197,
                  "decorators": [],
                  "name": "Math",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 198,
                  "end": 204,
                  "decorators": [],
                  "name": "random",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 226,
      "end": 264,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 227,
        "end": 262,
        "operator": "=",
        "left": {
          "type": "ObjectPattern",
          "start": 227,
          "end": 229,
          "decorators": [],
          "optional": false,
          "properties": [],
          "typeAnnotation": null
        },
        "right": {
          "type": "ConditionalExpression",
          "start": 232,
          "end": 262,
          "alternate": {
            "type": "Identifier",
            "start": 253,
            "end": 262,
            "decorators": [],
            "name": "undefined",
            "optional": false,
            "typeAnnotation": null
          },
          "consequent": {
            "type": "ObjectExpression",
            "start": 248,
            "end": 250,
            "properties": []
          },
          "test": {
            "type": "CallExpression",
            "start": 232,
            "end": 245,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 232,
              "end": 243,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 232,
                "end": 236,
                "decorators": [],
                "name": "Math",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 237,
                "end": 243,
                "decorators": [],
                "name": "random",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 266,
      "end": 309,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 270,
          "end": 308,
          "definite": false,
          "id": {
            "type": "ObjectPattern",
            "start": 270,
            "end": 273,
            "decorators": [],
            "optional": false,
            "properties": [],
            "typeAnnotation": null
          },
          "init": {
            "type": "ConditionalExpression",
            "start": 276,
            "end": 308,
            "alternate": {
              "type": "Identifier",
              "start": 299,
              "end": 308,
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null
            },
            "consequent": {
              "type": "Literal",
              "start": 292,
              "end": 296,
              "raw": "null",
              "value": null
            },
            "test": {
              "type": "CallExpression",
              "start": 276,
              "end": 289,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 276,
                "end": 287,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 276,
                  "end": 280,
                  "decorators": [],
                  "name": "Math",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 281,
                  "end": 287,
                  "decorators": [],
                  "name": "random",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 311,
      "end": 351,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 312,
        "end": 349,
        "operator": "=",
        "left": {
          "type": "ObjectPattern",
          "start": 312,
          "end": 314,
          "decorators": [],
          "optional": false,
          "properties": [],
          "typeAnnotation": null
        },
        "right": {
          "type": "ConditionalExpression",
          "start": 317,
          "end": 349,
          "alternate": {
            "type": "Identifier",
            "start": 340,
            "end": 349,
            "decorators": [],
            "name": "undefined",
            "optional": false,
            "typeAnnotation": null
          },
          "consequent": {
            "type": "Literal",
            "start": 333,
            "end": 337,
            "raw": "null",
            "value": null
          },
          "test": {
            "type": "CallExpression",
            "start": 317,
            "end": 330,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 317,
              "end": 328,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 317,
                "end": 321,
                "decorators": [],
                "name": "Math",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 322,
                "end": 328,
                "decorators": [],
                "name": "random",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
