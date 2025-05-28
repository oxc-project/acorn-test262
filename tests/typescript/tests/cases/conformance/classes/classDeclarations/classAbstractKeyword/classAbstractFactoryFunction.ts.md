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
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 10,
        "body": []
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 11,
      "end": 40,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 26,
        "end": 27,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 36,
        "end": 37,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 38,
        "end": 40,
        "body": []
      },
      "abstract": true,
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 42,
      "end": 96,
      "id": {
        "type": "Identifier",
        "start": 51,
        "end": 55,
        "decorators": [],
        "name": "NewA",
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
          "start": 56,
          "end": 73,
          "decorators": [],
          "name": "Factory",
          "optional": false,
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
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
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
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": []
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 98,
      "end": 152,
      "id": {
        "type": "Identifier",
        "start": 107,
        "end": 111,
        "decorators": [],
        "name": "NewB",
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
          "start": 112,
          "end": 129,
          "decorators": [],
          "name": "Factory",
          "optional": false,
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
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
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
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": []
            }
          }
        ]
      },
      "expression": false
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
          "decorators": [],
          "name": "NewA",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "start": 159,
            "end": 160,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "optional": false
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
          "decorators": [],
          "name": "NewA",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "start": 168,
            "end": 169,
            "decorators": [],
            "name": "B",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "optional": false
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
          "decorators": [],
          "name": "NewB",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "start": 178,
            "end": 179,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "optional": false
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
          "decorators": [],
          "name": "NewB",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "start": 187,
            "end": 188,
            "decorators": [],
            "name": "B",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
