__ESTREE_TEST__:PASS:
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
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 31,
          "end": 32,
          "id": {
            "type": "Identifier",
            "start": 31,
            "end": 32,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 84,
      "end": 90,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 88,
          "end": 89,
          "id": {
            "type": "Identifier",
            "start": 88,
            "end": 89,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 135,
      "end": 151,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 147,
          "end": 150,
          "id": {
            "type": "Identifier",
            "start": 147,
            "end": 150,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "FunctionDeclaration",
      "start": 178,
      "end": 200,
      "id": {
        "type": "Identifier",
        "start": 187,
        "end": 191,
        "decorators": [],
        "name": "func",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 192,
          "end": 193,
          "decorators": [],
          "name": "k",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
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
              "optional": false,
              "typeAnnotation": null
            },
            "directive": null
          }
        ]
      },
      "expression": false
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
        "callee": {
          "type": "Identifier",
          "start": 219,
          "end": 223,
          "decorators": [],
          "name": "func",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "start": 224,
            "end": 225,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 259,
      "end": 271,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 263,
          "end": 270,
          "id": {
            "type": "Identifier",
            "start": 263,
            "end": 266,
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 269,
            "end": 270,
            "value": 3,
            "raw": "3"
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 284,
      "end": 298,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 288,
          "end": 297,
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
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 309,
      "end": 331,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 321,
          "end": 330,
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
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 333,
      "end": 345,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 337,
          "end": 344,
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
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 346,
      "end": 362,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 350,
          "end": 361,
          "id": {
            "type": "Identifier",
            "start": 350,
            "end": 352,
            "decorators": [],
            "name": "y1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 355,
            "end": 361,
            "callee": {
              "type": "Identifier",
              "start": 359,
              "end": 361,
              "decorators": [],
              "name": "x1",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": []
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
