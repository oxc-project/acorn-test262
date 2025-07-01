__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
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
            "start": 31,
            "end": 32
          },
          "init": null,
          "definite": false,
          "start": 31,
          "end": 32
        }
      ],
      "declare": false,
      "start": 27,
      "end": 33
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 88,
            "end": 89
          },
          "init": null,
          "definite": false,
          "start": 88,
          "end": 89
        }
      ],
      "declare": false,
      "start": 84,
      "end": 90
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 147,
            "end": 150
          },
          "init": null,
          "definite": false,
          "start": 147,
          "end": 150
        }
      ],
      "declare": true,
      "start": 135,
      "end": 151
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "func",
        "optional": false,
        "typeAnnotation": null,
        "start": 187,
        "end": 191
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "k",
          "optional": false,
          "typeAnnotation": null,
          "start": 192,
          "end": 193
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 197,
              "end": 198
            },
            "directive": null,
            "start": 197,
            "end": 198
          }
        ],
        "start": 195,
        "end": 200
      },
      "expression": false,
      "start": 178,
      "end": 200
    },
    {
      "type": "EmptyStatement",
      "start": 200,
      "end": 201
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "func",
          "optional": false,
          "typeAnnotation": null,
          "start": 219,
          "end": 223
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 224,
            "end": 225
          }
        ],
        "optional": false,
        "start": 219,
        "end": 226
      },
      "directive": null,
      "start": 219,
      "end": 227
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null,
            "start": 263,
            "end": 266
          },
          "init": {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 269,
            "end": 270
          },
          "definite": false,
          "start": 263,
          "end": 270
        }
      ],
      "declare": false,
      "start": 259,
      "end": 271
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "bar1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 294,
                "end": 297
              },
              "start": 292,
              "end": 297
            },
            "start": 288,
            "end": 297
          },
          "init": null,
          "definite": false,
          "start": 288,
          "end": 297
        }
      ],
      "declare": false,
      "start": 284,
      "end": 298
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "bar2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 327,
                "end": 330
              },
              "start": 325,
              "end": 330
            },
            "start": 321,
            "end": 330
          },
          "init": null,
          "definite": false,
          "start": 321,
          "end": 330
        }
      ],
      "declare": true,
      "start": 309,
      "end": 331
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 341,
                "end": 344
              },
              "start": 339,
              "end": 344
            },
            "start": 337,
            "end": 344
          },
          "init": null,
          "definite": false,
          "start": 337,
          "end": 344
        }
      ],
      "declare": false,
      "start": 333,
      "end": 345
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "y1",
            "optional": false,
            "typeAnnotation": null,
            "start": 350,
            "end": 352
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "x1",
              "optional": false,
              "typeAnnotation": null,
              "start": 359,
              "end": 361
            },
            "typeArguments": null,
            "arguments": [],
            "start": 355,
            "end": 361
          },
          "definite": false,
          "start": 350,
          "end": 361
        }
      ],
      "declare": false,
      "start": 346,
      "end": 362
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 27,
  "end": 362
}
```
