__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "StackOverflowTest",
          "optional": false,
          "typeAnnotation": null,
          "start": 13,
          "end": 30
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "constructor",
                "optional": false,
                "typeAnnotation": null,
                "start": 35,
                "end": 46
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "AssignmentExpression",
                        "operator": "=",
                        "left": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 56,
                            "end": 60
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "testStackOverflow",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 61,
                            "end": 78
                          },
                          "optional": false,
                          "computed": false,
                          "start": 56,
                          "end": 78
                        },
                        "right": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 81,
                                "end": 85
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "testStackOverflow",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 86,
                                "end": 103
                              },
                              "optional": false,
                              "computed": false,
                              "start": 81,
                              "end": 103
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "bind",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 104,
                              "end": 108
                            },
                            "optional": false,
                            "computed": false,
                            "start": 81,
                            "end": 108
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "ThisExpression",
                              "start": 109,
                              "end": 113
                            }
                          ],
                          "optional": false,
                          "start": 81,
                          "end": 114
                        },
                        "start": 56,
                        "end": 114
                      },
                      "directive": null,
                      "start": 56,
                      "end": 114
                    }
                  ],
                  "start": 50,
                  "end": 118
                },
                "expression": false,
                "start": 47,
                "end": 118
              },
              "kind": "constructor",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 35,
              "end": 118
            }
          ],
          "start": 31,
          "end": 120
        },
        "abstract": false,
        "declare": false,
        "start": 7,
        "end": 120
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 120
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 120
}
```
