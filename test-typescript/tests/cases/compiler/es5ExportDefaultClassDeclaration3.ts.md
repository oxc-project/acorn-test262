__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 149,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 24,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 23,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 13,
            "name": "before",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 10,
              "end": 13,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 12,
                "end": 13,
                "typeName": {
                  "type": "Identifier",
                  "start": 12,
                  "end": 13,
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
            "type": "NewExpression",
            "start": 16,
            "end": 23,
            "callee": {
              "type": "Identifier",
              "start": 20,
              "end": 21,
              "name": "C",
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
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 26,
      "end": 100,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 41,
        "end": 100,
        "id": {
          "type": "Identifier",
          "start": 47,
          "end": 48,
          "name": "C",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 49,
          "end": 100,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 55,
              "end": 98,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 55,
                "end": 61,
                "name": "method",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "method",
              "value": {
                "type": "FunctionExpression",
                "start": 61,
                "end": 98,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "start": 67,
                  "end": 98,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 77,
                      "end": 92,
                      "argument": {
                        "type": "NewExpression",
                        "start": 84,
                        "end": 91,
                        "callee": {
                          "type": "Identifier",
                          "start": 88,
                          "end": 89,
                          "name": "C",
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
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 63,
                  "end": 66,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 65,
                    "end": 66,
                    "typeName": {
                      "type": "Identifier",
                      "start": 65,
                      "end": 66,
                      "name": "C",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
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
      "exportKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 102,
      "end": 125,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 106,
          "end": 124,
          "id": {
            "type": "Identifier",
            "start": 106,
            "end": 114,
            "name": "after",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 111,
              "end": 114,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 113,
                "end": 114,
                "typeName": {
                  "type": "Identifier",
                  "start": 113,
                  "end": 114,
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
            "type": "NewExpression",
            "start": 117,
            "end": 124,
            "callee": {
              "type": "Identifier",
              "start": 121,
              "end": 122,
              "name": "C",
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
    },
    {
      "type": "VariableDeclaration",
      "start": 127,
      "end": 147,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 131,
          "end": 146,
          "id": {
            "type": "Identifier",
            "start": 131,
            "end": 142,
            "name": "t",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 132,
              "end": 142,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 134,
                "end": 142,
                "exprName": {
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
          "init": {
            "type": "Identifier",
            "start": 145,
            "end": 146,
            "name": "C",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
