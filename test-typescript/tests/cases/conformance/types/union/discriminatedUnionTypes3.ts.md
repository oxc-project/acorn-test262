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
        "name": "Correct",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
              "name": "code",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
              "name": "property",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
              "name": "err",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
        "name": "Err",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
              "name": "err",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                      "cooked": "",
                      "raw": ""
                    },
                    "tail": false
                  },
                  {
                    "type": "TemplateElement",
                    "start": 115,
                    "end": 127,
                    "value": {
                      "cooked": " is wrong!",
                      "raw": " is wrong!"
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
        "name": "SomeReturnType",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
              "name": "Correct",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
              "name": "Err",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 174,
          "end": 220,
          "id": {
            "type": "Identifier",
            "start": 174,
            "end": 197,
            "name": "example",
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
                  "name": "SomeReturnType",
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
                "name": "SomeReturnType",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
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
            "name": "example",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 235,
            "end": 238,
            "name": "err",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "start": 243,
          "end": 252,
          "name": "undefined",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
                "name": "example",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 265,
                "end": 273,
                "name": "property",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
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
