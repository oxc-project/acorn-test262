__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 285,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 22,
      "end": 86,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 27,
        "end": 34,
        "decorators": [],
        "name": "Correct",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 37,
        "end": 86,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 40,
            "end": 52,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 40,
              "end": 44,
              "decorators": [],
              "name": "code",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 44,
              "end": 52,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 46,
                "end": 52
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 54,
            "end": 68,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 54,
              "end": 62,
              "decorators": [],
              "name": "property",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 62,
              "end": 68,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 64,
                "end": 68,
                "literal": {
                  "type": "Literal",
                  "start": 64,
                  "end": 68,
                  "raw": "true",
                  "value": true
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 70,
            "end": 84,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 70,
              "end": 73,
              "decorators": [],
              "name": "err",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 73,
              "end": 84,
              "typeAnnotation": {
                "type": "TSUndefinedKeyword",
                "start": 75,
                "end": 84
              }
            }
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 87,
      "end": 129,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 92,
        "end": 95,
        "decorators": [],
        "name": "Err",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 98,
        "end": 129,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 101,
            "end": 127,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 101,
              "end": 104,
              "decorators": [],
              "name": "err",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 104,
              "end": 127,
              "typeAnnotation": {
                "type": "TSTemplateLiteralType",
                "start": 106,
                "end": 127,
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 106,
                    "end": 109,
                    "tail": false,
                    "value": {
                      "cooked": "",
                      "raw": ""
                    }
                  },
                  {
                    "type": "TemplateElement",
                    "start": 115,
                    "end": 127,
                    "tail": true,
                    "value": {
                      "cooked": " is wrong!",
                      "raw": " is wrong!"
                    }
                  }
                ],
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 109,
                    "end": 115
                  }
                ]
              }
            }
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 130,
      "end": 166,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 135,
        "end": 149,
        "decorators": [],
        "name": "SomeReturnType",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 152,
        "end": 165,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 152,
            "end": 159,
            "typeName": {
              "type": "Identifier",
              "start": 152,
              "end": 159,
              "decorators": [],
              "name": "Correct",
              "optional": false
            }
          },
          {
            "type": "TSTypeReference",
            "start": 162,
            "end": 165,
            "typeName": {
              "type": "Identifier",
              "start": 162,
              "end": 165,
              "decorators": [],
              "name": "Err",
              "optional": false
            }
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 168,
      "end": 221,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 174,
          "end": 220,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 174,
            "end": 197,
            "decorators": [],
            "name": "example",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 181,
              "end": 197,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 183,
                "end": 197,
                "typeName": {
                  "type": "Identifier",
                  "start": 183,
                  "end": 197,
                  "decorators": [],
                  "name": "SomeReturnType",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "TSAsExpression",
            "start": 200,
            "end": 220,
            "expression": {
              "type": "ObjectExpression",
              "start": 200,
              "end": 202,
              "properties": []
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 206,
              "end": 220,
              "typeName": {
                "type": "Identifier",
                "start": 206,
                "end": 220,
                "decorators": [],
                "name": "SomeReturnType",
                "optional": false
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "IfStatement",
      "start": 223,
      "end": 285,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 254,
        "end": 285,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 257,
            "end": 274,
            "expression": {
              "type": "MemberExpression",
              "start": 257,
              "end": 273,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 257,
                "end": 264,
                "decorators": [],
                "name": "example",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 265,
                "end": 273,
                "decorators": [],
                "name": "property",
                "optional": false
              }
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 227,
        "end": 252,
        "operator": "===",
        "left": {
          "type": "MemberExpression",
          "start": 227,
          "end": 238,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 227,
            "end": 234,
            "decorators": [],
            "name": "example",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 235,
            "end": 238,
            "decorators": [],
            "name": "err",
            "optional": false
          }
        },
        "right": {
          "type": "Identifier",
          "start": 243,
          "end": 252,
          "decorators": [],
          "name": "undefined",
          "optional": false
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
