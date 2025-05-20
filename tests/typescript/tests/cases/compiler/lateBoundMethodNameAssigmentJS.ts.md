__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 159,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 31,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 30,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 13,
            "decorators": [],
            "name": "_symbol",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 16,
            "end": 30,
            "arguments": [
              {
                "type": "Literal",
                "start": 23,
                "end": 29,
                "raw": "\"_sym\"",
                "value": "_sym"
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 16,
              "end": 22,
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
    {
      "type": "ExportNamedDeclaration",
      "start": 32,
      "end": 159,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 39,
        "end": 159,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 53,
          "end": 159,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 59,
              "end": 130,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 59,
                "end": 70,
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
                "start": 70,
                "end": 130,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 73,
                  "end": 130,
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "start": 83,
                      "end": 124,
                      "directive": null,
                      "expression": {
                        "type": "AssignmentExpression",
                        "start": 83,
                        "end": 123,
                        "operator": "=",
                        "left": {
                          "type": "MemberExpression",
                          "start": 83,
                          "end": 96,
                          "computed": true,
                          "object": {
                            "type": "ThisExpression",
                            "start": 83,
                            "end": 87
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 88,
                            "end": 95,
                            "decorators": [],
                            "name": "_symbol",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "right": {
                          "type": "CallExpression",
                          "start": 99,
                          "end": 123,
                          "arguments": [
                            {
                              "type": "ThisExpression",
                              "start": 118,
                              "end": 122
                            }
                          ],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 99,
                            "end": 117,
                            "computed": false,
                            "object": {
                              "type": "MemberExpression",
                              "start": 99,
                              "end": 112,
                              "computed": true,
                              "object": {
                                "type": "ThisExpression",
                                "start": 99,
                                "end": 103
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 104,
                                "end": 111,
                                "decorators": [],
                                "name": "_symbol",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 113,
                              "end": 117,
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
            },
            {
              "type": "MethodDefinition",
              "start": 136,
              "end": 157,
              "accessibility": null,
              "computed": true,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 143,
                "end": 150,
                "decorators": [],
                "name": "_symbol",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 151,
                "end": 157,
                "async": true,
                "body": {
                  "type": "BlockStatement",
                  "start": 154,
                  "end": 157,
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
          "start": 45,
          "end": 52,
          "decorators": [],
          "name": "MyClass",
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
