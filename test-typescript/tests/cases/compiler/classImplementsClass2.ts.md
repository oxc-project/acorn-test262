__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 171,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 39,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 39,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 10,
            "end": 37,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 10,
              "end": 13,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 13,
              "end": 37,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 24,
                "end": 37,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 26,
                    "end": 35,
                    "argument": {
                      "type": "Literal",
                      "start": 33,
                      "end": 34,
                      "raw": "1",
                      "value": 1,
                      "regex": null,
                      "bigint": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 15,
                "end": 23,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 17,
                  "end": 23
                }
              },
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
        "name": "A",
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
      "start": 40,
      "end": 63,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 61,
        "end": 63,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 46,
        "end": 47,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 59,
          "end": 60,
          "expression": {
            "type": "Identifier",
            "start": 59,
            "end": 60,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 74,
      "end": 132,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 93,
        "end": 132,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 99,
            "end": 130,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 99,
              "end": 102,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 102,
              "end": 130,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 105,
                "end": 130,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 115,
                    "end": 124,
                    "argument": {
                      "type": "Literal",
                      "start": 122,
                      "end": 123,
                      "raw": "1",
                      "value": 1,
                      "regex": null,
                      "bigint": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
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
        "start": 80,
        "end": 82,
        "decorators": [],
        "name": "C2",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 91,
        "end": 92,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 134,
      "end": 143,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 138,
          "end": 142,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 138,
            "end": 142,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 139,
              "end": 142,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 141,
                "end": 142,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 141,
                  "end": 142,
                  "decorators": [],
                  "name": "C",
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
      "start": 144,
      "end": 155,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 148,
          "end": 154,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 148,
            "end": 154,
            "decorators": [],
            "name": "c2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 150,
              "end": 154,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 152,
                "end": 154,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 152,
                  "end": 154,
                  "decorators": [],
                  "name": "C2",
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
      "start": 156,
      "end": 163,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 156,
        "end": 162,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 156,
          "end": 157,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 160,
          "end": 162,
          "decorators": [],
          "name": "c2",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 164,
      "end": 171,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 164,
        "end": 170,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 164,
          "end": 166,
          "decorators": [],
          "name": "c2",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 169,
          "end": 170,
          "decorators": [],
          "name": "c",
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
