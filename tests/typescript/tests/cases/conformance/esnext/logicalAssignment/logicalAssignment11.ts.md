__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 136,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 26,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 25,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 25,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5,
              "end": 25,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 7,
                "end": 25,
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
                ]
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 28,
      "end": 54,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 32,
          "end": 53,
          "id": {
            "type": "Identifier",
            "start": 32,
            "end": 53,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 33,
              "end": 53,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 35,
                "end": 53,
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
                ]
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 55,
      "end": 74,
      "expression": {
        "type": "LogicalExpression",
        "start": 55,
        "end": 74,
        "left": {
          "type": "Identifier",
          "start": 55,
          "end": 56,
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "??",
        "right": {
          "type": "AssignmentExpression",
          "start": 61,
          "end": 73,
          "operator": "=",
          "left": {
            "type": "Identifier",
            "start": 61,
            "end": 62,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "LogicalExpression",
            "start": 65,
            "end": 73,
            "left": {
              "type": "Identifier",
              "start": 65,
              "end": 66,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "??",
            "right": {
              "type": "Literal",
              "start": 70,
              "end": 73,
              "value": "x",
              "raw": "\"x\""
            }
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 75,
      "end": 84,
      "expression": {
        "type": "MemberExpression",
        "start": 75,
        "end": 83,
        "object": {
          "type": "Identifier",
          "start": 75,
          "end": 76,
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 77,
          "end": 83,
          "decorators": [],
          "name": "length",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 86,
      "end": 112,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 90,
          "end": 111,
          "id": {
            "type": "Identifier",
            "start": 90,
            "end": 111,
            "decorators": [],
            "name": "e",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 91,
              "end": 111,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 93,
                "end": 111,
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
                ]
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 113,
      "end": 127,
      "expression": {
        "type": "AssignmentExpression",
        "start": 113,
        "end": 127,
        "operator": "??=",
        "left": {
          "type": "Identifier",
          "start": 113,
          "end": 114,
          "decorators": [],
          "name": "e",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "LogicalExpression",
          "start": 119,
          "end": 127,
          "left": {
            "type": "Identifier",
            "start": 119,
            "end": 120,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "operator": "??",
          "right": {
            "type": "Literal",
            "start": 124,
            "end": 127,
            "value": "x",
            "raw": "\"x\""
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 128,
      "end": 136,
      "expression": {
        "type": "MemberExpression",
        "start": 128,
        "end": 136,
        "object": {
          "type": "Identifier",
          "start": 128,
          "end": 129,
          "decorators": [],
          "name": "e",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 130,
          "end": 136,
          "decorators": [],
          "name": "length",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
