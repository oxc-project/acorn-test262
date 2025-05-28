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
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 12,
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
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 13,
      "end": 31,
      "expression": {
        "type": "AssignmentExpression",
        "start": 13,
        "end": 31,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 13,
          "end": 18,
          "object": {
            "type": "Identifier",
            "start": 13,
            "end": 14,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 15,
            "end": 18,
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "ClassExpression",
          "start": 21,
          "end": 31,
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
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "start": 29,
            "end": 31,
            "body": []
          },
          "abstract": false,
          "declare": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 32,
      "end": 51,
      "expression": {
        "type": "AssignmentExpression",
        "start": 32,
        "end": 50,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 32,
          "end": 46,
          "object": {
            "type": "Identifier",
            "start": 32,
            "end": 38,
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 39,
            "end": 46,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
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
      },
      "directive": null
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
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 12,
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
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 13,
      "end": 44,
      "expression": {
        "type": "AssignmentExpression",
        "start": 13,
        "end": 43,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 13,
          "end": 17,
          "object": {
            "type": "Identifier",
            "start": 13,
            "end": 14,
            "decorators": [],
            "name": "B",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 15,
            "end": 17,
            "decorators": [],
            "name": "NS",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "CallExpression",
          "start": 20,
          "end": 43,
          "callee": {
            "type": "Identifier",
            "start": 20,
            "end": 27,
            "decorators": [],
            "name": "require",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "start": 28,
              "end": 42,
              "value": "./namespacey",
              "raw": "\"./namespacey\""
            }
          ],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 45,
      "end": 117,
      "expression": {
        "type": "CallExpression",
        "start": 45,
        "end": 116,
        "callee": {
          "type": "MemberExpression",
          "start": 45,
          "end": 66,
          "object": {
            "type": "Identifier",
            "start": 45,
            "end": 51,
            "decorators": [],
            "name": "Object",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 52,
            "end": 66,
            "decorators": [],
            "name": "defineProperty",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
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
            "value": "NS",
            "raw": "\"NS\""
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 78,
                  "end": 83,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 85,
                  "end": 97,
                  "value": "why though",
                  "raw": "\"why though\""
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 99,
                "end": 113,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 99,
                  "end": 107,
                  "decorators": [],
                  "name": "writable",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 109,
                  "end": 113,
                  "value": true,
                  "raw": "true"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 118,
      "end": 137,
      "expression": {
        "type": "AssignmentExpression",
        "start": 118,
        "end": 136,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 118,
          "end": 132,
          "object": {
            "type": "Identifier",
            "start": 118,
            "end": 124,
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 125,
            "end": 132,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
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
      },
      "directive": null
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
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 37,
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
            "callee": {
              "type": "Identifier",
              "start": 14,
              "end": 21,
              "decorators": [],
              "name": "require",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 22,
                "end": 36,
                "value": "./namespacer",
                "raw": "\"./namespacer\""
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 39,
      "end": 59,
      "expression": {
        "type": "AssignmentExpression",
        "start": 39,
        "end": 58,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 39,
          "end": 53,
          "object": {
            "type": "Identifier",
            "start": 39,
            "end": 45,
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 46,
            "end": 53,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 56,
          "end": 58,
          "value": 12,
          "raw": "12"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 60,
      "end": 121,
      "expression": {
        "type": "CallExpression",
        "start": 60,
        "end": 120,
        "callee": {
          "type": "MemberExpression",
          "start": 60,
          "end": 81,
          "object": {
            "type": "Identifier",
            "start": 60,
            "end": 66,
            "decorators": [],
            "name": "Object",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 67,
            "end": 81,
            "decorators": [],
            "name": "defineProperty",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
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
            "value": "exports",
            "raw": "\"exports\""
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 103,
                  "end": 108,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 110,
                  "end": 117,
                  "value": "oh no",
                  "raw": "\"oh no\""
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          }
        ],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
