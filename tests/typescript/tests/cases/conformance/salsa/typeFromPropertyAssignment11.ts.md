__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "Inner",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 9
          },
          "init": {
            "type": "FunctionExpression",
            "id": null,
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 23,
              "end": 25
            },
            "expression": false,
            "start": 12,
            "end": 25
          },
          "definite": false,
          "start": 4,
          "end": 25
        }
      ],
      "declare": false,
      "start": 0,
      "end": 25
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
            "name": "Inner",
            "optional": false,
            "typeAnnotation": null,
            "start": 26,
            "end": 31
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "prototype",
            "optional": false,
            "typeAnnotation": null,
            "start": 32,
            "end": 41
          },
          "optional": false,
          "computed": false,
          "start": 26,
          "end": 41
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "m",
                "optional": false,
                "typeAnnotation": null,
                "start": 50,
                "end": 51
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 54,
                  "end": 57
                },
                "expression": false,
                "start": 51,
                "end": 57
              },
              "method": true,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 50,
              "end": 57
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null,
                "start": 63,
                "end": 64
              },
              "value": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 66,
                "end": 67
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 63,
              "end": 67
            }
          ],
          "start": 44,
          "end": 69
        },
        "start": 26,
        "end": 69
      },
      "directive": null,
      "start": 26,
      "end": 69
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "Inner",
              "optional": false,
              "typeAnnotation": null,
              "start": 108,
              "end": 113
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null,
              "start": 114,
              "end": 123
            },
            "optional": false,
            "computed": false,
            "start": 108,
            "end": 123
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "j",
            "optional": false,
            "typeAnnotation": null,
            "start": 124,
            "end": 125
          },
          "optional": false,
          "computed": false,
          "start": 108,
          "end": 125
        },
        "right": {
          "type": "Literal",
          "value": 2,
          "raw": "2",
          "start": 128,
          "end": 129
        },
        "start": 108,
        "end": 129
      },
      "directive": null,
      "start": 108,
      "end": 129
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Inner",
            "optional": false,
            "typeAnnotation": null,
            "start": 152,
            "end": 157
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "prototype",
            "optional": false,
            "typeAnnotation": null,
            "start": 158,
            "end": 167
          },
          "optional": false,
          "computed": false,
          "start": 152,
          "end": 167
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "k",
          "optional": false,
          "typeAnnotation": null,
          "start": 168,
          "end": 169
        },
        "optional": false,
        "computed": false,
        "start": 152,
        "end": 169
      },
      "directive": null,
      "start": 152,
      "end": 170
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "inner",
            "optional": false,
            "typeAnnotation": null,
            "start": 175,
            "end": 180
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Inner",
              "optional": false,
              "typeAnnotation": null,
              "start": 187,
              "end": 192
            },
            "typeArguments": null,
            "arguments": [],
            "start": 183,
            "end": 194
          },
          "definite": false,
          "start": 175,
          "end": 194
        }
      ],
      "declare": false,
      "start": 171,
      "end": 194
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
            "name": "inner",
            "optional": false,
            "typeAnnotation": null,
            "start": 195,
            "end": 200
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null,
            "start": 201,
            "end": 202
          },
          "optional": false,
          "computed": false,
          "start": 195,
          "end": 202
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 195,
        "end": 204
      },
      "directive": null,
      "start": 195,
      "end": 204
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "inner",
          "optional": false,
          "typeAnnotation": null,
          "start": 205,
          "end": 210
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 211,
          "end": 212
        },
        "optional": false,
        "computed": false,
        "start": 205,
        "end": 212
      },
      "directive": null,
      "start": 205,
      "end": 212
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "inner",
          "optional": false,
          "typeAnnotation": null,
          "start": 213,
          "end": 218
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "j",
          "optional": false,
          "typeAnnotation": null,
          "start": 219,
          "end": 220
        },
        "optional": false,
        "computed": false,
        "start": 213,
        "end": 220
      },
      "directive": null,
      "start": 213,
      "end": 220
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "inner",
          "optional": false,
          "typeAnnotation": null,
          "start": 221,
          "end": 226
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "k",
          "optional": false,
          "typeAnnotation": null,
          "start": 227,
          "end": 228
        },
        "optional": false,
        "computed": false,
        "start": 221,
        "end": 228
      },
      "directive": null,
      "start": 221,
      "end": 228
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 228
}
```
