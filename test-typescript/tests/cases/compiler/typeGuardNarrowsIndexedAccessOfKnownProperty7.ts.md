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
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 7,
        "end": 57,
        "id": {
          "type": "Identifier",
          "start": 17,
          "end": 20,
          "name": "Foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 40,
                    "end": 54,
                    "id": {
                      "type": "Identifier",
                      "start": 40,
                      "end": 43,
                      "name": "key",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "init": {
                      "type": "CallExpression",
                      "start": 46,
                      "end": 54,
                      "callee": {
                        "type": "Identifier",
                        "start": 46,
                        "end": 52,
                        "name": "Symbol",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
          ]
        },
        "kind": "namespace",
        "declare": false,
        "global": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 59,
      "end": 160,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 66,
        "end": 160,
        "id": {
          "type": "Identifier",
          "start": 72,
          "end": 73,
          "name": "C",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 74,
          "end": 160,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 80,
              "end": 98,
              "static": false,
              "computed": true,
              "key": {
                "type": "MemberExpression",
                "start": 81,
                "end": 88,
                "object": {
                  "type": "Identifier",
                  "start": 81,
                  "end": 84,
                  "name": "Foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 85,
                  "end": 88,
                  "name": "key",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "value": null,
              "decorators": [],
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
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
              "accessibility": null
            },
            {
              "type": "MethodDefinition",
              "start": 104,
              "end": 158,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 104,
                "end": 115,
                "name": "constructor",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "constructor",
              "value": {
                "type": "FunctionExpression",
                "start": 115,
                "end": 158,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
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
                              "name": "Foo",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 137,
                              "end": 140,
                              "name": "key",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "computed": true,
                          "optional": false
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
  "sourceType": "script",
  "hashbang": null
}
```
