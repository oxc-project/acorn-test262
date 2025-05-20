__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 342,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 73,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 14,
        "end": 73,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 17,
            "end": 54,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 28,
              "end": 35,
              "decorators": [],
              "name": "OPTIONS",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 35,
              "end": 54,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 38,
                "end": 54,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 42,
                    "end": 51,
                    "argument": {
                      "type": "Literal",
                      "start": 49,
                      "end": 50,
                      "raw": "1",
                      "value": 1
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
          },
          {
            "type": "MethodDefinition",
            "start": 57,
            "end": 71,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 57,
              "end": 64,
              "decorators": [],
              "name": "process",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 64,
              "end": 71,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 67,
                "end": 71,
                "body": []
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
        "start": 6,
        "end": 13,
        "decorators": [],
        "name": "Handler",
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
      "start": 74,
      "end": 108,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 74,
        "end": 108,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 74,
          "end": 91,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 74,
            "end": 81,
            "decorators": [],
            "name": "Handler",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 82,
            "end": 91,
            "decorators": [],
            "name": "statische",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "FunctionExpression",
          "start": 94,
          "end": 108,
          "async": false,
          "body": {
            "type": "BlockStatement",
            "start": 105,
            "end": 108,
            "body": []
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
    },
    {
      "type": "VariableDeclaration",
      "start": 109,
      "end": 151,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 115,
          "end": 151,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 115,
            "end": 122,
            "decorators": [],
            "name": "Strings",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 125,
            "end": 151,
            "properties": [
              {
                "type": "Property",
                "start": 131,
                "end": 137,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 131,
                  "end": 132,
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
                  "start": 134,
                  "end": 137,
                  "raw": "\"A\"",
                  "value": "A"
                }
              },
              {
                "type": "Property",
                "start": 143,
                "end": 149,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 143,
                  "end": 144,
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
                  "start": 146,
                  "end": 149,
                  "raw": "\"B\"",
                  "value": "B"
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
      "type": "ExpressionStatement",
      "start": 153,
      "end": 178,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 153,
        "end": 177,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 153,
          "end": 167,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 153,
            "end": 159,
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 160,
            "end": 167,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Identifier",
          "start": 170,
          "end": 177,
          "decorators": [],
          "name": "Handler",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 179,
      "end": 211,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 179,
        "end": 211,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 179,
          "end": 201,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 179,
            "end": 193,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 179,
              "end": 185,
              "decorators": [],
              "name": "module",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 186,
              "end": 193,
              "decorators": [],
              "name": "exports",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 194,
            "end": 201,
            "decorators": [],
            "name": "Strings",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Identifier",
          "start": 204,
          "end": 211,
          "decorators": [],
          "name": "Strings",
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
