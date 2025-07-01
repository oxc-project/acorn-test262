__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Correct",
        "optional": false,
        "typeAnnotation": null,
        "start": 27,
        "end": 34
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "code",
              "optional": false,
              "typeAnnotation": null,
              "start": 40,
              "end": 44
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 46,
                "end": 52
              },
              "start": 44,
              "end": 52
            },
            "accessibility": null,
            "static": false,
            "start": 40,
            "end": 52
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "property",
              "optional": false,
              "typeAnnotation": null,
              "start": 54,
              "end": 62
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 64,
                  "end": 68
                },
                "start": 64,
                "end": 68
              },
              "start": 62,
              "end": 68
            },
            "accessibility": null,
            "static": false,
            "start": 54,
            "end": 68
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "err",
              "optional": false,
              "typeAnnotation": null,
              "start": 70,
              "end": 73
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUndefinedKeyword",
                "start": 75,
                "end": 84
              },
              "start": 73,
              "end": 84
            },
            "accessibility": null,
            "static": false,
            "start": 70,
            "end": 84
          }
        ],
        "start": 37,
        "end": 86
      },
      "declare": false,
      "start": 22,
      "end": 86
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Err",
        "optional": false,
        "typeAnnotation": null,
        "start": 92,
        "end": 95
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "err",
              "optional": false,
              "typeAnnotation": null,
              "start": 101,
              "end": 104
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTemplateLiteralType",
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "",
                      "cooked": ""
                    },
                    "tail": false,
                    "start": 106,
                    "end": 109
                  },
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": " is wrong!",
                      "cooked": " is wrong!"
                    },
                    "tail": true,
                    "start": 115,
                    "end": 127
                  }
                ],
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 109,
                    "end": 115
                  }
                ],
                "start": 106,
                "end": 127
              },
              "start": 104,
              "end": 127
            },
            "accessibility": null,
            "static": false,
            "start": 101,
            "end": 127
          }
        ],
        "start": 98,
        "end": 129
      },
      "declare": false,
      "start": 87,
      "end": 129
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SomeReturnType",
        "optional": false,
        "typeAnnotation": null,
        "start": 135,
        "end": 149
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Correct",
              "optional": false,
              "typeAnnotation": null,
              "start": 152,
              "end": 159
            },
            "typeArguments": null,
            "start": 152,
            "end": 159
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Err",
              "optional": false,
              "typeAnnotation": null,
              "start": 162,
              "end": 165
            },
            "typeArguments": null,
            "start": 162,
            "end": 165
          }
        ],
        "start": 152,
        "end": 165
      },
      "declare": false,
      "start": 130,
      "end": 166
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "example",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "SomeReturnType",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 183,
                  "end": 197
                },
                "typeArguments": null,
                "start": 183,
                "end": 197
              },
              "start": 181,
              "end": 197
            },
            "start": 174,
            "end": 197
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ObjectExpression",
              "properties": [],
              "start": 200,
              "end": 202
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "SomeReturnType",
                "optional": false,
                "typeAnnotation": null,
                "start": 206,
                "end": 220
              },
              "typeArguments": null,
              "start": 206,
              "end": 220
            },
            "start": 200,
            "end": 220
          },
          "definite": false,
          "start": 174,
          "end": 220
        }
      ],
      "declare": false,
      "start": 168,
      "end": 221
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "example",
            "optional": false,
            "typeAnnotation": null,
            "start": 227,
            "end": 234
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "err",
            "optional": false,
            "typeAnnotation": null,
            "start": 235,
            "end": 238
          },
          "optional": false,
          "computed": false,
          "start": 227,
          "end": 238
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "undefined",
          "optional": false,
          "typeAnnotation": null,
          "start": 243,
          "end": 252
        },
        "start": 227,
        "end": 252
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "example",
                "optional": false,
                "typeAnnotation": null,
                "start": 257,
                "end": 264
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "property",
                "optional": false,
                "typeAnnotation": null,
                "start": 265,
                "end": 273
              },
              "optional": false,
              "computed": false,
              "start": 257,
              "end": 273
            },
            "directive": null,
            "start": 257,
            "end": 274
          }
        ],
        "start": 254,
        "end": 285
      },
      "alternate": null,
      "start": 223,
      "end": 285
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 22,
  "end": 285
}
```
