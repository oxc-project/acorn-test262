__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 161,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 57,
      "attributes": [],
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 7,
        "end": 57,
        "body": {
          "type": "TSModuleBlock",
          "start": 21,
          "end": 57,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 27,
              "end": 55,
              "attributes": [],
              "declaration": {
                "type": "VariableDeclaration",
                "start": 34,
                "end": 55,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 40,
                    "end": 54,
                    "definite": false,
                    "id": {
                      "type": "Identifier",
                      "start": 40,
                      "end": 43,
                      "decorators": [],
                      "name": "key",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "init": {
                      "type": "CallExpression",
                      "start": 46,
                      "end": 54,
                      "arguments": [],
                      "callee": {
                        "type": "Identifier",
                        "start": 46,
                        "end": 52,
                        "decorators": [],
                        "name": "Symbol",
                        "optional": false,
                        "typeAnnotation": null
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
          ]
        },
        "declare": false,
        "global": false,
        "id": {
          "type": "Identifier",
          "start": 17,
          "end": 20,
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null
        },
        "kind": "namespace"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 59,
      "end": 160,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 66,
        "end": 160,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 74,
          "end": 160,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 80,
              "end": 98,
              "accessibility": null,
              "computed": true,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "MemberExpression",
                "start": 81,
                "end": 88,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 81,
                  "end": 84,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 85,
                  "end": 88,
                  "decorators": [],
                  "name": "key",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 89,
                "end": 97,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 91,
                  "end": 97
                }
              },
              "value": null
            },
            {
              "type": "MethodDefinition",
              "start": 104,
              "end": 158,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 104,
                "end": 115,
                "decorators": [],
                "name": "constructor",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "constructor",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 115,
                "end": 158,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 118,
                  "end": 158,
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "start": 128,
                      "end": 152,
                      "directive": null,
                      "expression": {
                        "type": "AssignmentExpression",
                        "start": 128,
                        "end": 151,
                        "operator": "=",
                        "left": {
                          "type": "MemberExpression",
                          "start": 128,
                          "end": 141,
                          "computed": true,
                          "object": {
                            "type": "ThisExpression",
                            "start": 128,
                            "end": 132
                          },
                          "optional": false,
                          "property": {
                            "type": "MemberExpression",
                            "start": 133,
                            "end": 140,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 133,
                              "end": 136,
                              "decorators": [],
                              "name": "Foo",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 137,
                              "end": 140,
                              "decorators": [],
                              "name": "key",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        },
                        "right": {
                          "type": "Literal",
                          "start": 144,
                          "end": 151,
                          "raw": "\"hello\"",
                          "value": "hello"
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
          "start": 72,
          "end": 73,
          "decorators": [],
          "name": "C",
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
  "sourceType": "script",
  "hashbang": null
}
```
