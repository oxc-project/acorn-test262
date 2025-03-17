__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 240,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 29,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 10,
        "name": "f",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 13,
        "end": 29,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 19,
            "end": 27,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 23,
                "end": 26,
                "id": {
                  "type": "Identifier",
                  "start": 23,
                  "end": 24,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 25,
                  "end": 26,
                  "value": 1,
                  "raw": "1"
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "VariableDeclaration",
      "start": 31,
      "end": 41,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 35,
          "end": 40,
          "id": {
            "type": "Identifier",
            "start": 35,
            "end": 36,
            "name": "y",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 37,
            "end": 40,
            "callee": {
              "type": "Identifier",
              "start": 37,
              "end": 38,
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "optional": false,
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
      "start": 60,
      "end": 76,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 64,
          "end": 75,
          "id": {
            "type": "Identifier",
            "start": 64,
            "end": 71,
            "name": "why",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 67,
              "end": 71,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 68,
                "end": 71
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 72,
            "end": 75,
            "callee": {
              "type": "Identifier",
              "start": 72,
              "end": 73,
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "optional": false,
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
      "start": 94,
      "end": 104,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 98,
          "end": 103,
          "id": {
            "type": "Identifier",
            "start": 98,
            "end": 103,
            "name": "w",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 99,
              "end": 103,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 100,
                "end": 103
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
      "start": 105,
      "end": 111,
      "expression": {
        "type": "AssignmentExpression",
        "start": 105,
        "end": 110,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 105,
          "end": 106,
          "name": "w",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 107,
          "end": 110,
          "callee": {
            "type": "Identifier",
            "start": 107,
            "end": 108,
            "name": "f",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "arguments": [],
          "optional": false,
          "typeArguments": null
        }
      },
      "directive": null
    },
    {
      "type": "ClassDeclaration",
      "start": 130,
      "end": 166,
      "id": {
        "type": "Identifier",
        "start": 136,
        "end": 137,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 138,
        "end": 166,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 144,
            "end": 164,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 144,
              "end": 145,
              "name": "g",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 145,
              "end": 164,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 148,
                "end": 164,
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
      "start": 168,
      "end": 186,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 172,
          "end": 185,
          "id": {
            "type": "Identifier",
            "start": 172,
            "end": 173,
            "name": "z",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 174,
            "end": 185,
            "callee": {
              "type": "MemberExpression",
              "start": 174,
              "end": 183,
              "object": {
                "type": "NewExpression",
                "start": 174,
                "end": 181,
                "callee": {
                  "type": "Identifier",
                  "start": 178,
                  "end": 179,
                  "name": "C",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [],
                "typeArguments": null
              },
              "property": {
                "type": "Identifier",
                "start": 182,
                "end": 183,
                "name": "g",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [],
            "optional": false,
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
      "start": 204,
      "end": 218,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 208,
          "end": 217,
          "id": {
            "type": "Identifier",
            "start": 208,
            "end": 209,
            "name": "N",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 210,
            "end": 217,
            "callee": {
              "type": "Identifier",
              "start": 214,
              "end": 215,
              "name": "f",
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
