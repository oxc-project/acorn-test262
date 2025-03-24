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
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 29,
            "name": "something",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 21,
              "end": 29,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 23,
                "end": 29
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
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
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 44,
            "end": 88,
            "id": {
              "type": "Identifier",
              "start": 44,
              "end": 57,
              "name": "dataSomething",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                    "name": "something",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 60,
                    "end": 68,
                    "value": {
                      "cooked": "data-",
                      "raw": "data-"
                    },
                    "tail": false
                  },
                  {
                    "type": "TemplateElement",
                    "start": 77,
                    "end": 79,
                    "value": {
                      "cooked": "",
                      "raw": ""
                    },
                    "tail": true
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
                  "name": "const",
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
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 91,
      "end": 175,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 98,
        "end": 175,
        "id": {
          "type": "Identifier",
          "start": 104,
          "end": 112,
          "name": "WithData",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 113,
          "end": 175,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 119,
              "end": 173,
              "static": false,
              "computed": true,
              "key": {
                "type": "Identifier",
                "start": 120,
                "end": 133,
                "name": "dataSomething",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "method",
              "value": {
                "type": "FunctionExpression",
                "start": 135,
                "end": 173,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
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
                "declare": false,
                "typeParameters": null,
                "returnType": null
              },
              "decorators": [],
              "override": false,
              "optional": true,
              "accessibility": null
            }
          ]
        },
        "decorators": [],
        "typeParameters": null,
        "implements": [],
        "abstract": false,
        "declare": false,
        "superTypeArguments": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 177,
      "end": 229,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 184,
        "end": 229,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 190,
            "end": 228,
            "id": {
              "type": "Identifier",
              "start": 190,
              "end": 191,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                      "name": "WithData",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [],
                    "typeArguments": null
                  },
                  "property": {
                    "type": "Literal",
                    "start": 211,
                    "end": 224,
                    "value": "ahahahaahah",
                    "raw": "\"ahahahaahah\""
                  },
                  "computed": true,
                  "optional": false
                }
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
