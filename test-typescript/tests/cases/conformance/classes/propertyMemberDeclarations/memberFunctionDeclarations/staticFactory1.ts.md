__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 188,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 93,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 93,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 17,
            "end": 36,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 17,
              "end": 20,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 20,
              "end": 36,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 23,
                "end": 36,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 25,
                    "end": 34,
                    "argument": {
                      "type": "Literal",
                      "start": 32,
                      "end": 33,
                      "raw": "1",
                      "value": 1
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
          },
          {
            "type": "MethodDefinition",
            "start": 41,
            "end": 91,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 48,
              "end": 54,
              "decorators": [],
              "name": "create",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 54,
              "end": 91,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 57,
                "end": 91,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 67,
                    "end": 85,
                    "argument": {
                      "type": "NewExpression",
                      "start": 74,
                      "end": 84,
                      "arguments": [],
                      "callee": {
                        "type": "ThisExpression",
                        "start": 78,
                        "end": 82
                      },
                      "typeArguments": null
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
        "start": 6,
        "end": 10,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 95,
      "end": 149,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 122,
        "end": 149,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 128,
            "end": 147,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 128,
              "end": 131,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 131,
              "end": 147,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 134,
                "end": 147,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 136,
                    "end": 145,
                    "argument": {
                      "type": "Literal",
                      "start": 143,
                      "end": 144,
                      "raw": "2",
                      "value": 2
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
        "start": 101,
        "end": 108,
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 117,
        "end": 121,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 150,
      "end": 175,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 154,
          "end": 174,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 154,
            "end": 155,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 158,
            "end": 174,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 158,
              "end": 172,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 158,
                "end": 165,
                "decorators": [],
                "name": "Derived",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 166,
                "end": 172,
                "decorators": [],
                "name": "create",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 178,
      "end": 186,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 178,
        "end": 185,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 178,
          "end": 183,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 178,
            "end": 179,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 180,
            "end": 183,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
