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
            "name": "Outer",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 9
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 12,
            "end": 14
          },
          "definite": false,
          "start": 4,
          "end": 14
        }
      ],
      "declare": false,
      "start": 0,
      "end": 15
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
            "name": "Outer",
            "optional": false,
            "typeAnnotation": null,
            "start": 17,
            "end": 22
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "Inner",
            "optional": false,
            "typeAnnotation": null,
            "start": 23,
            "end": 28
          },
          "optional": false,
          "computed": false,
          "start": 17,
          "end": 28
        },
        "right": {
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
            "start": 43,
            "end": 45
          },
          "expression": false,
          "start": 31,
          "end": 45
        },
        "start": 17,
        "end": 45
      },
      "directive": null,
      "start": 17,
      "end": 45
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
              "name": "Outer",
              "optional": false,
              "typeAnnotation": null,
              "start": 46,
              "end": 51
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "Inner",
              "optional": false,
              "typeAnnotation": null,
              "start": 52,
              "end": 57
            },
            "optional": false,
            "computed": false,
            "start": 46,
            "end": 57
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "prototype",
            "optional": false,
            "typeAnnotation": null,
            "start": 58,
            "end": 67
          },
          "optional": false,
          "computed": false,
          "start": 46,
          "end": 67
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
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 76,
                "end": 77
              },
              "value": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 79,
                "end": 80
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 76,
              "end": 80
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "m",
                "optional": false,
                "typeAnnotation": null,
                "start": 86,
                "end": 87
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
                  "start": 90,
                  "end": 93
                },
                "expression": false,
                "start": 87,
                "end": 93
              },
              "method": true,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 86,
              "end": 93
            }
          ],
          "start": 70,
          "end": 95
        },
        "start": 46,
        "end": 95
      },
      "directive": null,
      "start": 46,
      "end": 95
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
            "start": 128,
            "end": 133
          },
          "init": null,
          "definite": false,
          "start": 128,
          "end": 133
        }
      ],
      "declare": false,
      "start": 124,
      "end": 133
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
          "start": 134,
          "end": 139
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 140,
          "end": 141
        },
        "optional": false,
        "computed": false,
        "start": 134,
        "end": 141
      },
      "directive": null,
      "start": 134,
      "end": 141
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
            "start": 142,
            "end": 147
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null,
            "start": 148,
            "end": 149
          },
          "optional": false,
          "computed": false,
          "start": 142,
          "end": 149
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 142,
        "end": 151
      },
      "directive": null,
      "start": 142,
      "end": 151
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
            "name": "inno",
            "optional": false,
            "typeAnnotation": null,
            "start": 156,
            "end": 160
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Outer",
                "optional": false,
                "typeAnnotation": null,
                "start": 167,
                "end": 172
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "Inner",
                "optional": false,
                "typeAnnotation": null,
                "start": 173,
                "end": 178
              },
              "optional": false,
              "computed": false,
              "start": 167,
              "end": 178
            },
            "typeArguments": null,
            "arguments": [],
            "start": 163,
            "end": 180
          },
          "definite": false,
          "start": 156,
          "end": 180
        }
      ],
      "declare": false,
      "start": 152,
      "end": 180
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "inno",
          "optional": false,
          "typeAnnotation": null,
          "start": 181,
          "end": 185
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 186,
          "end": 187
        },
        "optional": false,
        "computed": false,
        "start": 181,
        "end": 187
      },
      "directive": null,
      "start": 181,
      "end": 187
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
            "name": "inno",
            "optional": false,
            "typeAnnotation": null,
            "start": 188,
            "end": 192
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null,
            "start": 193,
            "end": 194
          },
          "optional": false,
          "computed": false,
          "start": 188,
          "end": 194
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 188,
        "end": 196
      },
      "directive": null,
      "start": 188,
      "end": 196
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 196
}
```
