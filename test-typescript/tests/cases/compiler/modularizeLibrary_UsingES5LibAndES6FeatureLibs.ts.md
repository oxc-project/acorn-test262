__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 102,
  "end": 267,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 102,
      "end": 119,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 106,
          "end": 118,
          "id": {
            "type": "Identifier",
            "start": 106,
            "end": 107,
            "name": "s",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 110,
            "end": 118,
            "callee": {
              "type": "Identifier",
              "start": 110,
              "end": 116,
              "name": "Symbol",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 120,
      "end": 131,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 124,
          "end": 130,
          "id": {
            "type": "Identifier",
            "start": 124,
            "end": 125,
            "name": "t",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 128,
            "end": 130,
            "properties": []
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 132,
      "end": 157,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 136,
          "end": 156,
          "id": {
            "type": "Identifier",
            "start": 136,
            "end": 137,
            "name": "p",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 140,
            "end": 156,
            "callee": {
              "type": "Identifier",
              "start": 144,
              "end": 149,
              "name": "Proxy",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 150,
                "end": 151,
                "name": "t",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "ObjectExpression",
                "start": 153,
                "end": 155,
                "properties": []
              }
            ],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 159,
      "end": 179,
      "expression": {
        "type": "CallExpression",
        "start": 159,
        "end": 178,
        "callee": {
          "type": "MemberExpression",
          "start": 159,
          "end": 174,
          "object": {
            "type": "Identifier",
            "start": 159,
            "end": 166,
            "name": "Reflect",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 167,
            "end": 174,
            "name": "ownKeys",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 175,
            "end": 177,
            "properties": []
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 181,
      "end": 266,
      "id": {
        "type": "Identifier",
        "start": 191,
        "end": 196,
        "name": "idGen",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": true,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 199,
        "end": 266,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 205,
            "end": 216,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 209,
                "end": 215,
                "id": {
                  "type": "Identifier",
                  "start": 209,
                  "end": 210,
                  "name": "i",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 213,
                  "end": 215,
                  "value": 10,
                  "raw": "10"
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "WhileStatement",
            "start": 221,
            "end": 264,
            "test": {
              "type": "BinaryExpression",
              "start": 228,
              "end": 234,
              "left": {
                "type": "Identifier",
                "start": 228,
                "end": 229,
                "name": "i",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "<",
              "right": {
                "type": "Literal",
                "start": 232,
                "end": 234,
                "value": 20,
                "raw": "20"
              }
            },
            "body": {
              "type": "BlockStatement",
              "start": 236,
              "end": 264,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 246,
                  "end": 258,
                  "expression": {
                    "type": "YieldExpression",
                    "start": 246,
                    "end": 257,
                    "delegate": false,
                    "argument": {
                      "type": "BinaryExpression",
                      "start": 252,
                      "end": 257,
                      "left": {
                        "type": "Identifier",
                        "start": 252,
                        "end": 253,
                        "name": "i",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "operator": "+",
                      "right": {
                        "type": "Literal",
                        "start": 256,
                        "end": 257,
                        "value": 2,
                        "raw": "2"
                      }
                    }
                  },
                  "directive": null
                }
              ]
            }
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
