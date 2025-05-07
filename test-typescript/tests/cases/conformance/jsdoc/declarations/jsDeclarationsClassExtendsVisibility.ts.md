__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 34,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 12,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 10,
        "end": 12,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 9,
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 13,
      "end": 34,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 13,
        "end": 33,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 13,
          "end": 27,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 13,
            "end": 19,
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 20,
            "end": 27,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Identifier",
          "start": 30,
          "end": 33,
          "decorators": [],
          "name": "Bar",
          "optional": false,
          "typeAnnotation": null
        }
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 154,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 29,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 28,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 9,
            "decorators": [],
            "name": "Bar",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 12,
            "end": 28,
            "arguments": [
              {
                "type": "Literal",
                "start": 20,
                "end": 27,
                "raw": "\"./bar\"",
                "value": "./bar",
                "regex": null,
                "bigint": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 12,
              "end": 19,
              "decorators": [],
              "name": "require",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 30,
      "end": 73,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 36,
          "end": 72,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 36,
            "end": 43,
            "decorators": [],
            "name": "Strings",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 46,
            "end": 72,
            "properties": [
              {
                "type": "Property",
                "start": 52,
                "end": 58,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 52,
                  "end": 53,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 55,
                  "end": 58,
                  "raw": "\"A\"",
                  "value": "A",
                  "regex": null,
                  "bigint": null
                }
              },
              {
                "type": "Property",
                "start": 64,
                "end": 70,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 64,
                  "end": 65,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 67,
                  "end": 70,
                  "raw": "\"B\"",
                  "value": "B",
                  "regex": null,
                  "bigint": null
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ClassDeclaration",
      "start": 74,
      "end": 98,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 96,
        "end": 98,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 80,
        "end": 83,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 92,
        "end": 95,
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 99,
      "end": 120,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 99,
        "end": 119,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 99,
          "end": 113,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 99,
            "end": 105,
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 106,
            "end": 113,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Identifier",
          "start": 116,
          "end": 119,
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 121,
      "end": 154,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 121,
        "end": 153,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 121,
          "end": 143,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 121,
            "end": 135,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 121,
              "end": 127,
              "decorators": [],
              "name": "module",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 128,
              "end": 135,
              "decorators": [],
              "name": "exports",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 136,
            "end": 143,
            "decorators": [],
            "name": "Strings",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Identifier",
          "start": 146,
          "end": 153,
          "decorators": [],
          "name": "Strings",
          "optional": false,
          "typeAnnotation": null
        }
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
