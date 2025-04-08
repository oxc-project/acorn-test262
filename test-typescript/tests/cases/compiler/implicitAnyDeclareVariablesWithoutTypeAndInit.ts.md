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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 31,
          "end": 32,
          "id": {
            "type": "Identifier",
            "start": 31,
            "end": 32,
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
          "id": {
            "type": "Identifier",
            "start": 88,
            "end": 89,
            "name": "y",
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
          "id": {
            "type": "Identifier",
            "start": 147,
            "end": 150,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
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
        "name": "func",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 192,
          "end": 193,
          "name": "k",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      ],
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
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
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
          "name": "func",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 224,
            "end": 225,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
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
          "id": {
            "type": "Identifier",
            "start": 263,
            "end": 266,
            "name": "bar",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 288,
            "end": 297,
            "name": "bar1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 292,
              "end": 297,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 294,
                "end": 297
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 321,
            "end": 330,
            "name": "bar2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 325,
              "end": 330,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 327,
                "end": 330
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": true
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
          "id": {
            "type": "Identifier",
            "start": 337,
            "end": 344,
            "name": "x1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 339,
              "end": 344,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 341,
                "end": 344
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 350,
            "end": 352,
            "name": "y1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 355,
            "end": 361,
            "callee": {
              "type": "Identifier",
              "start": 359,
              "end": 361,
              "name": "x1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
