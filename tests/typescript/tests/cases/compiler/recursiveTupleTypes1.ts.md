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
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 15,
        "decorators": [],
        "name": "Tree1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 16,
        "end": 49,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 22,
            "end": 47,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 22,
              "end": 30,
              "decorators": [],
              "name": "children",
              "optional": false,
              "typeAnnotation": null
            },
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
                    "typeName": {
                      "type": "Identifier",
                      "start": 33,
                      "end": 38,
                      "decorators": [],
                      "name": "Tree1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 40,
                    "end": 45,
                    "typeName": {
                      "type": "Identifier",
                      "start": 40,
                      "end": 45,
                      "decorators": [],
                      "name": "Tree2",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 51,
      "end": 100,
      "id": {
        "type": "Identifier",
        "start": 61,
        "end": 66,
        "decorators": [],
        "name": "Tree2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 67,
        "end": 100,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 73,
            "end": 98,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 73,
              "end": 81,
              "decorators": [],
              "name": "children",
              "optional": false,
              "typeAnnotation": null
            },
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
                    "typeName": {
                      "type": "Identifier",
                      "start": 84,
                      "end": 89,
                      "decorators": [],
                      "name": "Tree2",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 91,
                    "end": 96,
                    "typeName": {
                      "type": "Identifier",
                      "start": 91,
                      "end": 96,
                      "decorators": [],
                      "name": "Tree1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 102,
      "end": 119,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 106,
          "end": 118,
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
                "typeName": {
                  "type": "Identifier",
                  "start": 113,
                  "end": 118,
                  "decorators": [],
                  "name": "Tree1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 120,
      "end": 137,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 124,
          "end": 136,
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
                "typeName": {
                  "type": "Identifier",
                  "start": 131,
                  "end": 136,
                  "decorators": [],
                  "name": "Tree2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 138,
      "end": 152,
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
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 153,
      "end": 167,
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
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
