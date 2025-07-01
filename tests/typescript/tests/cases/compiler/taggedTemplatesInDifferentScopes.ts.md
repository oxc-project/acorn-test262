__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "tag",
          "optional": false,
          "typeAnnotation": null,
          "start": 16,
          "end": 19
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "parts",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TemplateStringsArray",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 27,
                  "end": 47
                },
                "typeArguments": null,
                "start": 27,
                "end": 47
              },
              "start": 25,
              "end": 47
            },
            "start": 20,
            "end": 47
          },
          {
            "type": "RestElement",
            "decorators": [],
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "values",
              "optional": false,
              "typeAnnotation": null,
              "start": 52,
              "end": 58
            },
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSAnyKeyword",
                  "start": 60,
                  "end": 63
                },
                "start": 60,
                "end": 65
              },
              "start": 58,
              "end": 65
            },
            "value": null,
            "start": 49,
            "end": 65
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "parts",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 80,
                  "end": 85
                },
                "property": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 86,
                  "end": 87
                },
                "optional": false,
                "computed": true,
                "start": 80,
                "end": 88
              },
              "start": 73,
              "end": 89
            }
          ],
          "start": 67,
          "end": 91
        },
        "expression": false,
        "start": 7,
        "end": 91
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 91
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 101,
        "end": 104
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "TaggedTemplateExpression",
              "tag": {
                "type": "Identifier",
                "decorators": [],
                "name": "tag",
                "optional": false,
                "typeAnnotation": null,
                "start": 113,
                "end": 116
              },
              "typeArguments": null,
              "quasi": {
                "type": "TemplateLiteral",
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "foo",
                      "cooked": "foo"
                    },
                    "tail": true,
                    "start": 117,
                    "end": 122
                  }
                ],
                "expressions": [],
                "start": 117,
                "end": 122
              },
              "start": 113,
              "end": 122
            },
            "directive": null,
            "start": 113,
            "end": 123
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "TaggedTemplateExpression",
              "tag": {
                "type": "Identifier",
                "decorators": [],
                "name": "tag",
                "optional": false,
                "typeAnnotation": null,
                "start": 128,
                "end": 131
              },
              "typeArguments": null,
              "quasi": {
                "type": "TemplateLiteral",
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "foo2",
                      "cooked": "foo2"
                    },
                    "tail": true,
                    "start": 132,
                    "end": 138
                  }
                ],
                "expressions": [],
                "start": 132,
                "end": 138
              },
              "start": 128,
              "end": 138
            },
            "directive": null,
            "start": 128,
            "end": 139
          }
        ],
        "start": 107,
        "end": 141
      },
      "expression": false,
      "start": 92,
      "end": 141
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 152,
        "end": 155
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "TaggedTemplateExpression",
              "tag": {
                "type": "Identifier",
                "decorators": [],
                "name": "tag",
                "optional": false,
                "typeAnnotation": null,
                "start": 164,
                "end": 167
              },
              "typeArguments": null,
              "quasi": {
                "type": "TemplateLiteral",
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "bar",
                      "cooked": "bar"
                    },
                    "tail": true,
                    "start": 168,
                    "end": 173
                  }
                ],
                "expressions": [],
                "start": 168,
                "end": 173
              },
              "start": 164,
              "end": 173
            },
            "directive": null,
            "start": 164,
            "end": 174
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "TaggedTemplateExpression",
              "tag": {
                "type": "Identifier",
                "decorators": [],
                "name": "tag",
                "optional": false,
                "typeAnnotation": null,
                "start": 179,
                "end": 182
              },
              "typeArguments": null,
              "quasi": {
                "type": "TemplateLiteral",
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "bar2",
                      "cooked": "bar2"
                    },
                    "tail": true,
                    "start": 183,
                    "end": 189
                  }
                ],
                "expressions": [],
                "start": 183,
                "end": 189
              },
              "start": 179,
              "end": 189
            },
            "directive": null,
            "start": 179,
            "end": 190
          }
        ],
        "start": 158,
        "end": 192
      },
      "expression": false,
      "start": 143,
      "end": 192
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 194,
          "end": 197
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 194,
        "end": 199
      },
      "directive": null,
      "start": 194,
      "end": 200
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "bar",
          "optional": false,
          "typeAnnotation": null,
          "start": 201,
          "end": 204
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 201,
        "end": 206
      },
      "directive": null,
      "start": 201,
      "end": 207
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 207
}
```
