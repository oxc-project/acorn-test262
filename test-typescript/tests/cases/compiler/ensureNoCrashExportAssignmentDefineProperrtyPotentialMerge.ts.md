__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 51,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 12,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 12,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 7,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 10,
            "end": 12,
            "properties": []
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 13,
      "end": 31,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 13,
        "end": 31,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 13,
          "end": 18,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 13,
            "end": 14,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 15,
            "end": 18,
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "ClassExpression",
          "start": 21,
          "end": 31,
          "abstract": false,
          "body": {
            "type": "ClassBody",
            "start": 29,
            "end": 31,
            "body": []
          },
          "declare": false,
          "decorators": [],
          "id": {
            "type": "Identifier",
            "start": 27,
            "end": 28,
            "decorators": [],
            "name": "Q",
            "optional": false,
            "typeAnnotation": null
          },
          "implements": [],
          "superClass": null,
          "superTypeArguments": null,
          "typeParameters": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 32,
      "end": 51,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 32,
        "end": 50,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 32,
          "end": 46,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 32,
            "end": 38,
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 39,
            "end": 46,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Identifier",
          "start": 49,
          "end": 50,
          "decorators": [],
          "name": "A",
          "optional": false,
          "typeAnnotation": null
        }
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 138,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 12,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 12,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 7,
            "decorators": [],
            "name": "B",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 10,
            "end": 12,
            "properties": []
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 13,
      "end": 44,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 13,
        "end": 43,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 13,
          "end": 17,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 13,
            "end": 14,
            "decorators": [],
            "name": "B",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 15,
            "end": 17,
            "decorators": [],
            "name": "NS",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "CallExpression",
          "start": 20,
          "end": 43,
          "arguments": [
            {
              "type": "Literal",
              "start": 28,
              "end": 42,
              "raw": "\"./namespacey\"",
              "value": "./namespacey",
              "regex": null,
              "bigint": null
            }
          ],
          "callee": {
            "type": "Identifier",
            "start": 20,
            "end": 27,
            "decorators": [],
            "name": "require",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "typeArguments": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 45,
      "end": 117,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 45,
        "end": 116,
        "arguments": [
          {
            "type": "Identifier",
            "start": 67,
            "end": 68,
            "decorators": [],
            "name": "B",
            "optional": false,
            "typeAnnotation": null
          },
          {
            "type": "Literal",
            "start": 70,
            "end": 74,
            "raw": "\"NS\"",
            "value": "NS",
            "regex": null,
            "bigint": null
          },
          {
            "type": "ObjectExpression",
            "start": 76,
            "end": 115,
            "properties": [
              {
                "type": "Property",
                "start": 78,
                "end": 97,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 78,
                  "end": 83,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 85,
                  "end": 97,
                  "raw": "\"why though\"",
                  "value": "why though",
                  "regex": null,
                  "bigint": null
                }
              },
              {
                "type": "Property",
                "start": 99,
                "end": 113,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 99,
                  "end": 107,
                  "decorators": [],
                  "name": "writable",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 109,
                  "end": 113,
                  "raw": "true",
                  "value": true,
                  "regex": null,
                  "bigint": null
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 45,
          "end": 66,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 45,
            "end": 51,
            "decorators": [],
            "name": "Object",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 52,
            "end": 66,
            "decorators": [],
            "name": "defineProperty",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 118,
      "end": 137,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 118,
        "end": 136,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 118,
          "end": 132,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 118,
            "end": 124,
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 125,
            "end": 132,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Identifier",
          "start": 135,
          "end": 136,
          "decorators": [],
          "name": "B",
          "optional": false,
          "typeAnnotation": null
        }
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 121,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 38,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 37,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 11,
            "decorators": [],
            "name": "_item",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 14,
            "end": 37,
            "arguments": [
              {
                "type": "Literal",
                "start": 22,
                "end": 36,
                "raw": "\"./namespacer\"",
                "value": "./namespacer",
                "regex": null,
                "bigint": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 14,
              "end": 21,
              "decorators": [],
              "name": "require",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 39,
      "end": 59,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 39,
        "end": 58,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 39,
          "end": 53,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 39,
            "end": 45,
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 46,
            "end": 53,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 56,
          "end": 58,
          "raw": "12",
          "value": 12,
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 60,
      "end": 121,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 60,
        "end": 120,
        "arguments": [
          {
            "type": "Identifier",
            "start": 82,
            "end": 88,
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null
          },
          {
            "type": "Literal",
            "start": 90,
            "end": 99,
            "raw": "\"exports\"",
            "value": "exports",
            "regex": null,
            "bigint": null
          },
          {
            "type": "ObjectExpression",
            "start": 101,
            "end": 119,
            "properties": [
              {
                "type": "Property",
                "start": 103,
                "end": 117,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 103,
                  "end": 108,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 110,
                  "end": 117,
                  "raw": "\"oh no\"",
                  "value": "oh no",
                  "regex": null,
                  "bigint": null
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 60,
          "end": 81,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 60,
            "end": 66,
            "decorators": [],
            "name": "Object",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 67,
            "end": 81,
            "decorators": [],
            "name": "defineProperty",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
