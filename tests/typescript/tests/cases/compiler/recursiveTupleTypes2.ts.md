__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 167,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 49,
      "body": {
        "type": "TSInterfaceBody",
        "start": 16,
        "end": 49,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 22,
            "end": 47,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 22,
              "end": 30,
              "decorators": [],
              "name": "children",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 30,
              "end": 46,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 32,
                "end": 46,
                "elementTypes": [
                  {
                    "type": "TSTypeReference",
                    "start": 33,
                    "end": 38,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 33,
                      "end": 38,
                      "decorators": [],
                      "name": "Tree1",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 40,
                    "end": 45,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 40,
                      "end": 45,
                      "decorators": [],
                      "name": "Tree2",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 15,
        "decorators": [],
        "name": "Tree1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 51,
      "end": 100,
      "body": {
        "type": "TSInterfaceBody",
        "start": 67,
        "end": 100,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 73,
            "end": 98,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 73,
              "end": 81,
              "decorators": [],
              "name": "children",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 81,
              "end": 97,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 83,
                "end": 97,
                "elementTypes": [
                  {
                    "type": "TSTypeReference",
                    "start": 84,
                    "end": 89,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 84,
                      "end": 89,
                      "decorators": [],
                      "name": "Tree2",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 91,
                    "end": 96,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 91,
                      "end": 96,
                      "decorators": [],
                      "name": "Tree2",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 61,
        "end": 66,
        "decorators": [],
        "name": "Tree2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 102,
      "end": 119,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 106,
          "end": 118,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 106,
            "end": 118,
            "decorators": [],
            "name": "tree1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 111,
              "end": 118,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 113,
                "end": 118,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 113,
                  "end": 118,
                  "decorators": [],
                  "name": "Tree1",
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
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 120,
      "end": 137,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 124,
          "end": 136,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 124,
            "end": 136,
            "decorators": [],
            "name": "tree2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 129,
              "end": 136,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 131,
                "end": 136,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 131,
                  "end": 136,
                  "decorators": [],
                  "name": "Tree2",
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
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 138,
      "end": 152,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 138,
        "end": 151,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 138,
          "end": 143,
          "decorators": [],
          "name": "tree1",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 146,
          "end": 151,
          "decorators": [],
          "name": "tree2",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 153,
      "end": 167,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 153,
        "end": 166,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 153,
          "end": 158,
          "decorators": [],
          "name": "tree2",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 161,
          "end": 166,
          "decorators": [],
          "name": "tree1",
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
