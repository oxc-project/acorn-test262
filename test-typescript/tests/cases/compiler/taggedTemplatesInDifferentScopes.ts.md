__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 208,
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
          "name": "tag",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": false,
        "async": false,
        "params": [
          {
            "type": "Identifier",
            "start": 20,
            "end": 47,
            "name": "parts",
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
                  "name": "TemplateStringsArray",
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
          {
            "type": "RestElement",
            "start": 49,
            "end": 65,
            "argument": {
              "type": "Identifier",
              "start": 52,
              "end": 58,
              "name": "values",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "decorators": [],
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
                  "name": "parts",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Literal",
                  "start": 86,
                  "end": 87,
                  "value": 0,
                  "raw": "0"
                },
                "computed": true,
                "optional": false
              }
            }
          ]
        },
        "declare": false,
        "typeParameters": null,
        "returnType": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "FunctionDeclaration",
      "start": 92,
      "end": 141,
      "id": {
        "type": "Identifier",
        "start": 101,
        "end": 104,
        "name": "foo",
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
                "name": "tag",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "quasi": {
                "type": "TemplateLiteral",
                "start": 117,
                "end": 122,
                "expressions": [],
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 117,
                    "end": 122,
                    "value": {
                      "cooked": "foo",
                      "raw": "foo"
                    },
                    "tail": true
                  }
                ]
              },
              "typeArguments": null
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
                "name": "tag",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "quasi": {
                "type": "TemplateLiteral",
                "start": 132,
                "end": 138,
                "expressions": [],
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 132,
                    "end": 138,
                    "value": {
                      "cooked": "foo2",
                      "raw": "foo2"
                    },
                    "tail": true
                  }
                ]
              },
              "typeArguments": null
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 143,
      "end": 192,
      "id": {
        "type": "Identifier",
        "start": 152,
        "end": 155,
        "name": "bar",
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
                "name": "tag",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "quasi": {
                "type": "TemplateLiteral",
                "start": 168,
                "end": 173,
                "expressions": [],
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 168,
                    "end": 173,
                    "value": {
                      "cooked": "bar",
                      "raw": "bar"
                    },
                    "tail": true
                  }
                ]
              },
              "typeArguments": null
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
                "name": "tag",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "quasi": {
                "type": "TemplateLiteral",
                "start": 183,
                "end": 189,
                "expressions": [],
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 183,
                    "end": 189,
                    "value": {
                      "cooked": "bar2",
                      "raw": "bar2"
                    },
                    "tail": true
                  }
                ]
              },
              "typeArguments": null
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
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
          "name": "foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
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
          "name": "bar",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
