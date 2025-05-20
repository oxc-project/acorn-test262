__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 57,
  "end": 197,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 57,
      "end": 77,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 75,
        "end": 77,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 66,
        "end": 67,
        "decorators": [],
        "name": "a",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 69,
        "end": 74,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 71,
          "end": 74
        }
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 79,
      "end": 129,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 115,
        "end": 129,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 121,
            "end": 127,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 125,
                "end": 126,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 125,
                  "end": 126,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "var"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 88,
        "end": 89,
        "decorators": [],
        "name": "b",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 90,
          "end": 113,
          "decorators": [],
          "left": {
            "type": "ObjectPattern",
            "start": 90,
            "end": 107,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 92,
                "end": 99,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 92,
                  "end": 93,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "AssignmentPattern",
                  "start": 92,
                  "end": 99,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 92,
                    "end": 93,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "right": {
                    "type": "CallExpression",
                    "start": 96,
                    "end": 99,
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "start": 96,
                      "end": 97,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "typeArguments": null
                  },
                  "typeAnnotation": null
                }
              },
              {
                "type": "RestElement",
                "start": 101,
                "end": 105,
                "argument": {
                  "type": "Identifier",
                  "start": 104,
                  "end": 105,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": null,
                "value": null
              }
            ],
            "typeAnnotation": null
          },
          "optional": false,
          "right": {
            "type": "CallExpression",
            "start": 110,
            "end": 113,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 110,
              "end": 111,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          },
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 131,
      "end": 144,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 137,
          "end": 143,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 137,
            "end": 138,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 141,
            "end": 143,
            "raw": "\"\"",
            "value": ""
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "FunctionDeclaration",
      "start": 146,
      "end": 197,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 183,
        "end": 197,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 189,
            "end": 195,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 193,
                "end": 194,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 193,
                  "end": 194,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "var"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 155,
        "end": 156,
        "decorators": [],
        "name": "c",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 157,
          "end": 174,
          "decorators": [],
          "left": {
            "type": "ObjectPattern",
            "start": 157,
            "end": 168,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 159,
                "end": 160,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 159,
                  "end": 160,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "start": 159,
                  "end": 160,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "RestElement",
                "start": 162,
                "end": 166,
                "argument": {
                  "type": "Identifier",
                  "start": 165,
                  "end": 166,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": null,
                "value": null
              }
            ],
            "typeAnnotation": null
          },
          "optional": false,
          "right": {
            "type": "CallExpression",
            "start": 171,
            "end": 174,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 171,
              "end": 172,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          },
          "typeAnnotation": null
        },
        {
          "type": "AssignmentPattern",
          "start": 176,
          "end": 181,
          "decorators": [],
          "left": {
            "type": "Identifier",
            "start": 176,
            "end": 177,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "right": {
            "type": "Identifier",
            "start": 180,
            "end": 181,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
