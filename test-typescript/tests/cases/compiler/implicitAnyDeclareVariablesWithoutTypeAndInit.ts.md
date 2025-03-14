implicitAnyDeclareVariablesWithoutTypeAndInit.ts
```json
{
  "type": "Program",
  "start": 27,
  "end": 362,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 27,
      "end": 33,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 31,
          "end": 32,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 31,
            "end": 32,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 84,
      "end": 90,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 88,
          "end": 89,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 88,
            "end": 89,
            "decorators": [],
            "name": "y",
            "optional": false
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 135,
      "end": 151,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 147,
          "end": 150,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 147,
            "end": 150,
            "decorators": [],
            "name": "foo",
            "optional": false
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "FunctionDeclaration",
      "start": 178,
      "end": 200,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 195,
        "end": 200,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 197,
            "end": 198,
            "expression": {
              "type": "Identifier",
              "start": 197,
              "end": 198,
              "decorators": [],
              "name": "y",
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 187,
        "end": 191,
        "decorators": [],
        "name": "func",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 192,
          "end": 193,
          "decorators": [],
          "name": "k",
          "optional": false
        }
      ]
    },
    {
      "type": "EmptyStatement",
      "start": 200,
      "end": 201
    },
    {
      "type": "ExpressionStatement",
      "start": 219,
      "end": 227,
      "expression": {
        "type": "CallExpression",
        "start": 219,
        "end": 226,
        "arguments": [
          {
            "type": "Identifier",
            "start": 224,
            "end": 225,
            "decorators": [],
            "name": "x",
            "optional": false
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 219,
          "end": 223,
          "decorators": [],
          "name": "func",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 259,
      "end": 271,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 263,
          "end": 270,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 263,
            "end": 266,
            "decorators": [],
            "name": "bar",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 269,
            "end": 270,
            "raw": "3",
            "value": 3
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 284,
      "end": 298,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 288,
          "end": 297,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 288,
            "end": 297,
            "decorators": [],
            "name": "bar1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 292,
              "end": 297,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 294,
                "end": 297
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 309,
      "end": 331,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 321,
          "end": 330,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 321,
            "end": 330,
            "decorators": [],
            "name": "bar2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 325,
              "end": 330,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 327,
                "end": 330
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 333,
      "end": 345,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 337,
          "end": 344,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 337,
            "end": 344,
            "decorators": [],
            "name": "x1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 339,
              "end": 344,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 341,
                "end": 344
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 346,
      "end": 362,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 350,
          "end": 361,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 350,
            "end": 352,
            "decorators": [],
            "name": "y1",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 355,
            "end": 361,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 359,
              "end": 361,
              "decorators": [],
              "name": "x1",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script"
}
```
