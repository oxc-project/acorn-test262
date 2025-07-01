__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 7,
                    "end": 13
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 16,
                    "end": 25
                  }
                ],
                "start": 7,
                "end": 25
              },
              "start": 5,
              "end": 25
            },
            "start": 4,
            "end": 25
          },
          "init": null,
          "definite": false,
          "start": 4,
          "end": 25
        }
      ],
      "declare": false,
      "start": 0,
      "end": 26
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 35,
                    "end": 41
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 44,
                    "end": 53
                  }
                ],
                "start": 35,
                "end": 53
              },
              "start": 33,
              "end": 53
            },
            "start": 32,
            "end": 53
          },
          "init": null,
          "definite": false,
          "start": 32,
          "end": 53
        }
      ],
      "declare": false,
      "start": 28,
      "end": 54
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": null,
          "start": 55,
          "end": 56
        },
        "operator": "??",
        "right": {
          "type": "AssignmentExpression",
          "operator": "=",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null,
            "start": 61,
            "end": 62
          },
          "right": {
            "type": "LogicalExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 65,
              "end": 66
            },
            "operator": "??",
            "right": {
              "type": "Literal",
              "value": "x",
              "raw": "\"x\"",
              "start": 70,
              "end": 73
            },
            "start": 65,
            "end": 73
          },
          "start": 61,
          "end": 73
        },
        "start": 55,
        "end": 74
      },
      "directive": null,
      "start": 55,
      "end": 74
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": null,
          "start": 75,
          "end": 76
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "length",
          "optional": false,
          "typeAnnotation": null,
          "start": 77,
          "end": 83
        },
        "optional": false,
        "computed": false,
        "start": 75,
        "end": 83
      },
      "directive": null,
      "start": 75,
      "end": 84
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "e",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 93,
                    "end": 99
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 102,
                    "end": 111
                  }
                ],
                "start": 93,
                "end": 111
              },
              "start": 91,
              "end": 111
            },
            "start": 90,
            "end": 111
          },
          "init": null,
          "definite": false,
          "start": 90,
          "end": 111
        }
      ],
      "declare": false,
      "start": 86,
      "end": 112
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "??=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "e",
          "optional": false,
          "typeAnnotation": null,
          "start": 113,
          "end": 114
        },
        "right": {
          "type": "LogicalExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 119,
            "end": 120
          },
          "operator": "??",
          "right": {
            "type": "Literal",
            "value": "x",
            "raw": "\"x\"",
            "start": 124,
            "end": 127
          },
          "start": 119,
          "end": 127
        },
        "start": 113,
        "end": 127
      },
      "directive": null,
      "start": 113,
      "end": 127
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "e",
          "optional": false,
          "typeAnnotation": null,
          "start": 128,
          "end": 129
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "length",
          "optional": false,
          "typeAnnotation": null,
          "start": 130,
          "end": 136
        },
        "optional": false,
        "computed": false,
        "start": 128,
        "end": 136
      },
      "directive": null,
      "start": 128,
      "end": 136
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 136
}
```
