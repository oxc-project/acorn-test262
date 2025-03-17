__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 72,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 22,
      "end": 71,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 29,
        "end": 71,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 37,
          "end": 71,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 43,
              "end": 69,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 43,
                "end": 48,
                "decorators": [],
                "name": "print",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 48,
                "end": 69,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 51,
                  "end": 69,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 53,
                      "end": 68,
                      "argument": {
                        "type": "Literal",
                        "start": 60,
                        "end": 68,
                        "raw": "\"I am B\"",
                        "value": "I am B"
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
          "start": 35,
          "end": 36,
          "decorators": [],
          "name": "B",
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
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 114,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 107,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 21,
        "end": 107,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 27,
            "end": 69,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 67,
              "end": 69,
              "body": []
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 33,
              "end": 34,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "implements": [],
            "superClass": {
              "type": "MemberExpression",
              "start": 43,
              "end": 66,
              "computed": false,
              "object": {
                "type": "AwaitExpression",
                "start": 44,
                "end": 63,
                "argument": {
                  "type": "ImportExpression",
                  "start": 50,
                  "end": 63,
                  "options": null,
                  "source": {
                    "type": "Literal",
                    "start": 57,
                    "end": 62,
                    "raw": "\"./0\"",
                    "value": "./0"
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 65,
                "end": 66,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "superTypeArguments": null,
            "typeParameters": null
          },
          {
            "type": "VariableDeclaration",
            "start": 74,
            "end": 90,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 78,
                "end": 89,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 78,
                  "end": 79,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "NewExpression",
                  "start": 82,
                  "end": 89,
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "start": 86,
                    "end": 87,
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "ExpressionStatement",
            "start": 95,
            "end": 105,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 95,
              "end": 104,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 95,
                "end": 102,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 95,
                  "end": 96,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 97,
                  "end": 102,
                  "decorators": [],
                  "name": "print",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 15,
        "end": 18,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 108,
      "end": 114,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 108,
        "end": 113,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 108,
          "end": 111,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
