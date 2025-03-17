__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 1,
  "end": 711,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 1,
      "end": 34,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "name": "T",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 9,
        "end": 34,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 15,
            "end": 32,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 15,
              "end": 16,
              "name": "m",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 16,
              "end": 32,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "RestElement",
                  "start": 17,
                  "end": 22,
                  "argument": {
                    "type": "Identifier",
                    "start": 20,
                    "end": 22,
                    "name": "p3",
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
              "body": {
                "type": "BlockStatement",
                "start": 24,
                "end": 32,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
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
      "start": 36,
      "end": 70,
      "id": {
        "type": "Identifier",
        "start": 42,
        "end": 43,
        "name": "S",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 44,
        "end": 70,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 50,
            "end": 68,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 50,
              "end": 51,
              "name": "m",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 51,
              "end": 68,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 52,
                  "end": 54,
                  "name": "p1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 56,
                  "end": 58,
                  "name": "p2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 60,
                "end": 68,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
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
      "start": 72,
      "end": 81,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 76,
          "end": 80,
          "id": {
            "type": "Identifier",
            "start": 76,
            "end": 80,
            "name": "t",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 77,
              "end": 80,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 79,
                "end": 80,
                "typeName": {
                  "type": "Identifier",
                  "start": 79,
                  "end": 80,
                  "name": "T",
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
      "start": 82,
      "end": 91,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 86,
          "end": 90,
          "id": {
            "type": "Identifier",
            "start": 86,
            "end": 90,
            "name": "s",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 87,
              "end": 90,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 89,
                "end": 90,
                "typeName": {
                  "type": "Identifier",
                  "start": 89,
                  "end": 90,
                  "name": "S",
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
      "start": 312,
      "end": 318,
      "expression": {
        "type": "AssignmentExpression",
        "start": 312,
        "end": 317,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 312,
          "end": 313,
          "name": "t",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 316,
          "end": 317,
          "name": "s",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ClassDeclaration",
      "start": 403,
      "end": 440,
      "id": {
        "type": "Identifier",
        "start": 409,
        "end": 411,
        "name": "T1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 412,
        "end": 440,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 418,
            "end": 438,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 418,
              "end": 419,
              "name": "m",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 419,
              "end": 438,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 420,
                  "end": 423,
                  "name": "p1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": true
                },
                {
                  "type": "Identifier",
                  "start": 425,
                  "end": 428,
                  "name": "p2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": true
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 430,
                "end": 438,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
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
      "start": 441,
      "end": 452,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 445,
          "end": 451,
          "id": {
            "type": "Identifier",
            "start": 445,
            "end": 451,
            "name": "t1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 447,
              "end": 451,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 449,
                "end": 451,
                "typeName": {
                  "type": "Identifier",
                  "start": 449,
                  "end": 451,
                  "name": "T1",
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
      "start": 645,
      "end": 652,
      "expression": {
        "type": "AssignmentExpression",
        "start": 645,
        "end": 651,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 645,
          "end": 647,
          "name": "t1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 650,
          "end": 651,
          "name": "s",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
