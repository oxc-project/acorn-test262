__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Tree1",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 15
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "children",
              "optional": false,
              "typeAnnotation": null,
              "start": 22,
              "end": 30
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Tree1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 33,
                      "end": 38
                    },
                    "typeArguments": null,
                    "start": 33,
                    "end": 38
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Tree2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 40,
                      "end": 45
                    },
                    "typeArguments": null,
                    "start": 40,
                    "end": 45
                  }
                ],
                "start": 32,
                "end": 46
              },
              "start": 30,
              "end": 46
            },
            "accessibility": null,
            "static": false,
            "start": 22,
            "end": 47
          }
        ],
        "start": 16,
        "end": 49
      },
      "declare": false,
      "start": 0,
      "end": 49
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Tree2",
        "optional": false,
        "typeAnnotation": null,
        "start": 61,
        "end": 66
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "children",
              "optional": false,
              "typeAnnotation": null,
              "start": 73,
              "end": 81
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Tree2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 84,
                      "end": 89
                    },
                    "typeArguments": null,
                    "start": 84,
                    "end": 89
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Tree2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 91,
                      "end": 96
                    },
                    "typeArguments": null,
                    "start": 91,
                    "end": 96
                  }
                ],
                "start": 83,
                "end": 97
              },
              "start": 81,
              "end": 97
            },
            "accessibility": null,
            "static": false,
            "start": 73,
            "end": 98
          }
        ],
        "start": 67,
        "end": 100
      },
      "declare": false,
      "start": 51,
      "end": 100
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "tree1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Tree1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 113,
                  "end": 118
                },
                "typeArguments": null,
                "start": 113,
                "end": 118
              },
              "start": 111,
              "end": 118
            },
            "start": 106,
            "end": 118
          },
          "init": null,
          "definite": false,
          "start": 106,
          "end": 118
        }
      ],
      "declare": false,
      "start": 102,
      "end": 119
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "tree2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Tree2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 131,
                  "end": 136
                },
                "typeArguments": null,
                "start": 131,
                "end": 136
              },
              "start": 129,
              "end": 136
            },
            "start": 124,
            "end": 136
          },
          "init": null,
          "definite": false,
          "start": 124,
          "end": 136
        }
      ],
      "declare": false,
      "start": 120,
      "end": 137
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "tree1",
          "optional": false,
          "typeAnnotation": null,
          "start": 138,
          "end": 143
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "tree2",
          "optional": false,
          "typeAnnotation": null,
          "start": 146,
          "end": 151
        },
        "start": 138,
        "end": 151
      },
      "directive": null,
      "start": 138,
      "end": 152
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "tree2",
          "optional": false,
          "typeAnnotation": null,
          "start": 153,
          "end": 158
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "tree1",
          "optional": false,
          "typeAnnotation": null,
          "start": 161,
          "end": 166
        },
        "start": 153,
        "end": 166
      },
      "directive": null,
      "start": 153,
      "end": 167
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 167
}
```
