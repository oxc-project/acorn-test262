__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 12,
  "end": 159,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 12,
      "end": 39,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 23,
        "end": 39,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 25,
            "end": 37,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 25,
              "end": 31,
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": true,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 32,
              "end": 37,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 35,
                "end": 37,
                "body": []
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
        "start": 18,
        "end": 22,
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
      "start": 40,
      "end": 159,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 67,
        "end": 159,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 73,
            "end": 111,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 73,
              "end": 80,
              "decorators": [],
              "name": "method1",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 80,
              "end": 111,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 83,
                "end": 111,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 85,
                    "end": 109,
                    "argument": {
                      "type": "ChainExpression",
                      "start": 92,
                      "end": 108,
                      "expression": {
                        "type": "CallExpression",
                        "start": 92,
                        "end": 108,
                        "arguments": [],
                        "callee": {
                          "type": "MemberExpression",
                          "start": 92,
                          "end": 104,
                          "computed": false,
                          "object": {
                            "type": "Super",
                            "start": 92,
                            "end": 97
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 98,
                            "end": 104,
                            "decorators": [],
                            "name": "method",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "optional": true,
                        "typeArguments": null
                      }
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
            "start": 116,
            "end": 157,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 116,
              "end": 123,
              "decorators": [],
              "name": "method2",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 123,
              "end": 157,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 126,
                "end": 157,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 128,
                    "end": 155,
                    "argument": {
                      "type": "ChainExpression",
                      "start": 135,
                      "end": 154,
                      "expression": {
                        "type": "CallExpression",
                        "start": 135,
                        "end": 154,
                        "arguments": [],
                        "callee": {
                          "type": "MemberExpression",
                          "start": 135,
                          "end": 150,
                          "computed": true,
                          "object": {
                            "type": "Super",
                            "start": 135,
                            "end": 140
                          },
                          "optional": false,
                          "property": {
                            "type": "Literal",
                            "start": 141,
                            "end": 149,
                            "raw": "\"method\"",
                            "value": "method"
                          }
                        },
                        "optional": true,
                        "typeArguments": null
                      }
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
        "start": 46,
        "end": 53,
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 62,
        "end": 66,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
