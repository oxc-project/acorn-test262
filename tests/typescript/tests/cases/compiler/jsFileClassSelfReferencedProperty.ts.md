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
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 120,
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
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 31,
          "end": 120,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 35,
              "end": 118,
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
              "value": {
                "type": "FunctionExpression",
                "start": 47,
                "end": 118,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 50,
                  "end": 118,
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "start": 56,
                      "end": 114,
                      "expression": {
                        "type": "AssignmentExpression",
                        "start": 56,
                        "end": 114,
                        "operator": "=",
                        "left": {
                          "type": "MemberExpression",
                          "start": 56,
                          "end": 78,
                          "object": {
                            "type": "ThisExpression",
                            "start": 56,
                            "end": 60
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 61,
                            "end": 78,
                            "decorators": [],
                            "name": "testStackOverflow",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "right": {
                          "type": "CallExpression",
                          "start": 81,
                          "end": 114,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 81,
                            "end": 108,
                            "object": {
                              "type": "MemberExpression",
                              "start": 81,
                              "end": 103,
                              "object": {
                                "type": "ThisExpression",
                                "start": 81,
                                "end": 85
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 86,
                                "end": 103,
                                "decorators": [],
                                "name": "testStackOverflow",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 104,
                              "end": 108,
                              "decorators": [],
                              "name": "bind",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "ThisExpression",
                              "start": 109,
                              "end": 113
                            }
                          ],
                          "optional": false
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
