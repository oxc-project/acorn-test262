__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 210,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 40,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 12,
        "decorators": [],
        "name": "Point2d",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 15,
        "end": 39,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 17,
            "end": 27,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 17,
              "end": 18,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 18,
              "end": 26,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 20,
                "end": 26
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 28,
            "end": 37,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 28,
              "end": 29,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 29,
              "end": 37,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 31,
                "end": 37
              }
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 92,
      "end": 139,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 98,
          "end": 138,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 98,
            "end": 99,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSSatisfiesExpression",
            "start": 102,
            "end": 138,
            "expression": {
              "type": "ObjectExpression",
              "start": 102,
              "end": 111,
              "properties": [
                {
                  "type": "Property",
                  "start": 104,
                  "end": 109,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 104,
                    "end": 105,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 107,
                    "end": 109,
                    "raw": "10",
                    "value": 10
                  }
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 122,
              "end": 138,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 129,
                "end": 138,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 130,
                    "end": 137,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 130,
                      "end": 137,
                      "decorators": [],
                      "name": "Point2d",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 122,
                "end": 129,
                "decorators": [],
                "name": "Partial",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 153,
      "end": 180,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 153,
        "end": 179,
        "arguments": [
          {
            "type": "CallExpression",
            "start": 165,
            "end": 178,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 165,
              "end": 176,
              "computed": false,
              "object": {
                "type": "MemberExpression",
                "start": 165,
                "end": 168,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 165,
                  "end": 166,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 167,
                  "end": 168,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 169,
                "end": 176,
                "decorators": [],
                "name": "toFixed",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 153,
          "end": 164,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 153,
            "end": 160,
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 161,
            "end": 164,
            "decorators": [],
            "name": "log",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 197,
      "end": 209,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 201,
          "end": 208,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 201,
            "end": 202,
            "decorators": [],
            "name": "p",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 205,
            "end": 208,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 205,
              "end": 206,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 207,
              "end": 208,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
