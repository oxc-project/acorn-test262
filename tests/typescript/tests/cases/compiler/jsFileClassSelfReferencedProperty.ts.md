__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 120,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 120,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 120,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 31,
          "end": 120,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 35,
              "end": 118,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 35,
                "end": 46,
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
                "start": 47,
                "end": 118,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 50,
                  "end": 118,
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "start": 56,
                      "end": 114,
                      "directive": null,
                      "expression": {
                        "type": "AssignmentExpression",
                        "start": 56,
                        "end": 114,
                        "operator": "=",
                        "left": {
                          "type": "MemberExpression",
                          "start": 56,
                          "end": 78,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 56,
                            "end": 60
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 61,
                            "end": 78,
                            "decorators": [],
                            "name": "testStackOverflow",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "right": {
                          "type": "CallExpression",
                          "start": 81,
                          "end": 114,
                          "arguments": [
                            {
                              "type": "ThisExpression",
                              "start": 109,
                              "end": 113
                            }
                          ],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 81,
                            "end": 108,
                            "computed": false,
                            "object": {
                              "type": "MemberExpression",
                              "start": 81,
                              "end": 103,
                              "computed": false,
                              "object": {
                                "type": "ThisExpression",
                                "start": 81,
                                "end": 85
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 86,
                                "end": 103,
                                "decorators": [],
                                "name": "testStackOverflow",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 104,
                              "end": 108,
                              "decorators": [],
                              "name": "bind",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "optional": false,
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
          "start": 13,
          "end": 30,
          "decorators": [],
          "name": "StackOverflowTest",
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
