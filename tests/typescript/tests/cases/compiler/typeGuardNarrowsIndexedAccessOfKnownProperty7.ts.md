__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 160,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 57,
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 7,
        "end": 57,
        "id": {
          "type": "Identifier",
          "start": 17,
          "end": 20,
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null
        },
        "body": {
          "type": "TSModuleBlock",
          "start": 21,
          "end": 57,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 27,
              "end": 55,
              "declaration": {
                "type": "VariableDeclaration",
                "start": 34,
                "end": 55,
                "kind": "const",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 40,
                    "end": 54,
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
                      "callee": {
                        "type": "Identifier",
                        "start": 46,
                        "end": 52,
                        "decorators": [],
                        "name": "Symbol",
                        "optional": false,
                        "typeAnnotation": null
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
          ]
        },
        "kind": "namespace",
        "declare": false,
        "global": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 59,
      "end": 160,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 66,
        "end": 160,
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
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 74,
          "end": 160,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 80,
              "end": 98,
              "decorators": [],
              "key": {
                "type": "MemberExpression",
                "start": 81,
                "end": 88,
                "object": {
                  "type": "Identifier",
                  "start": 81,
                  "end": 84,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 85,
                  "end": 88,
                  "decorators": [],
                  "name": "key",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
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
              "value": null,
              "computed": true,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null
            },
            {
              "type": "MethodDefinition",
              "start": 104,
              "end": 158,
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
              "value": {
                "type": "FunctionExpression",
                "start": 115,
                "end": 158,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 118,
                  "end": 158,
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "start": 128,
                      "end": 152,
                      "expression": {
                        "type": "AssignmentExpression",
                        "start": 128,
                        "end": 151,
                        "operator": "=",
                        "left": {
                          "type": "MemberExpression",
                          "start": 128,
                          "end": 141,
                          "object": {
                            "type": "ThisExpression",
                            "start": 128,
                            "end": 132
                          },
                          "property": {
                            "type": "MemberExpression",
                            "start": 133,
                            "end": 140,
                            "object": {
                              "type": "Identifier",
                              "start": 133,
                              "end": 136,
                              "decorators": [],
                              "name": "Foo",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 137,
                              "end": 140,
                              "decorators": [],
                              "name": "key",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "optional": false,
                          "computed": true
                        },
                        "right": {
                          "type": "Literal",
                          "start": 144,
                          "end": 151,
                          "value": "hello",
                          "raw": "\"hello\""
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
