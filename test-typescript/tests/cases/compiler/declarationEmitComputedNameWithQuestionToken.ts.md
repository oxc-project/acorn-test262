__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 229,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 30,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 29,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 29,
            "decorators": [],
            "name": "something",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 21,
              "end": 29,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 23,
                "end": 29
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 31,
      "end": 89,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 38,
        "end": 89,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 44,
            "end": 88,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 44,
              "end": 57,
              "decorators": [],
              "name": "dataSomething",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "TSAsExpression",
              "start": 60,
              "end": 88,
              "expression": {
                "type": "TemplateLiteral",
                "start": 60,
                "end": 79,
                "expressions": [
                  {
                    "type": "Identifier",
                    "start": 68,
                    "end": 77,
                    "decorators": [],
                    "name": "something",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 60,
                    "end": 68,
                    "tail": false,
                    "value": {
                      "cooked": "data-",
                      "raw": "data-"
                    }
                  },
                  {
                    "type": "TemplateElement",
                    "start": 77,
                    "end": 79,
                    "tail": true,
                    "value": {
                      "cooked": "",
                      "raw": ""
                    }
                  }
                ]
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 83,
                "end": 88,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 83,
                  "end": 88,
                  "decorators": [],
                  "name": "const",
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
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 91,
      "end": 175,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 98,
        "end": 175,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 113,
          "end": 175,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 119,
              "end": 173,
              "accessibility": null,
              "computed": true,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 120,
                "end": 133,
                "decorators": [],
                "name": "dataSomething",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": true,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 135,
                "end": 173,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 138,
                  "end": 173,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 148,
                      "end": 167,
                      "argument": {
                        "type": "Literal",
                        "start": 155,
                        "end": 166,
                        "raw": "\"something\"",
                        "value": "something",
                        "regex": null,
                        "bigint": null
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
            }
          ]
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 104,
          "end": 112,
          "decorators": [],
          "name": "WithData",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": null,
        "superTypeArguments": null,
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 177,
      "end": 229,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 184,
        "end": 229,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 190,
            "end": 228,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 190,
              "end": 191,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "CallExpression",
              "start": 194,
              "end": 228,
              "arguments": [],
              "callee": {
                "type": "TSNonNullExpression",
                "start": 194,
                "end": 226,
                "expression": {
                  "type": "MemberExpression",
                  "start": 194,
                  "end": 225,
                  "computed": true,
                  "object": {
                    "type": "NewExpression",
                    "start": 195,
                    "end": 209,
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "start": 199,
                      "end": 207,
                      "decorators": [],
                      "name": "WithData",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Literal",
                    "start": 211,
                    "end": 224,
                    "raw": "\"ahahahaahah\"",
                    "value": "ahahahaahah",
                    "regex": null,
                    "bigint": null
                  }
                }
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
