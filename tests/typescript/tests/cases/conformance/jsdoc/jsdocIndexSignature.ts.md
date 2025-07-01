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
            "name": "o1",
            "optional": false,
            "typeAnnotation": null,
            "start": 43,
            "end": 45
          },
          "init": null,
          "definite": false,
          "start": 43,
          "end": 45
        }
      ],
      "declare": false,
      "start": 39,
      "end": 46
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
            "name": "o2",
            "optional": false,
            "typeAnnotation": null,
            "start": 91,
            "end": 93
          },
          "init": null,
          "definite": false,
          "start": 91,
          "end": 93
        }
      ],
      "declare": false,
      "start": 87,
      "end": 94
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
            "name": "o3",
            "optional": false,
            "typeAnnotation": null,
            "start": 139,
            "end": 141
          },
          "init": null,
          "definite": false,
          "start": 139,
          "end": 141
        }
      ],
      "declare": false,
      "start": 135,
      "end": 142
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 195,
        "end": 196
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "o",
          "optional": false,
          "typeAnnotation": null,
          "start": 197,
          "end": 198
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
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
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 206,
                  "end": 207
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 208,
                  "end": 211
                },
                "optional": false,
                "computed": false,
                "start": 206,
                "end": 211
              },
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 214,
                "end": 215
              },
              "start": 206,
              "end": 215
            },
            "directive": null,
            "start": 206,
            "end": 216
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
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 230,
                  "end": 231
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 232,
                  "end": 235
                },
                "optional": false,
                "computed": false,
                "start": 230,
                "end": 235
              },
              "right": {
                "type": "Literal",
                "value": false,
                "raw": "false",
                "start": 238,
                "end": 243
              },
              "start": 230,
              "end": 243
            },
            "directive": null,
            "start": 230,
            "end": 244
          }
        ],
        "start": 200,
        "end": 252
      },
      "expression": false,
      "start": 186,
      "end": 252
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 39,
  "end": 252
}
```
