__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 207,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 91,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 7,
        "end": 91,
        "id": {
          "type": "Identifier",
          "start": 16,
          "end": 19,
          "decorators": [],
          "name": "tag",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "start": 20,
            "end": 47,
            "decorators": [],
            "name": "parts",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 25,
              "end": 47,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 27,
                "end": 47,
                "typeName": {
                  "type": "Identifier",
                  "start": 27,
                  "end": 47,
                  "decorators": [],
                  "name": "TemplateStringsArray",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          {
            "type": "RestElement",
            "start": 49,
            "end": 65,
            "decorators": [],
            "argument": {
              "type": "Identifier",
              "start": 52,
              "end": 58,
              "decorators": [],
              "name": "values",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 58,
              "end": 65,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 60,
                "end": 65,
                "elementType": {
                  "type": "TSAnyKeyword",
                  "start": 60,
                  "end": 63
                }
              }
            },
            "value": null
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "start": 67,
          "end": 91,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 73,
              "end": 89,
              "argument": {
                "type": "MemberExpression",
                "start": 80,
                "end": 88,
                "object": {
                  "type": "Identifier",
                  "start": 80,
                  "end": 85,
                  "decorators": [],
                  "name": "parts",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Literal",
                  "start": 86,
                  "end": 87,
                  "value": 0,
                  "raw": "0"
                },
                "optional": false,
                "computed": true
              }
            }
          ]
        },
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 92,
      "end": 141,
      "id": {
        "type": "Identifier",
        "start": 101,
        "end": 104,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 107,
        "end": 141,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 113,
            "end": 123,
            "expression": {
              "type": "TaggedTemplateExpression",
              "start": 113,
              "end": 122,
              "tag": {
                "type": "Identifier",
                "start": 113,
                "end": 116,
                "decorators": [],
                "name": "tag",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "quasi": {
                "type": "TemplateLiteral",
                "start": 117,
                "end": 122,
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 117,
                    "end": 122,
                    "value": {
                      "raw": "foo",
                      "cooked": "foo"
                    },
                    "tail": true
                  }
                ],
                "expressions": []
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 128,
            "end": 139,
            "expression": {
              "type": "TaggedTemplateExpression",
              "start": 128,
              "end": 138,
              "tag": {
                "type": "Identifier",
                "start": 128,
                "end": 131,
                "decorators": [],
                "name": "tag",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "quasi": {
                "type": "TemplateLiteral",
                "start": 132,
                "end": 138,
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 132,
                    "end": 138,
                    "value": {
                      "raw": "foo2",
                      "cooked": "foo2"
                    },
                    "tail": true
                  }
                ],
                "expressions": []
              }
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 143,
      "end": 192,
      "id": {
        "type": "Identifier",
        "start": 152,
        "end": 155,
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 158,
        "end": 192,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 164,
            "end": 174,
            "expression": {
              "type": "TaggedTemplateExpression",
              "start": 164,
              "end": 173,
              "tag": {
                "type": "Identifier",
                "start": 164,
                "end": 167,
                "decorators": [],
                "name": "tag",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "quasi": {
                "type": "TemplateLiteral",
                "start": 168,
                "end": 173,
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 168,
                    "end": 173,
                    "value": {
                      "raw": "bar",
                      "cooked": "bar"
                    },
                    "tail": true
                  }
                ],
                "expressions": []
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 179,
            "end": 190,
            "expression": {
              "type": "TaggedTemplateExpression",
              "start": 179,
              "end": 189,
              "tag": {
                "type": "Identifier",
                "start": 179,
                "end": 182,
                "decorators": [],
                "name": "tag",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "quasi": {
                "type": "TemplateLiteral",
                "start": 183,
                "end": 189,
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 183,
                    "end": 189,
                    "value": {
                      "raw": "bar2",
                      "cooked": "bar2"
                    },
                    "tail": true
                  }
                ],
                "expressions": []
              }
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 194,
      "end": 200,
      "expression": {
        "type": "CallExpression",
        "start": 194,
        "end": 199,
        "callee": {
          "type": "Identifier",
          "start": 194,
          "end": 197,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 201,
      "end": 207,
      "expression": {
        "type": "CallExpression",
        "start": 201,
        "end": 206,
        "callee": {
          "type": "Identifier",
          "start": 201,
          "end": 204,
          "decorators": [],
          "name": "bar",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
