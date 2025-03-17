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
      "id": {
        "type": "Identifier",
        "start": 66,
        "end": 67,
        "name": "a",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 75,
        "end": 77,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 69,
        "end": 74,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 71,
          "end": 74
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 79,
      "end": 129,
      "id": {
        "type": "Identifier",
        "start": 88,
        "end": 89,
        "name": "b",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 90,
          "end": 113,
          "left": {
            "type": "ObjectPattern",
            "start": 90,
            "end": 107,
            "properties": [
              {
                "type": "Property",
                "start": 92,
                "end": 99,
                "method": false,
                "shorthand": true,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 92,
                  "end": 93,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "AssignmentPattern",
                  "start": 92,
                  "end": 99,
                  "left": {
                    "type": "Identifier",
                    "start": 92,
                    "end": 93,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "CallExpression",
                    "start": 96,
                    "end": 99,
                    "callee": {
                      "type": "Identifier",
                      "start": 96,
                      "end": 97,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [],
                    "optional": false,
                    "typeArguments": null
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "RestElement",
                "start": 101,
                "end": 105,
                "argument": {
                  "type": "Identifier",
                  "start": 104,
                  "end": 105,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": null,
                "value": null
              }
            ],
            "decorators": [],
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "CallExpression",
            "start": 110,
            "end": 113,
            "callee": {
              "type": "Identifier",
              "start": 110,
              "end": 111,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "optional": false,
            "typeArguments": null
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        }
      ],
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
                "id": {
                  "type": "Identifier",
                  "start": 125,
                  "end": 126,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
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
          "id": {
            "type": "Identifier",
            "start": 137,
            "end": 138,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 141,
            "end": 143,
            "value": "",
            "raw": "\"\""
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 146,
      "end": 197,
      "id": {
        "type": "Identifier",
        "start": 155,
        "end": 156,
        "name": "c",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 157,
          "end": 174,
          "left": {
            "type": "ObjectPattern",
            "start": 157,
            "end": 168,
            "properties": [
              {
                "type": "Property",
                "start": 159,
                "end": 160,
                "method": false,
                "shorthand": true,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 159,
                  "end": 160,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 159,
                  "end": 160,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "RestElement",
                "start": 162,
                "end": 166,
                "argument": {
                  "type": "Identifier",
                  "start": 165,
                  "end": 166,
                  "name": "c",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": null,
                "value": null
              }
            ],
            "decorators": [],
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "CallExpression",
            "start": 171,
            "end": 174,
            "callee": {
              "type": "Identifier",
              "start": 171,
              "end": 172,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "optional": false,
            "typeArguments": null
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        },
        {
          "type": "AssignmentPattern",
          "start": 176,
          "end": 181,
          "left": {
            "type": "Identifier",
            "start": 176,
            "end": 177,
            "name": "d",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 180,
            "end": 181,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        }
      ],
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
                "id": {
                  "type": "Identifier",
                  "start": 193,
                  "end": 194,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
