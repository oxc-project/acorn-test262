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
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 29,
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
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 31,
      "end": 89,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 38,
        "end": 89,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 44,
            "end": 88,
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
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 60,
                    "end": 68,
                    "value": {
                      "raw": "data-",
                      "cooked": "data-"
                    },
                    "tail": false
                  },
                  {
                    "type": "TemplateElement",
                    "start": 77,
                    "end": 79,
                    "value": {
                      "raw": "",
                      "cooked": ""
                    },
                    "tail": true
                  }
                ],
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
                ]
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 83,
                "end": 88,
                "typeName": {
                  "type": "Identifier",
                  "start": 83,
                  "end": 88,
                  "decorators": [],
                  "name": "const",
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
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 91,
      "end": 175,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 98,
        "end": 175,
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
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 113,
          "end": 175,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 119,
              "end": 173,
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
              "value": {
                "type": "FunctionExpression",
                "start": 135,
                "end": 173,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
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
                        "value": "something",
                        "raw": "\"something\""
                      }
                    }
                  ]
                },
                "expression": false
              },
              "kind": "method",
              "computed": true,
              "static": false,
              "override": false,
              "optional": true,
              "accessibility": null
            }
          ]
        },
        "abstract": false,
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 177,
      "end": 229,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 184,
        "end": 229,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 190,
            "end": 228,
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
              "callee": {
                "type": "TSNonNullExpression",
                "start": 194,
                "end": 226,
                "expression": {
                  "type": "MemberExpression",
                  "start": 194,
                  "end": 225,
                  "object": {
                    "type": "NewExpression",
                    "start": 195,
                    "end": 209,
                    "callee": {
                      "type": "Identifier",
                      "start": 199,
                      "end": 207,
                      "decorators": [],
                      "name": "WithData",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": []
                  },
                  "property": {
                    "type": "Literal",
                    "start": 211,
                    "end": 224,
                    "value": "ahahahaahah",
                    "raw": "\"ahahahaahah\""
                  },
                  "optional": false,
                  "computed": true
                }
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
