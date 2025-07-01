__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 7
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 10,
            "end": 12
          },
          "definite": false,
          "start": 6,
          "end": 12
        }
      ],
      "declare": false,
      "start": 0,
      "end": 12
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 13,
            "end": 14
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null,
            "start": 15,
            "end": 18
          },
          "optional": false,
          "computed": false,
          "start": 13,
          "end": 18
        },
        "right": {
          "type": "ClassExpression",
          "decorators": [],
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "Q",
            "optional": false,
            "typeAnnotation": null,
            "start": 27,
            "end": 28
          },
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "body": [],
            "start": 29,
            "end": 31
          },
          "abstract": false,
          "declare": false,
          "start": 21,
          "end": 31
        },
        "start": 13,
        "end": 31
      },
      "directive": null,
      "start": 13,
      "end": 31
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null,
            "start": 32,
            "end": 38
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 39,
            "end": 46
          },
          "optional": false,
          "computed": false,
          "start": 32,
          "end": 46
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "A",
          "optional": false,
          "typeAnnotation": null,
          "start": 49,
          "end": 50
        },
        "start": 32,
        "end": 50
      },
      "directive": null,
      "start": 32,
      "end": 51
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 51
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "B",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 7
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 10,
            "end": 12
          },
          "definite": false,
          "start": 6,
          "end": 12
        }
      ],
      "declare": false,
      "start": 0,
      "end": 12
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "B",
            "optional": false,
            "typeAnnotation": null,
            "start": 13,
            "end": 14
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "NS",
            "optional": false,
            "typeAnnotation": null,
            "start": 15,
            "end": 17
          },
          "optional": false,
          "computed": false,
          "start": 13,
          "end": 17
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "require",
            "optional": false,
            "typeAnnotation": null,
            "start": 20,
            "end": 27
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "./namespacey",
              "raw": "\"./namespacey\"",
              "start": 28,
              "end": 42
            }
          ],
          "optional": false,
          "start": 20,
          "end": 43
        },
        "start": 13,
        "end": 43
      },
      "directive": null,
      "start": 13,
      "end": 44
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Object",
            "optional": false,
            "typeAnnotation": null,
            "start": 45,
            "end": 51
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "defineProperty",
            "optional": false,
            "typeAnnotation": null,
            "start": 52,
            "end": 66
          },
          "optional": false,
          "computed": false,
          "start": 45,
          "end": 66
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "B",
            "optional": false,
            "typeAnnotation": null,
            "start": 67,
            "end": 68
          },
          {
            "type": "Literal",
            "value": "NS",
            "raw": "\"NS\"",
            "start": 70,
            "end": 74
          },
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 78,
                  "end": 83
                },
                "value": {
                  "type": "Literal",
                  "value": "why though",
                  "raw": "\"why though\"",
                  "start": 85,
                  "end": 97
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 78,
                "end": 97
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "writable",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 99,
                  "end": 107
                },
                "value": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 109,
                  "end": 113
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 99,
                "end": 113
              }
            ],
            "start": 76,
            "end": 115
          }
        ],
        "optional": false,
        "start": 45,
        "end": 116
      },
      "directive": null,
      "start": 45,
      "end": 117
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null,
            "start": 118,
            "end": 124
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 125,
            "end": 132
          },
          "optional": false,
          "computed": false,
          "start": 118,
          "end": 132
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "B",
          "optional": false,
          "typeAnnotation": null,
          "start": 135,
          "end": 136
        },
        "start": 118,
        "end": 136
      },
      "directive": null,
      "start": 118,
      "end": 137
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 138
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "_item",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 11
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "require",
              "optional": false,
              "typeAnnotation": null,
              "start": 14,
              "end": 21
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "./namespacer",
                "raw": "\"./namespacer\"",
                "start": 22,
                "end": 36
              }
            ],
            "optional": false,
            "start": 14,
            "end": 37
          },
          "definite": false,
          "start": 6,
          "end": 37
        }
      ],
      "declare": false,
      "start": 0,
      "end": 38
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null,
            "start": 39,
            "end": 45
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 46,
            "end": 53
          },
          "optional": false,
          "computed": false,
          "start": 39,
          "end": 53
        },
        "right": {
          "type": "Literal",
          "value": 12,
          "raw": "12",
          "start": 56,
          "end": 58
        },
        "start": 39,
        "end": 58
      },
      "directive": null,
      "start": 39,
      "end": 59
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Object",
            "optional": false,
            "typeAnnotation": null,
            "start": 60,
            "end": 66
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "defineProperty",
            "optional": false,
            "typeAnnotation": null,
            "start": 67,
            "end": 81
          },
          "optional": false,
          "computed": false,
          "start": 60,
          "end": 81
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null,
            "start": 82,
            "end": 88
          },
          {
            "type": "Literal",
            "value": "exports",
            "raw": "\"exports\"",
            "start": 90,
            "end": 99
          },
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 103,
                  "end": 108
                },
                "value": {
                  "type": "Literal",
                  "value": "oh no",
                  "raw": "\"oh no\"",
                  "start": 110,
                  "end": 117
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 103,
                "end": 117
              }
            ],
            "start": 101,
            "end": 119
          }
        ],
        "optional": false,
        "start": 60,
        "end": 120
      },
      "directive": null,
      "start": 60,
      "end": 121
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 121
}
```
