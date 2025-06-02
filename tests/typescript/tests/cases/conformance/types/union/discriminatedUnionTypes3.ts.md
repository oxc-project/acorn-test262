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
      "id": {
        "type": "Identifier",
        "start": 27,
        "end": 34,
        "decorators": [],
        "name": "Correct",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
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
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 40,
              "end": 44,
              "decorators": [],
              "name": "code",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 44,
              "end": 52,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 46,
                "end": 52
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 54,
            "end": 68,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 54,
              "end": 62,
              "decorators": [],
              "name": "property",
              "optional": false,
              "typeAnnotation": null
            },
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
                  "value": true,
                  "raw": "true"
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 70,
            "end": 84,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 70,
              "end": 73,
              "decorators": [],
              "name": "err",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 73,
              "end": 84,
              "typeAnnotation": {
                "type": "TSUndefinedKeyword",
                "start": 75,
                "end": 84
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 87,
      "end": 129,
      "id": {
        "type": "Identifier",
        "start": 92,
        "end": 95,
        "decorators": [],
        "name": "Err",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
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
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 101,
              "end": 104,
              "decorators": [],
              "name": "err",
              "optional": false,
              "typeAnnotation": null
            },
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
                    "value": {
                      "raw": "",
                      "cooked": ""
                    },
                    "tail": false
                  },
                  {
                    "type": "TemplateElement",
                    "start": 115,
                    "end": 127,
                    "value": {
                      "raw": " is wrong!",
                      "cooked": " is wrong!"
                    },
                    "tail": true
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
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 130,
      "end": 166,
      "id": {
        "type": "Identifier",
        "start": 135,
        "end": 149,
        "decorators": [],
        "name": "SomeReturnType",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
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
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
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
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 168,
      "end": 221,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 174,
          "end": 220,
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
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
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
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "IfStatement",
      "start": 223,
      "end": 285,
      "test": {
        "type": "BinaryExpression",
        "start": 227,
        "end": 252,
        "left": {
          "type": "MemberExpression",
          "start": 227,
          "end": 238,
          "object": {
            "type": "Identifier",
            "start": 227,
            "end": 234,
            "decorators": [],
            "name": "example",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 235,
            "end": 238,
            "decorators": [],
            "name": "err",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "start": 243,
          "end": 252,
          "decorators": [],
          "name": "undefined",
          "optional": false,
          "typeAnnotation": null
        }
      },
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
              "object": {
                "type": "Identifier",
                "start": 257,
                "end": 264,
                "decorators": [],
                "name": "example",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 265,
                "end": 273,
                "decorators": [],
                "name": "property",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "directive": null
          }
        ]
      },
      "alternate": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
