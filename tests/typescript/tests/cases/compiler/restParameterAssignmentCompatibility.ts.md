__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 710,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 33,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 33,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 14,
            "end": 31,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 14,
              "end": 15,
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 15,
              "end": 31,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 23,
                "end": 31,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "RestElement",
                  "start": 16,
                  "end": 21,
                  "argument": {
                    "type": "Identifier",
                    "start": 19,
                    "end": 21,
                    "decorators": [],
                    "name": "p3",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null,
                  "value": null
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "T",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 35,
      "end": 69,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 43,
        "end": 69,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 49,
            "end": 67,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 49,
              "end": 50,
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 50,
              "end": 67,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 59,
                "end": 67,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 51,
                  "end": 53,
                  "decorators": [],
                  "name": "p1",
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "Identifier",
                  "start": 55,
                  "end": 57,
                  "decorators": [],
                  "name": "p2",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 41,
        "end": 42,
        "decorators": [],
        "name": "S",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 71,
      "end": 80,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 75,
          "end": 79,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 75,
            "end": 79,
            "decorators": [],
            "name": "t",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 76,
              "end": 79,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 78,
                "end": 79,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 78,
                  "end": 79,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
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
      "start": 81,
      "end": 90,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 85,
          "end": 89,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 85,
            "end": 89,
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 86,
              "end": 89,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 88,
                "end": 89,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 88,
                  "end": 89,
                  "decorators": [],
                  "name": "S",
                  "optional": false,
                  "typeAnnotation": null
                }
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
      "type": "ExpressionStatement",
      "start": 311,
      "end": 317,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 311,
        "end": 316,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 311,
          "end": 312,
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 315,
          "end": 316,
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 402,
      "end": 439,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 411,
        "end": 439,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 417,
            "end": 437,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 417,
              "end": 418,
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 418,
              "end": 437,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 429,
                "end": 437,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 419,
                  "end": 422,
                  "decorators": [],
                  "name": "p1",
                  "optional": true,
                  "typeAnnotation": null
                },
                {
                  "type": "Identifier",
                  "start": 424,
                  "end": 427,
                  "decorators": [],
                  "name": "p2",
                  "optional": true,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 408,
        "end": 410,
        "decorators": [],
        "name": "T1",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 440,
      "end": 451,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 444,
          "end": 450,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 444,
            "end": 450,
            "decorators": [],
            "name": "t1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 446,
              "end": 450,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 448,
                "end": 450,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 448,
                  "end": 450,
                  "decorators": [],
                  "name": "T1",
                  "optional": false,
                  "typeAnnotation": null
                }
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
      "type": "ExpressionStatement",
      "start": 644,
      "end": 651,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 644,
        "end": 650,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 644,
          "end": 646,
          "decorators": [],
          "name": "t1",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 649,
          "end": 650,
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": null
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
