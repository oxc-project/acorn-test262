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
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 7,
        "end": 91,
        "async": false,
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
                "computed": true,
                "object": {
                  "type": "Identifier",
                  "start": 80,
                  "end": 85,
                  "decorators": [],
                  "name": "parts",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Literal",
                  "start": 86,
                  "end": 87,
                  "raw": "0",
                  "value": 0
                }
              }
            }
          ]
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 16,
          "end": 19,
          "decorators": [],
          "name": "tag",
          "optional": false
        },
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
                  "optional": false
                }
              }
            }
          },
          {
            "type": "RestElement",
            "start": 49,
            "end": 65,
            "argument": {
              "type": "Identifier",
              "start": 52,
              "end": 58,
              "decorators": [],
              "name": "values",
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
            }
          }
        ]
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 92,
      "end": 141,
      "async": false,
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
                    "tail": true,
                    "value": {
                      "cooked": "foo",
                      "raw": "foo"
                    }
                  }
                ]
              },
              "tag": {
                "type": "Identifier",
                "start": 113,
                "end": 116,
                "decorators": [],
                "name": "tag",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 128,
            "end": 139,
            "expression": {
              "type": "TaggedTemplateExpression",
              "start": 128,
              "end": 138,
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
                    "tail": true,
                    "value": {
                      "cooked": "foo2",
                      "raw": "foo2"
                    }
                  }
                ]
              },
              "tag": {
                "type": "Identifier",
                "start": 128,
                "end": 131,
                "decorators": [],
                "name": "tag",
                "optional": false
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 101,
        "end": 104,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 143,
      "end": 192,
      "async": false,
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
                    "tail": true,
                    "value": {
                      "cooked": "bar",
                      "raw": "bar"
                    }
                  }
                ]
              },
              "tag": {
                "type": "Identifier",
                "start": 164,
                "end": 167,
                "decorators": [],
                "name": "tag",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 179,
            "end": 190,
            "expression": {
              "type": "TaggedTemplateExpression",
              "start": 179,
              "end": 189,
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
                    "tail": true,
                    "value": {
                      "cooked": "bar2",
                      "raw": "bar2"
                    }
                  }
                ]
              },
              "tag": {
                "type": "Identifier",
                "start": 179,
                "end": 182,
                "decorators": [],
                "name": "tag",
                "optional": false
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 152,
        "end": 155,
        "decorators": [],
        "name": "bar",
        "optional": false
      },
      "params": []
    },
    {
      "type": "ExpressionStatement",
      "start": 194,
      "end": 200,
      "expression": {
        "type": "CallExpression",
        "start": 194,
        "end": 199,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 194,
          "end": 197,
          "decorators": [],
          "name": "foo",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 201,
      "end": 207,
      "expression": {
        "type": "CallExpression",
        "start": 201,
        "end": 206,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 201,
          "end": 204,
          "decorators": [],
          "name": "bar",
          "optional": false
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
