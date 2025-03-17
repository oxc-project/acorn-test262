__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 50,
  "end": 248,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 50,
      "end": 69,
      "id": {
        "type": "Identifier",
        "start": 65,
        "end": 66,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 67,
        "end": 69,
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
      "start": 71,
      "end": 91,
      "id": {
        "type": "Identifier",
        "start": 77,
        "end": 78,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 87,
        "end": 88,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 89,
        "end": 91,
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
      "start": 93,
      "end": 122,
      "id": {
        "type": "Identifier",
        "start": 108,
        "end": 109,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 118,
        "end": 119,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 120,
        "end": 122,
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
      "type": "ExpressionStatement",
      "start": 124,
      "end": 130,
      "expression": {
        "type": "NewExpression",
        "start": 124,
        "end": 129,
        "callee": {
          "type": "Identifier",
          "start": 128,
          "end": 129,
          "name": "A",
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
      "start": 131,
      "end": 140,
      "expression": {
        "type": "NewExpression",
        "start": 131,
        "end": 139,
        "callee": {
          "type": "Identifier",
          "start": 135,
          "end": 136,
          "name": "A",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 137,
            "end": 138,
            "value": 1,
            "raw": "1"
          }
        ],
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 166,
      "end": 172,
      "expression": {
        "type": "NewExpression",
        "start": 166,
        "end": 171,
        "callee": {
          "type": "Identifier",
          "start": 170,
          "end": 171,
          "name": "B",
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
      "start": 173,
      "end": 179,
      "expression": {
        "type": "NewExpression",
        "start": 173,
        "end": 178,
        "callee": {
          "type": "Identifier",
          "start": 177,
          "end": 178,
          "name": "C",
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
      "type": "VariableDeclaration",
      "start": 181,
      "end": 191,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 185,
          "end": 190,
          "id": {
            "type": "Identifier",
            "start": 185,
            "end": 190,
            "name": "a",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 187,
              "end": 190,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 189,
                "end": 190,
                "typeName": {
                  "type": "Identifier",
                  "start": 189,
                  "end": 190,
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
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 192,
      "end": 202,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 196,
          "end": 201,
          "id": {
            "type": "Identifier",
            "start": 196,
            "end": 201,
            "name": "b",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 198,
              "end": 201,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 200,
                "end": 201,
                "typeName": {
                  "type": "Identifier",
                  "start": 200,
                  "end": 201,
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
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 203,
      "end": 213,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 207,
          "end": 212,
          "id": {
            "type": "Identifier",
            "start": 207,
            "end": 212,
            "name": "c",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 209,
              "end": 212,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 211,
                "end": 212,
                "typeName": {
                  "type": "Identifier",
                  "start": 211,
                  "end": 212,
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
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 215,
      "end": 225,
      "expression": {
        "type": "AssignmentExpression",
        "start": 215,
        "end": 224,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 215,
          "end": 216,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "NewExpression",
          "start": 219,
          "end": 224,
          "callee": {
            "type": "Identifier",
            "start": 223,
            "end": 224,
            "name": "B",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "arguments": [],
          "typeArguments": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 226,
      "end": 236,
      "expression": {
        "type": "AssignmentExpression",
        "start": 226,
        "end": 235,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 226,
          "end": 227,
          "name": "b",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "NewExpression",
          "start": 230,
          "end": 235,
          "callee": {
            "type": "Identifier",
            "start": 234,
            "end": 235,
            "name": "B",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "arguments": [],
          "typeArguments": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 237,
      "end": 247,
      "expression": {
        "type": "AssignmentExpression",
        "start": 237,
        "end": 246,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 237,
          "end": 238,
          "name": "c",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "NewExpression",
          "start": 241,
          "end": 246,
          "callee": {
            "type": "Identifier",
            "start": 245,
            "end": 246,
            "name": "B",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "arguments": [],
          "typeArguments": null
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
