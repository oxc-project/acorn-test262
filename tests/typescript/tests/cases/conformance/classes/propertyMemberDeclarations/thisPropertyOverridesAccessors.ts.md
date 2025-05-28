__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 60,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 59,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 9,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 10,
        "end": 59,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 16,
            "end": 36,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 20,
              "end": 21,
              "decorators": [],
              "name": "p",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 21,
              "end": 36,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 24,
                "end": 36,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 26,
                    "end": 34,
                    "argument": {
                      "type": "Literal",
                      "start": 33,
                      "end": 34,
                      "value": 1,
                      "raw": "1"
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 41,
            "end": 57,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 45,
              "end": 46,
              "decorators": [],
              "name": "p",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 46,
              "end": 57,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 47,
                  "end": 52,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 54,
                "end": 57,
                "body": []
              },
              "expression": false
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
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
  "end": 86,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 86,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 9,
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 18,
        "end": 21,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 22,
        "end": 86,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 28,
            "end": 84,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 28,
              "end": 39,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 39,
              "end": 84,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 42,
                "end": 84,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 52,
                    "end": 59,
                    "expression": {
                      "type": "CallExpression",
                      "start": 52,
                      "end": 59,
                      "callee": {
                        "type": "Super",
                        "start": 52,
                        "end": 57
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 68,
                    "end": 78,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 68,
                      "end": 78,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 68,
                        "end": 74,
                        "object": {
                          "type": "ThisExpression",
                          "start": 68,
                          "end": 72
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 73,
                          "end": 74,
                          "decorators": [],
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 77,
                        "end": 78,
                        "value": 2,
                        "raw": "2"
                      }
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
