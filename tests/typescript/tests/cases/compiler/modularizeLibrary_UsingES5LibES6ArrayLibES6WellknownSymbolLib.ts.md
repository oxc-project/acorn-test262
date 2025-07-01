__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 10
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 14,
              "end": 20
            },
            "start": 12,
            "end": 20
          },
          "start": 11,
          "end": 20
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 25,
              "end": 31
            },
            "start": 23,
            "end": 31
          },
          "start": 22,
          "end": 31
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "z",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 36,
              "end": 42
            },
            "start": 34,
            "end": 42
          },
          "start": 33,
          "end": 42
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Array",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 57,
                  "end": 62
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "from",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 63,
                  "end": 67
                },
                "optional": false,
                "computed": false,
                "start": 57,
                "end": 67
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arguments",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 68,
                  "end": 77
                }
              ],
              "optional": false,
              "start": 57,
              "end": 78
            },
            "start": 50,
            "end": 79
          }
        ],
        "start": 44,
        "end": 81
      },
      "expression": false,
      "start": 0,
      "end": 81
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null,
          "start": 83,
          "end": 84
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 85,
            "end": 86
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 88,
            "end": 89
          },
          {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 91,
            "end": 92
          }
        ],
        "optional": false,
        "start": 83,
        "end": 93
      },
      "directive": null,
      "start": 83,
      "end": 94
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
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 113,
            "end": 114
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "c",
                "raw": "'c'",
                "start": 118,
                "end": 121
              },
              {
                "type": "Literal",
                "value": "d",
                "raw": "'d'",
                "start": 123,
                "end": 126
              }
            ],
            "start": 117,
            "end": 127
          },
          "definite": false,
          "start": 113,
          "end": 127
        }
      ],
      "declare": false,
      "start": 109,
      "end": 128
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
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 129,
            "end": 130
          },
          "property": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null,
              "start": 131,
              "end": 137
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "isConcatSpreadable",
              "optional": false,
              "typeAnnotation": null,
              "start": 138,
              "end": 156
            },
            "optional": false,
            "computed": false,
            "start": 131,
            "end": 156
          },
          "optional": false,
          "computed": true,
          "start": 129,
          "end": 157
        },
        "right": {
          "type": "Literal",
          "value": false,
          "raw": "false",
          "start": 160,
          "end": 165
        },
        "start": 129,
        "end": 165
      },
      "directive": null,
      "start": 129,
      "end": 166
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 166
}
```
