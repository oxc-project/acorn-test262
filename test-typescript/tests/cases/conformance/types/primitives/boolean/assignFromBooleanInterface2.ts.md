__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 226,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 44,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 17,
        "name": "Boolean",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 18,
        "end": 44,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 24,
            "end": 42,
            "key": {
              "type": "Identifier",
              "start": 24,
              "end": 31,
              "name": "doStuff",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 33,
              "end": 41,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 35,
                "end": 41
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 46,
      "end": 93,
      "id": {
        "type": "Identifier",
        "start": 56,
        "end": 66,
        "name": "NotBoolean",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 67,
        "end": 93,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 73,
            "end": 91,
            "key": {
              "type": "Identifier",
              "start": 73,
              "end": 80,
              "name": "doStuff",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 82,
              "end": 90,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 84,
                "end": 90
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 95,
      "end": 108,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 99,
          "end": 107,
          "id": {
            "type": "Identifier",
            "start": 99,
            "end": 100,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 103,
            "end": 107,
            "value": true,
            "raw": "true"
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 109,
      "end": 124,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 113,
          "end": 123,
          "id": {
            "type": "Identifier",
            "start": 113,
            "end": 123,
            "name": "a",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 114,
              "end": 123,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 116,
                "end": 123,
                "typeName": {
                  "type": "Identifier",
                  "start": 116,
                  "end": 123,
                  "name": "Boolean",
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
      "start": 125,
      "end": 143,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 129,
          "end": 142,
          "id": {
            "type": "Identifier",
            "start": 129,
            "end": 142,
            "name": "b",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 130,
              "end": 142,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 132,
                "end": 142,
                "typeName": {
                  "type": "Identifier",
                  "start": 132,
                  "end": 142,
                  "name": "NotBoolean",
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
      "start": 145,
      "end": 151,
      "expression": {
        "type": "AssignmentExpression",
        "start": 145,
        "end": 150,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 145,
          "end": 146,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 149,
          "end": 150,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 152,
      "end": 158,
      "expression": {
        "type": "AssignmentExpression",
        "start": 152,
        "end": 157,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 152,
          "end": 153,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 156,
          "end": 157,
          "name": "b",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 160,
      "end": 166,
      "expression": {
        "type": "AssignmentExpression",
        "start": 160,
        "end": 165,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 160,
          "end": 161,
          "name": "b",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 164,
          "end": 165,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 167,
      "end": 173,
      "expression": {
        "type": "AssignmentExpression",
        "start": 167,
        "end": 172,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 167,
          "end": 168,
          "name": "b",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 171,
          "end": 172,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 175,
      "end": 181,
      "expression": {
        "type": "AssignmentExpression",
        "start": 175,
        "end": 180,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 175,
          "end": 176,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 179,
          "end": 180,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 200,
      "end": 206,
      "expression": {
        "type": "AssignmentExpression",
        "start": 200,
        "end": 205,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 200,
          "end": 201,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 204,
          "end": 205,
          "name": "b",
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
