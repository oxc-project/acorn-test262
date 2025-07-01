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
            "type": "FunctionExpression",
            "id": null,
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "element",
                "optional": false,
                "typeAnnotation": null,
                "start": 21,
                "end": 28
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "config",
                "optional": false,
                "typeAnnotation": null,
                "start": 30,
                "end": 36
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 38,
              "end": 40
            },
            "expression": false,
            "start": 12,
            "end": 40
          },
          "definite": false,
          "start": 4,
          "end": 40
        }
      ],
      "declare": false,
      "start": 0,
      "end": 41
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 41
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
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
            "start": 20,
            "end": 25
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "Pos",
            "optional": false,
            "typeAnnotation": null,
            "start": 26,
            "end": 29
          },
          "optional": false,
          "computed": false,
          "start": 20,
          "end": 29
        },
        "right": {
          "type": "FunctionExpression",
          "id": null,
          "generator": false,
          "async": false,
          "declare": false,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "line",
              "optional": false,
              "typeAnnotation": null,
              "start": 42,
              "end": 46
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "ch",
              "optional": false,
              "typeAnnotation": null,
              "start": 48,
              "end": 50
            }
          ],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "body": [],
            "start": 52,
            "end": 54
          },
          "expression": false,
          "start": 32,
          "end": 54
        },
        "start": 20,
        "end": 54
      },
      "directive": null,
      "start": 20,
      "end": 55
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "Outer",
              "optional": false,
              "typeAnnotation": null,
              "start": 78,
              "end": 83
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "Pos",
              "optional": false,
              "typeAnnotation": null,
              "start": 84,
              "end": 87
            },
            "optional": false,
            "computed": false,
            "start": 78,
            "end": 87
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "prototype",
            "optional": false,
            "typeAnnotation": null,
            "start": 88,
            "end": 97
          },
          "optional": false,
          "computed": false,
          "start": 78,
          "end": 97
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "line",
          "optional": false,
          "typeAnnotation": null,
          "start": 98,
          "end": 102
        },
        "optional": false,
        "computed": false,
        "start": 78,
        "end": 102
      },
      "directive": null,
      "start": 78,
      "end": 103
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
            "name": "pos",
            "optional": false,
            "typeAnnotation": null,
            "start": 108,
            "end": 111
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
                "start": 118,
                "end": 123
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "Pos",
                "optional": false,
                "typeAnnotation": null,
                "start": 124,
                "end": 127
              },
              "optional": false,
              "computed": false,
              "start": 118,
              "end": 127
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 128,
                "end": 129
              },
              {
                "type": "Literal",
                "value": "x",
                "raw": "'x'",
                "start": 131,
                "end": 134
              }
            ],
            "start": 114,
            "end": 135
          },
          "definite": false,
          "start": 108,
          "end": 135
        }
      ],
      "declare": false,
      "start": 104,
      "end": 136
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "pos",
          "optional": false,
          "typeAnnotation": null,
          "start": 137,
          "end": 140
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "line",
          "optional": false,
          "typeAnnotation": null,
          "start": 141,
          "end": 145
        },
        "optional": false,
        "computed": false,
        "start": 137,
        "end": 145
      },
      "directive": null,
      "start": 137,
      "end": 146
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 20,
  "end": 147
}
```
