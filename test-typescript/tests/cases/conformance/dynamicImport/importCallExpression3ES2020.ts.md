__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 20,
  "end": 70,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 20,
      "end": 69,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 27,
        "end": 69,
        "id": {
          "type": "Identifier",
          "start": 33,
          "end": 34,
          "name": "B",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 35,
          "end": 69,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 41,
              "end": 67,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 41,
                "end": 46,
                "name": "print",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "method",
              "value": {
                "type": "FunctionExpression",
                "start": 46,
                "end": 67,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "start": 49,
                  "end": 67,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 51,
                      "end": 66,
                      "argument": {
                        "type": "Literal",
                        "start": 58,
                        "end": 66,
                        "value": "I am B",
                        "raw": "\"I am B\""
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
              "optional": false,
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
      "id": {
        "type": "Identifier",
        "start": 15,
        "end": 18,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": true,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 21,
        "end": 107,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 27,
            "end": 69,
            "id": {
              "type": "Identifier",
              "start": 33,
              "end": 34,
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": {
              "type": "MemberExpression",
              "start": 43,
              "end": 66,
              "object": {
                "type": "AwaitExpression",
                "start": 44,
                "end": 63,
                "argument": {
                  "type": "ImportExpression",
                  "start": 50,
                  "end": 63,
                  "source": {
                    "type": "Literal",
                    "start": 57,
                    "end": 62,
                    "value": "./0",
                    "raw": "\"./0\""
                  },
                  "options": null
                }
              },
              "property": {
                "type": "Identifier",
                "start": 65,
                "end": 66,
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "body": {
              "type": "ClassBody",
              "start": 67,
              "end": 69,
              "body": []
            },
            "decorators": [],
            "typeParameters": null,
            "implements": [],
            "abstract": false,
            "declare": false,
            "superTypeArguments": null
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
                "id": {
                  "type": "Identifier",
                  "start": 78,
                  "end": 79,
                  "name": "c",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "NewExpression",
                  "start": 82,
                  "end": 89,
                  "callee": {
                    "type": "Identifier",
                    "start": 86,
                    "end": 87,
                    "name": "C",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [],
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 95,
            "end": 105,
            "expression": {
              "type": "CallExpression",
              "start": 95,
              "end": 104,
              "callee": {
                "type": "MemberExpression",
                "start": 95,
                "end": 102,
                "object": {
                  "type": "Identifier",
                  "start": 95,
                  "end": 96,
                  "name": "c",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 97,
                  "end": 102,
                  "name": "print",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ExpressionStatement",
      "start": 108,
      "end": 114,
      "expression": {
        "type": "CallExpression",
        "start": 108,
        "end": 113,
        "callee": {
          "type": "Identifier",
          "start": 108,
          "end": 111,
          "name": "foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
