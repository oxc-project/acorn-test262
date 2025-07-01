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
        "name": "a",
        "optional": false,
        "typeAnnotation": null,
        "start": 66,
        "end": 67
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 71,
          "end": 74
        },
        "start": 69,
        "end": 74
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 75,
        "end": 77
      },
      "expression": false,
      "start": 57,
      "end": 77
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "b",
        "optional": false,
        "typeAnnotation": null,
        "start": 88,
        "end": 89
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 92,
                  "end": 93
                },
                "value": {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 92,
                    "end": 93
                  },
                  "right": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 96,
                      "end": 97
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 96,
                    "end": 99
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 92,
                  "end": 99
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 92,
                "end": 99
              },
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 104,
                  "end": 105
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null,
                "start": 101,
                "end": 105
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 90,
            "end": 107
          },
          "right": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 110,
              "end": 111
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 110,
            "end": 113
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 90,
          "end": 113
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 125,
                  "end": 126
                },
                "init": null,
                "definite": false,
                "start": 125,
                "end": 126
              }
            ],
            "declare": false,
            "start": 121,
            "end": 127
          }
        ],
        "start": 115,
        "end": 129
      },
      "expression": false,
      "start": 79,
      "end": 129
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 137,
            "end": 138
          },
          "init": {
            "type": "Literal",
            "value": "",
            "raw": "\"\"",
            "start": 141,
            "end": 143
          },
          "definite": false,
          "start": 137,
          "end": 143
        }
      ],
      "declare": false,
      "start": 131,
      "end": 144
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "c",
        "optional": false,
        "typeAnnotation": null,
        "start": 155,
        "end": 156
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 159,
                  "end": 160
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 159,
                  "end": 160
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 159,
                "end": 160
              },
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 165,
                  "end": 166
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null,
                "start": 162,
                "end": 166
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 157,
            "end": 168
          },
          "right": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 171,
              "end": 172
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 171,
            "end": 174
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 157,
          "end": 174
        },
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null,
            "start": 176,
            "end": 177
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 180,
            "end": 181
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 176,
          "end": 181
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 193,
                  "end": 194
                },
                "init": null,
                "definite": false,
                "start": 193,
                "end": 194
              }
            ],
            "declare": false,
            "start": 189,
            "end": 195
          }
        ],
        "start": 183,
        "end": 197
      },
      "expression": false,
      "start": 146,
      "end": 197
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 57,
  "end": 197
}
```
