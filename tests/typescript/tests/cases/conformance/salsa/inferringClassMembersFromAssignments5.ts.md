__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 259,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 49,
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
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 49,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 17,
            "end": 47,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 17,
              "end": 18,
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 18,
              "end": 47,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 21,
                "end": 47,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 31,
                    "end": 41,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 31,
                      "end": 41,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 31,
                        "end": 37,
                        "object": {
                          "type": "ThisExpression",
                          "start": 31,
                          "end": 35
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 36,
                          "end": 37,
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
                        "start": 40,
                        "end": 41,
                        "value": 1,
                        "raw": "1"
                      }
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
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
    },
    {
      "type": "ClassDeclaration",
      "start": 50,
      "end": 259,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 56,
        "end": 63,
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 72,
        "end": 76,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 77,
        "end": 259,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 83,
            "end": 216,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 83,
              "end": 94,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 94,
              "end": 216,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 97,
                "end": 216,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 107,
                    "end": 115,
                    "expression": {
                      "type": "CallExpression",
                      "start": 107,
                      "end": 114,
                      "callee": {
                        "type": "Super",
                        "start": 107,
                        "end": 112
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 200,
                    "end": 210,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 200,
                      "end": 210,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 200,
                        "end": 206,
                        "object": {
                          "type": "ThisExpression",
                          "start": 200,
                          "end": 204
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 205,
                          "end": 206,
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
                        "start": 209,
                        "end": 210,
                        "value": 1,
                        "raw": "1"
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
          },
          {
            "type": "MethodDefinition",
            "start": 221,
            "end": 257,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 221,
              "end": 225,
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 225,
              "end": 257,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 228,
                "end": 257,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 238,
                    "end": 251,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 245,
                      "end": 251,
                      "object": {
                        "type": "ThisExpression",
                        "start": 245,
                        "end": 249
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 250,
                        "end": 251,
                        "decorators": [],
                        "name": "p",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
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
  "sourceType": "script",
  "hashbang": null
}
```
