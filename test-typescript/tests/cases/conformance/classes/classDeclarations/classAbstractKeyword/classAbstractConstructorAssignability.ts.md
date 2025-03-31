__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 158,
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
      "start": 12,
      "end": 41,
      "id": {
        "type": "Identifier",
        "start": 27,
        "end": 28,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 37,
        "end": 38,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 39,
        "end": 41,
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
      "type": "ClassDeclaration",
      "start": 43,
      "end": 63,
      "id": {
        "type": "Identifier",
        "start": 49,
        "end": 50,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 59,
        "end": 60,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 61,
        "end": 63,
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
      "type": "VariableDeclaration",
      "start": 65,
      "end": 87,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 69,
          "end": 86,
          "id": {
            "type": "Identifier",
            "start": 69,
            "end": 82,
            "name": "AA",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 72,
              "end": 82,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 74,
                "end": 82,
                "exprName": {
                  "type": "Identifier",
                  "start": 81,
                  "end": 82,
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
          },
          "init": {
            "type": "Identifier",
            "start": 85,
            "end": 86,
            "name": "B",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 88,
      "end": 110,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 92,
          "end": 109,
          "id": {
            "type": "Identifier",
            "start": 92,
            "end": 105,
            "name": "BB",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 95,
              "end": 105,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 97,
                "end": 105,
                "exprName": {
                  "type": "Identifier",
                  "start": 104,
                  "end": 105,
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
          },
          "init": {
            "type": "Identifier",
            "start": 108,
            "end": 109,
            "name": "A",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 111,
      "end": 133,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 115,
          "end": 132,
          "id": {
            "type": "Identifier",
            "start": 115,
            "end": 128,
            "name": "CC",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 118,
              "end": 128,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 120,
                "end": 128,
                "exprName": {
                  "type": "Identifier",
                  "start": 127,
                  "end": 128,
                  "name": "C",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 131,
            "end": 132,
            "name": "B",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 135,
      "end": 142,
      "expression": {
        "type": "NewExpression",
        "start": 135,
        "end": 141,
        "callee": {
          "type": "Identifier",
          "start": 139,
          "end": 141,
          "name": "AA",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [],
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 143,
      "end": 150,
      "expression": {
        "type": "NewExpression",
        "start": 143,
        "end": 149,
        "callee": {
          "type": "Identifier",
          "start": 147,
          "end": 149,
          "name": "BB",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [],
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 151,
      "end": 158,
      "expression": {
        "type": "NewExpression",
        "start": 151,
        "end": 157,
        "callee": {
          "type": "Identifier",
          "start": 155,
          "end": 157,
          "name": "CC",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [],
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
