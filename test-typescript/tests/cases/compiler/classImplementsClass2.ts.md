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
        "end": 39,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 10,
            "end": 37,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 10,
              "end": 13,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 13,
              "end": 37,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                      "value": 1,
                      "raw": "1"
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 15,
                "end": 23,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 17,
                  "end": 23
                }
              }
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
      "start": 40,
      "end": 63,
      "id": {
        "type": "Identifier",
        "start": 46,
        "end": 47,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 61,
        "end": 63,
        "body": []
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 59,
          "end": 60,
          "expression": {
            "type": "Identifier",
            "start": 59,
            "end": 60,
            "name": "A",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 74,
      "end": 132,
      "id": {
        "type": "Identifier",
        "start": 80,
        "end": 82,
        "name": "C2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 91,
        "end": 92,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 93,
        "end": 132,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 99,
            "end": 130,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 99,
              "end": 102,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 102,
              "end": 130,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                      "value": 1,
                      "raw": "1"
                    }
                  }
                ]
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
      "start": 134,
      "end": 143,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 138,
          "end": 142,
          "id": {
            "type": "Identifier",
            "start": 138,
            "end": 142,
            "name": "c",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 139,
              "end": 142,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 141,
                "end": 142,
                "typeName": {
                  "type": "Identifier",
                  "start": 141,
                  "end": 142,
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
      "type": "VariableDeclaration",
      "start": 144,
      "end": 155,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 148,
          "end": 154,
          "id": {
            "type": "Identifier",
            "start": 148,
            "end": 154,
            "name": "c2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 150,
              "end": 154,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 152,
                "end": 154,
                "typeName": {
                  "type": "Identifier",
                  "start": 152,
                  "end": 154,
                  "name": "C2",
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
      "start": 156,
      "end": 163,
      "expression": {
        "type": "AssignmentExpression",
        "start": 156,
        "end": 162,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 156,
          "end": 157,
          "name": "c",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 160,
          "end": 162,
          "name": "c2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 164,
      "end": 171,
      "expression": {
        "type": "AssignmentExpression",
        "start": 164,
        "end": 170,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 164,
          "end": 166,
          "name": "c2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 169,
          "end": 170,
          "name": "c",
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
