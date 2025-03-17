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
      "body": {
        "type": "TSInterfaceBody",
        "start": 18,
        "end": 44,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 24,
            "end": 42,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 24,
              "end": 31,
              "decorators": [],
              "name": "doStuff",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
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
            "static": false,
            "typeParameters": null
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 17,
        "decorators": [],
        "name": "Boolean",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 46,
      "end": 93,
      "body": {
        "type": "TSInterfaceBody",
        "start": 67,
        "end": 93,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 73,
            "end": 91,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 73,
              "end": 80,
              "decorators": [],
              "name": "doStuff",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
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
            "static": false,
            "typeParameters": null
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 56,
        "end": 66,
        "decorators": [],
        "name": "NotBoolean",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 99,
            "end": 100,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 103,
            "end": 107,
            "raw": "true",
            "value": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 113,
            "end": 123,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 114,
              "end": 123,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 116,
                "end": 123,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 116,
                  "end": 123,
                  "decorators": [],
                  "name": "Boolean",
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
      "start": 125,
      "end": 143,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 129,
          "end": 142,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 129,
            "end": 142,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 130,
              "end": 142,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 132,
                "end": 142,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 132,
                  "end": 142,
                  "decorators": [],
                  "name": "NotBoolean",
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
      "start": 145,
      "end": 151,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 145,
        "end": 150,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 145,
          "end": 146,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 149,
          "end": 150,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 152,
      "end": 158,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 152,
        "end": 157,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 152,
          "end": 153,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 156,
          "end": 157,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 160,
      "end": 166,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 160,
        "end": 165,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 160,
          "end": 161,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 164,
          "end": 165,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 167,
      "end": 173,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 167,
        "end": 172,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 167,
          "end": 168,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 171,
          "end": 172,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 175,
      "end": 181,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 175,
        "end": 180,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 175,
          "end": 176,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 179,
          "end": 180,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 200,
      "end": 206,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 200,
        "end": 205,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 200,
          "end": 201,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 204,
          "end": 205,
          "decorators": [],
          "name": "b",
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
