__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 190,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 10,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 10,
        "body": []
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 11,
      "end": 40,
      "id": {
        "type": "Identifier",
        "start": 26,
        "end": 27,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 36,
        "end": 37,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 38,
        "end": 40,
        "body": []
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": true,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 42,
      "end": 96,
      "id": {
        "type": "Identifier",
        "start": 51,
        "end": 55,
        "name": "NewA",
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
          "start": 56,
          "end": 73,
          "name": "Factory",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 63,
            "end": 73,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 65,
              "end": 73,
              "exprName": {
                "type": "Identifier",
                "start": 72,
                "end": 73,
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 75,
        "end": 96,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 81,
            "end": 94,
            "argument": {
              "type": "NewExpression",
              "start": 88,
              "end": 93,
              "callee": {
                "type": "Identifier",
                "start": 92,
                "end": 93,
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 98,
      "end": 152,
      "id": {
        "type": "Identifier",
        "start": 107,
        "end": 111,
        "name": "NewB",
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
          "start": 112,
          "end": 129,
          "name": "Factory",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 119,
            "end": 129,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 121,
              "end": 129,
              "exprName": {
                "type": "Identifier",
                "start": 128,
                "end": 129,
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 131,
        "end": 152,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 137,
            "end": 150,
            "argument": {
              "type": "NewExpression",
              "start": 144,
              "end": 149,
              "callee": {
                "type": "Identifier",
                "start": 148,
                "end": 149,
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ExpressionStatement",
      "start": 154,
      "end": 162,
      "expression": {
        "type": "CallExpression",
        "start": 154,
        "end": 161,
        "callee": {
          "type": "Identifier",
          "start": 154,
          "end": 158,
          "name": "NewA",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 159,
            "end": 160,
            "name": "A",
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
      "type": "ExpressionStatement",
      "start": 163,
      "end": 171,
      "expression": {
        "type": "CallExpression",
        "start": 163,
        "end": 170,
        "callee": {
          "type": "Identifier",
          "start": 163,
          "end": 167,
          "name": "NewA",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 168,
            "end": 169,
            "name": "B",
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
      "type": "ExpressionStatement",
      "start": 173,
      "end": 181,
      "expression": {
        "type": "CallExpression",
        "start": 173,
        "end": 180,
        "callee": {
          "type": "Identifier",
          "start": 173,
          "end": 177,
          "name": "NewB",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 178,
            "end": 179,
            "name": "A",
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
      "type": "ExpressionStatement",
      "start": 182,
      "end": 190,
      "expression": {
        "type": "CallExpression",
        "start": 182,
        "end": 189,
        "callee": {
          "type": "Identifier",
          "start": 182,
          "end": 186,
          "name": "NewB",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 187,
            "end": 188,
            "name": "B",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
