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
          "id": {
            "type": "ArrayPattern",
            "start": 26,
            "end": 28,
            "elements": [],
            "decorators": [],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 31,
            "end": 35,
            "value": null,
            "raw": "null"
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
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
          "id": {
            "type": "ObjectPattern",
            "start": 42,
            "end": 45,
            "properties": [],
            "decorators": [],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 48,
            "end": 52,
            "value": null,
            "raw": "null"
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 55,
      "end": 67,
      "expression": {
        "type": "AssignmentExpression",
        "start": 56,
        "end": 65,
        "operator": "=",
        "left": {
          "type": "ObjectPattern",
          "start": 56,
          "end": 58,
          "properties": [],
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 61,
          "end": 65,
          "value": null,
          "raw": "null"
        }
      },
      "directive": null
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
          "id": {
            "type": "ObjectPattern",
            "start": 73,
            "end": 76,
            "properties": [],
            "decorators": [],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Identifier",
            "start": 79,
            "end": 88,
            "name": "undefined",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 91,
      "end": 108,
      "expression": {
        "type": "AssignmentExpression",
        "start": 92,
        "end": 106,
        "operator": "=",
        "left": {
          "type": "ObjectPattern",
          "start": 92,
          "end": 94,
          "properties": [],
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 97,
          "end": 106,
          "name": "undefined",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
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
          "id": {
            "type": "ObjectPattern",
            "start": 114,
            "end": 117,
            "properties": [],
            "decorators": [],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ConditionalExpression",
            "start": 120,
            "end": 145,
            "test": {
              "type": "CallExpression",
              "start": 120,
              "end": 133,
              "callee": {
                "type": "MemberExpression",
                "start": 120,
                "end": 131,
                "object": {
                  "type": "Identifier",
                  "start": 120,
                  "end": 124,
                  "name": "Math",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 125,
                  "end": 131,
                  "name": "random",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            },
            "consequent": {
              "type": "ObjectExpression",
              "start": 136,
              "end": 138,
              "properties": []
            },
            "alternate": {
              "type": "Literal",
              "start": 141,
              "end": 145,
              "value": null,
              "raw": "null"
            }
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 148,
      "end": 181,
      "expression": {
        "type": "AssignmentExpression",
        "start": 149,
        "end": 179,
        "operator": "=",
        "left": {
          "type": "ObjectPattern",
          "start": 149,
          "end": 151,
          "properties": [],
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "ConditionalExpression",
          "start": 154,
          "end": 179,
          "test": {
            "type": "CallExpression",
            "start": 154,
            "end": 167,
            "callee": {
              "type": "MemberExpression",
              "start": 154,
              "end": 165,
              "object": {
                "type": "Identifier",
                "start": 154,
                "end": 158,
                "name": "Math",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 159,
                "end": 165,
                "name": "random",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [],
            "optional": false,
            "typeArguments": null
          },
          "consequent": {
            "type": "ObjectExpression",
            "start": 170,
            "end": 172,
            "properties": []
          },
          "alternate": {
            "type": "Literal",
            "start": 175,
            "end": 179,
            "value": null,
            "raw": "null"
          }
        }
      },
      "directive": null
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
          "id": {
            "type": "ObjectPattern",
            "start": 187,
            "end": 190,
            "properties": [],
            "decorators": [],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ConditionalExpression",
            "start": 193,
            "end": 223,
            "test": {
              "type": "CallExpression",
              "start": 193,
              "end": 206,
              "callee": {
                "type": "MemberExpression",
                "start": 193,
                "end": 204,
                "object": {
                  "type": "Identifier",
                  "start": 193,
                  "end": 197,
                  "name": "Math",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 198,
                  "end": 204,
                  "name": "random",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            },
            "consequent": {
              "type": "ObjectExpression",
              "start": 209,
              "end": 211,
              "properties": []
            },
            "alternate": {
              "type": "Identifier",
              "start": 214,
              "end": 223,
              "name": "undefined",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 226,
      "end": 264,
      "expression": {
        "type": "AssignmentExpression",
        "start": 227,
        "end": 262,
        "operator": "=",
        "left": {
          "type": "ObjectPattern",
          "start": 227,
          "end": 229,
          "properties": [],
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "ConditionalExpression",
          "start": 232,
          "end": 262,
          "test": {
            "type": "CallExpression",
            "start": 232,
            "end": 245,
            "callee": {
              "type": "MemberExpression",
              "start": 232,
              "end": 243,
              "object": {
                "type": "Identifier",
                "start": 232,
                "end": 236,
                "name": "Math",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 237,
                "end": 243,
                "name": "random",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [],
            "optional": false,
            "typeArguments": null
          },
          "consequent": {
            "type": "ObjectExpression",
            "start": 248,
            "end": 250,
            "properties": []
          },
          "alternate": {
            "type": "Identifier",
            "start": 253,
            "end": 262,
            "name": "undefined",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      },
      "directive": null
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
          "id": {
            "type": "ObjectPattern",
            "start": 270,
            "end": 273,
            "properties": [],
            "decorators": [],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ConditionalExpression",
            "start": 276,
            "end": 308,
            "test": {
              "type": "CallExpression",
              "start": 276,
              "end": 289,
              "callee": {
                "type": "MemberExpression",
                "start": 276,
                "end": 287,
                "object": {
                  "type": "Identifier",
                  "start": 276,
                  "end": 280,
                  "name": "Math",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 281,
                  "end": 287,
                  "name": "random",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            },
            "consequent": {
              "type": "Literal",
              "start": 292,
              "end": 296,
              "value": null,
              "raw": "null"
            },
            "alternate": {
              "type": "Identifier",
              "start": 299,
              "end": 308,
              "name": "undefined",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 311,
      "end": 351,
      "expression": {
        "type": "AssignmentExpression",
        "start": 312,
        "end": 349,
        "operator": "=",
        "left": {
          "type": "ObjectPattern",
          "start": 312,
          "end": 314,
          "properties": [],
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "ConditionalExpression",
          "start": 317,
          "end": 349,
          "test": {
            "type": "CallExpression",
            "start": 317,
            "end": 330,
            "callee": {
              "type": "MemberExpression",
              "start": 317,
              "end": 328,
              "object": {
                "type": "Identifier",
                "start": 317,
                "end": 321,
                "name": "Math",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 322,
                "end": 328,
                "name": "random",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [],
            "optional": false,
            "typeArguments": null
          },
          "consequent": {
            "type": "Literal",
            "start": 333,
            "end": 337,
            "value": null,
            "raw": "null"
          },
          "alternate": {
            "type": "Identifier",
            "start": 340,
            "end": 349,
            "name": "undefined",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
